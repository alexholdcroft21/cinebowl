import { NgModule } from '@angular/core';
import { MyFilterPipe } from './myfilter/myfilter';
@NgModule({
	declarations: [MyFilterPipe],
	imports: [],
	exports: [MyFilterPipe]
})
export class PipesModule {
	static forRoot() {
	 return {
			 ngModule: PipesModule,
			 providers: [],
	 };
}
}
