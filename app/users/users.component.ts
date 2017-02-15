import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'users',
	templateUrl: 'app/users/users.component.html',
	styles: [`

		.centered{
			text-align: center;
		}

	`]
	
})
export class UsersComponent implements OnInit{

	private _users:string[];
	private _isLoading = true;

	constructor(private _us: UsersService){}


	ngOnInit(){
		this._us.getUsers()
			.subscribe(users => {
				this._users = users;
				this._isLoading = false;
			})
	}

}