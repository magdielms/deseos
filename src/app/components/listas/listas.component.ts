import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from '../../models/list.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @ViewChild(IonList) lista: IonList;

// @Input() terminada = true;
@Input() terminadas;

  constructor(
    public deseosServices: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    console.log(deseosServices.listas);
    console.log(` valor del Input ${this.terminadas}`);
  }
  ngOnInit() {
    console.log(` valor del Input en en ngOninit ${this.terminadas}`);
  }

  listaSeleccionada(lista: Lista) {
    console.log(` valor del Input en listasel ${this.terminadas}`);
    if (this.terminadas) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }
  borrarLista(lista: Lista) {
    this.deseosServices.borrarLista(lista);
  }

  async editarLista(lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: 'Editar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          },
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            console.log(data);
            // aqui se  verifica si item si no es blanco
            if (data.titulo.length === 0) {
              return;
            }
            lista.titulo = data.titulo;
            this.deseosServices.guardarStorage();
            this.lista.closeSlidingItems();
            //       const listaId = this.deseosServices.crearLista(data.titulo);
            //this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);
            //       this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
            //this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);
          },
        },
      ],
    });
    alert.present();
  }
}
