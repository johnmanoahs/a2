import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { SharedModule } from '../shared/shared.module';

import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user.component'; 
import { UsersService } from './users.service';

import { UsersRouting } from './users.routing';
import { routing } from '../app.routing';

import { PreventUnsavedGuard } from '../prevent-unsaved-guard.service';

@NgModule({

	imports: [
				FormsModule,
				ReactiveFormsModule,
				CommonModule,
				HttpModule, JsonpModule,
				SharedModule,
				UsersRouting,
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

				UsersService,
				PreventUnsavedGuard
	]

})
export class UsersModule{}