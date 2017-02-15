import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'navbar',
	templateUrl: 'app/navbar/navbar.component.html',
	styles: [`


	.nav.navbar-nav .active{
		background-color: black;
	}


	`]
})
export class NavbarComponent{
	constructor(public router: Router){}
}