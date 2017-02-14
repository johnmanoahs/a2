import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component'
import { routing } from '../app.routing';

@NgModule({
	imports: [ routing ],
	declarations: [

			NavbarComponent

	],
	exports: [

			NavbarComponent

	]
})
export class NavbarModule{}