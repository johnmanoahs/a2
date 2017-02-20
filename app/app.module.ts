import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
//import { Router, RouterModule } from '@angular/router';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { NavbarModule } from './navbar/navbar.module';
import { SharedModule } from './shared/shared.module';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
//import { LoadingComponent } from './loading.component';

import { routing } from './app.routing';
//import { PostsRouting } from './posts/posts.routing';
//import { UsersRouting } from './users/users.routing';


@NgModule({
  imports:      [ 
  					
            BrowserModule, 
            UsersModule,
            PostsModule,
            NavbarModule,
            SharedModule,
            //PostsRouting,
            //UsersRouting,
            routing
  					// Router, 
  					// RouterModule
  				],

  declarations: [ 
  					
            AppComponent,  
  					HomeComponent, 
  					NotFoundComponent
  					//routing 
  				],

  bootstrap:    [ 
  					
            AppComponent 

  				]
})
export class AppModule { }
