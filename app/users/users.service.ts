import { HttpModule, JsonpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { usertypes } from './user-types'

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{

	constructor(private _http: Http){

	}

	getUsers() : Observable<usertypes>{
		return this._http.get("http://jsonplaceholder.typicode.com/users")
			.map(res => res.json());
	}
}
