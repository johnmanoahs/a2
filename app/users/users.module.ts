import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component'

@NgModule({

	imports: [
				FormsModule
	],

	declarations: [

				UsersComponent
	],

	exports: [

				UsersComponent

	]

})
export class UsersModule{}