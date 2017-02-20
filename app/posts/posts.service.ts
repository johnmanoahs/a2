import { Injectable } from '@angular/core';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostsService{

private _postsUrl = "http://jsonplaceholder.typicode.com/posts";

	constructor(private _http: Http){

	}

	getPosts(filter?){

		var url = this._postsUrl;

		if(filter && filter.userId)
			url += "?userId=" + filter.userId;

		return this._http.get(url)
					.map(posts => posts.json());
	}

	getPost(postid){
		return this._http.get((this._postsUrl+'/'+postid))
					.map(post => post.json());
	}

	getPostComments(postid){
		return this._http.get((this._postsUrl+'/'+postid+'/comments'))
					.map(postcomments => postcomments.json());
	}

	getUserPosts(userid){
		return this._http.get((this._postsUrl+'?userId='+userid))
					.map(userposts => userposts.json());
	}
}