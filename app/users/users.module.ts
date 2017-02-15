import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule, Http } from '@angular/http';

import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user.component'; 
import { UsersService } from './users.service';

import { routing } from '../app.routing';

@NgModule({

	imports: [
				FormsModule,
				CommonModule,
				HttpModule, JsonpModule,
				routing
	],

	declarations: [

				UsersComponent,
				AddUserComponent
	],

	exports: [

				UsersComponent,
				AddUserComponent

	],

	providers: [

				UsersService
	]

})
export class UsersModule{}