import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmailValidator } from './email-validator';
import { routing } from '../app.routing';
import { UsersService } from './users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from './user';

@Component({
	selector: 'adduser',
	templateUrl: 'app/users/add-user.component.html',
	styles: [`

	.form-container{
		background-color: #f1f1f1;
		padding: 30px;
	}

	input.ng-touched.ng-invalid{
		border: 2px red solid;
	}


	`]
})
export class AddUserComponent implements OnInit{

	form: FormGroup;
	title = "Add a User";
	userid;
	user = new User();

	constructor(private _adduser: FormBuilder, 
				private _us: UsersService, 
				private _router: Router,
				private _aroute: ActivatedRoute
				){
		

		this.form = _adduser.group({
			name: 	[
						'', 
						Validators.compose([
							Validators.required			
						])
					],
			email: 	[
						'',
						Validators.compose([
							Validators.required
						])
					],
			phone: [],
			street: [],
			city: [],
			suite: [],
			zipcode: []
			// address: _adduser.group({
			// 		street: [],
			// 		city: [],
			// 		suite: [],
			// 		zipcode: []
			// })
		});

		//console.log(this._router.parseUrl(_router.url));
	}

	ngOnInit(){

		this._aroute.params.subscribe((params: Params) => {
			if(params['id']){
				//this.title = 'Edit User';
				this.userid = +params['id'];
			}
		});

		this.title = this.userid? 'Edit User' : 'Add New User';

		if(!this.userid)
			return;

		this._us.getUser(this.userid)
			.subscribe(res => {
								this.user = res; 
								console.log(this.user);
							},
					response => {
						if(response.status == 404){
							//console.log('not found')
							this._router.navigate(['NotFound']);
						}
					}
				)

	}

	OnSubmit(){
		var result;
		if(this.userid){
			result = this._us.updateUser(this.user);
		}
		else{
			result = this._us.addUser(this.user);
		}
		console.log(this.user);
		this.form.markAsPristine();	
		//this._us.addUser(this.user)
		result.subscribe(res => console.log(res));
		this._router.navigate(['/users']);
	}

}