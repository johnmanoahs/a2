import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PostsComponent } from './posts.component';

import { routing } from '../app.routing';
import { PostsRouting } from './posts.routing';
import { PostsService } from './posts.service';
//import { LoadingComponent } from '../loading.component';

@NgModule({

	imports: [
			CommonModule,
			SharedModule,
			FormsModule, ReactiveFormsModule,
			PostsRouting,
			routing

	],

	declarations: [

			PostsComponent
	],

	exports: [

			PostsComponent

	],

	providers: [ PostsService]

})
export class PostsModule{}