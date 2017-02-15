import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
//import { Router, RouterModule } from '@angular/router';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { NavbarModule } from './navbar/navbar.module';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { routing } from './app.routing';


@NgModule({
  imports:      [ 
  					
            BrowserModule, 
            UsersModule,
            PostsModule,
            NavbarModule,
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
