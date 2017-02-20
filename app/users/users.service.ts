import { HttpModule, JsonpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { usertypes } from './user-types'

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{
	private _url = "http://jsonplaceholder.typicode.com/users";


	constructor(private _http: Http){

	}

	//getUsers() : Observable<usertypes>{
	getUsers(){
		return this._http.get(this._url)
			.map(res => res.json());
	}

	getUser(userid){
		return this._http.get(this._url + '/' + userid)
			.map(res => res.json());
	}

	addUser(user){
		return this._http.post(this._url, JSON.stringify(user))
			.map(res => res.json());
	}

	updateUser(user){
		return this._http.put(this.userURL(user.id), JSON.stringify(user))
			.map(res => res.json());
	}

	deleteUser(userid){
		return this._http.delete(this.userURL(userid))
			.map(res => res.json());
	}

	userURL(userid){
		return this._url + '/' + userid
	}

}
