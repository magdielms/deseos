import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/list.model';

@Pipe({
  name: 'filterTasks',
  //pure: false
  })
export class FilterTasksPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {
    return listas.filter(lista => lista.terminada === completada);
  }

}
