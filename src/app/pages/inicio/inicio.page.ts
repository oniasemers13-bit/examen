import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonButtons,
         IonMenuButton, IonContent, IonList, IonItem,
         IonIcon, IonLabel } from '@ionic/angular/standalone';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { HeaderComponent } from '../../components/header/header.component';
import { addIcons } from 'ionicons';
import { personAddOutline } from 'ionicons/icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    AsyncPipe, NgFor, RouterLink,
    IonHeader, IonToolbar, IonTitle, IonButtons,
    IonMenuButton, IonContent, IonList, IonItem,
    IonIcon, IonLabel,
    HeaderComponent
  ]
})
export class InicioPage implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor(
    private menuCtrl: MenuController,
    private dataService: DataService
  ) {
    addIcons({ personAddOutline });
  }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
}