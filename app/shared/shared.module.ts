import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading.component';
import { PaginationComponent } from './pagination.component';

@NgModule({

	imports: [ CommonModule],

	declarations: [ LoadingComponent, PaginationComponent ],

	exports: [ LoadingComponent, PaginationComponent ],

	providers: []

})
export class SharedModule{

}