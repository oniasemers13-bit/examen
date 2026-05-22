import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar,
         IonTitle, IonContent, IonList, IonItem, IonIcon,
         IonMenuToggle } from '@ionic/angular/standalone';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { addIcons } from 'ionicons';
import { personAddOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe, NgFor, RouterLink,
    IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar,
    IonTitle, IonContent, IonList, IonItem, IonIcon, IonMenuToggle
  ]
})
export class AppComponent implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor(private dataService: DataService) {
    addIcons({ personAddOutline });
  }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
}
