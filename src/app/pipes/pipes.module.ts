import { NgModule } from '@angular/core';
import { FiltroCompletadoPipe } from './filtro-completado.pipe';
import { FilterTasksPipe } from './filter-tasks.pipe';

@NgModule({
  declarations: [FiltroCompletadoPipe, FilterTasksPipe],
  exports: [FiltroCompletadoPipe, FilterTasksPipe],
})
export class PipesModule {}
