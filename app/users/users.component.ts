import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


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
	private isLoading = true;

	constructor(
			private _us: UsersService,
			private _router: Router
	){}

	ngOnInit(){
		this._us.getUsers()
			.subscribe(users => {
				this._users = users;
				this.isLoading = false;
				//console.log(users)
			})
	}

	editUser(userid){
		this._router.navigate(['users/', userid]);
		//console.log(userid);
	}

	deleteUser(user){
		if(confirm("Are you sure to delete " + user.name + "?")){
			var index = this._users.indexOf(user);
			this._users.splice(index, 1);
			this._us.deleteUser(user.id)
				.subscribe(null,  
							err => {
								console.log(err);
								this._users.splice(index, 0, user)
							});
			console.log(user.id);
		}
	}

}