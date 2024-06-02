import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modules/referencias-material.module';
import { FormsModule } from '@angular/forms';
import {
  ColumnMode,
  NgxDatatableModule,
  SelectionType,
} from '@swimlane/ngx-datatable';
import { FestivoService } from '../../services/festivo.service';
import { MatDialog } from '@angular/material/dialog';
import { FestivoMsgComponent } from '../festivo-msg/festivo-msg.component';

@Component({
  selector: 'app-festivo',
  standalone: true,
  imports: [ReferenciasMaterialModule, FormsModule, NgxDatatableModule],
  templateUrl: './festivo.component.html',
  styleUrls: ['./festivo.component.css'],
})
export class FestivoComponent {
  public year: number = new Date().getFullYear();
  public fechaSeleccionada: any;
  public festivos: { festivo: string; dia: string; mes: string }[] = [];
  public festivoSeleccion: string | undefined;
  public columnas = [
    { name: 'Festivo', prop: 'festivo' },
    { name: 'Día', prop: 'dia' },
    { name: 'Mes', prop: 'mes' },
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;

  constructor(private servicio: FestivoService, private dialog: MatDialog) {
    this.listar();
  }

  public onActivate(event: any) {
    if (event.type === 'click') {
      this.festivoSeleccion = event.row;
    }
  }

  verificar() {
    // Verificar si se ha seleccionado una fecha
    if (!this.fechaSeleccionada) {
      this.mostrarMensaje('Por favor, seleccione una fecha válida.');
      return;
    }

    let fecha = new Date(this.fechaSeleccionada);

    // Validar la fecha seleccionada
    if (isNaN(fecha.getTime())) {
      this.mostrarMensaje('Por favor, seleccione una fecha válida.');
      return;
    }

    let month = fecha.getMonth() + 1;
    let day = fecha.getDate();

    // Comprobar si la fecha es razonable
    if (day > 31 || day < 1 || month > 12 || month < 1) {
      this.mostrarMensaje('Por favor, seleccione una fecha válida.');
      return;
    }

    this.servicio.verificar(fecha).subscribe(
      (response) => {
        this.mostrarMensaje(response); // Mostrar la respuesta como una cadena
      },
      (error) => {
        this.mostrarMensaje('Error al verificar la fecha: ' + error.message);
      }
    );
  }

  listar() {
    if (!this.year || isNaN(this.year)) {
      this.year = new Date().getFullYear(); // Asignar el año actual si el campo está vacío
      this.mostrarMensaje(
        'Debe ingresar un año válido. Se listarán festivos del ' +
          this.year +
          '.'
      );
    }

    this.servicio.listar(this.year).subscribe(
      (response) => {
        this.festivos = response.map((festivoStr) => {
          const [fecha, festivo] = festivoStr.split(' - ');
          const [dia, mes, year] = fecha.split('/');
          return { festivo, dia, mes };
        });
      },
      (error) => {
        this.mostrarMensaje('Error al listar festivos: ' + error.message);
      }
    );
  }

  mostrarMensaje(msg: string) {
    this.dialog.open(FestivoMsgComponent, {
      data: msg,
      width: '300px',
    });
  }
}
