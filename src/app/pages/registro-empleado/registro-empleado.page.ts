import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { IonContent, IonList, IonListHeader, IonItem, IonLabel,
         IonInput, IonNote, IonButton, IonIcon,
         IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { Empleado } from '../../interfaces/interfaces';
import { HeaderComponent } from '../../components/header/header.component';
import { addIcons } from 'ionicons';
import { personOutline, briefcaseOutline, cashOutline,
         mailOutline, checkmarkCircleOutline, refreshOutline } from 'ionicons/icons';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.page.html',
  styleUrls: ['./registro-empleado.page.scss'],
  standalone: true,
  imports: [
    FormsModule, NgIf,
    IonContent, IonList, IonListHeader, IonItem, IonLabel,
    IonInput, IonNote, IonButton, IonIcon,
    IonSelect, IonSelectOption,
    HeaderComponent
  ]
})
export class RegistroEmpleadoPage implements OnInit {

  correoPattern = '^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$';

  empleado: Empleado = {
    nombreCompleto: '',
    cargo: '',
    salario: 0,
    correo: ''
  };

  constructor() {
    addIcons({
      personOutline, briefcaseOutline, cashOutline,
      mailOutline, checkmarkCircleOutline, refreshOutline
    });
  }

  ngOnInit() {}

  onRegistrar(formulario: NgForm) {
    if (formulario.invalid) { return; }
    console.log('=== REGISTRO DE EMPLEADO ===');
    console.log('Nombre  :', this.empleado.nombreCompleto);
    console.log('Cargo   :', this.empleado.cargo);
    console.log('Salario :', this.empleado.salario);
    console.log('Correo  :', this.empleado.correo);
    console.log('Objeto  :', this.empleado);
  }
}
