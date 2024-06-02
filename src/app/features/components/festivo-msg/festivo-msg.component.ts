import { Component, Inject } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modules/referencias-material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-festivo-msg',
  standalone: true,
  imports: [ReferenciasMaterialModule],
  templateUrl: './festivo-msg.component.html',
  styleUrl: './festivo-msg.component.css',
})
export class FestivoMsgComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public msg: string,
    public dialogRef: MatDialogRef<FestivoMsgComponent>
  ) {}

  cerrar() {
    this.dialogRef.close();
  }
}
