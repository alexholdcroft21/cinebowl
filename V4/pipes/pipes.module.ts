import { NgModule } from '@angular/core';
import { MyfilterPipe } from './myfilter/myfilter';
@NgModule({
	declarations: [MyfilterPipe],
	imports: [],
	exports: [MyfilterPipe]
})
export class PipesModule {
	static forRoot() {
	 return {
			 ngModule: PipesModule,
			 providers: [],
	 };
}
}
