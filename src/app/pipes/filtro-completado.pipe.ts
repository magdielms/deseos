import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/list.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false, // se pone false para que se pueda llamar al filtro, sin importar donde en que componente fue el cambio
})
export class FiltroCompletadoPipe implements PipeTransform {
  transform(listas: Lista[], completada: boolean = true): Lista[] {
    return listas.filter((lista) => lista.terminada === completada);
  }
}
