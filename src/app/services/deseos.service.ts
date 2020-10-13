import { Injectable } from '@angular/core';
import { Lista } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
listas: Lista[] = [];
  constructor() {
 this.cargarStorage();
 console.log('servicio Inicializado');
//  const lista1 = new Lista('Recolectar piedras del infinito');
//  console.log(lista1);
//   const lista2 = new Lista('Heroes a desaparecer');
//  this.listas.push(lista1, lista2);
// // console.log(lista1);
// // console.log(lista2);
//  console.log(this.listas);

   }

   crearLista(titulo: string) {
        const nuevaLista = new Lista(titulo);
        this.listas.push(nuevaLista);
        this.guardarStorage();
        return nuevaLista.id;
   }

   borrarLista(lista: Lista) {
  this.listas = this.listas.filter(listaData => {

    return listaData.id !== lista.id;

  });
  this.guardarStorage();
   }

   obtenerLista(id: string | number) {
 id = Number(id);
 return this.listas.find(listaData => listaData.id === id);
//  return this.listas.find(listaData => {
//    return listaData.id === id;
//  })
   }
   guardarStorage() {
 localStorage.setItem('data', JSON.stringify(this.listas));
   }

   cargarStorage() {
     if (localStorage.getItem('data')) {
      this.listas = JSON.parse( localStorage.getItem('data'));
     } else {
       this.listas = [];
     }
   }
  //  borrarLista(lista: Lista) {
  //   this.listas =    this.listas.filter ( listaData  => listaData.id !== lista.id);
  //   this.guardarStorage();
  //  }


}
