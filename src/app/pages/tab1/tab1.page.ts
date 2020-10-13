import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
//import { Lista } from 'src/app/models/list.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosServices: DeseosService,
              private router: Router,
              private alertCtrl: AlertController) {}

async agregarLista() {
const alert = await this.alertCtrl.create({
    header: 'Nueva Lista',
    inputs: [
      {
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista',
      }
    ],
    buttons: [
      {
       text:  'Cancelar',
       role:  'cancel',
       handler: () => {
         console.log('Cancelar');
       }
      },
      { 
        text: 'Crear',
        handler: (data) => {
       console.log(data);
      // aqui se  verifica si item si no es blanco
       if ( data.titulo.length === 0) {
         return;
       }
       const listaId = this.deseosServices.crearLista(data.titulo);
       //this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);
       this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
       //this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);

       }
      }
    ]
  });
alert.present();
  }

  // listaSeleccionada( lista: Lista) {
  //     this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
  //   }

  }





