import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modules/referencias-material.module';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ReferenciasMaterialModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {}
