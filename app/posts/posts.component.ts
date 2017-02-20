import {Component, OnInit, OnChanges} from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './post';
import { UsersService } from '../users/users.service';

import * as _ from 'underscore'; 

@Component({
	selector: 'posts',
	templateUrl: 'app/posts/posts.component.html',
	styles: [`
	
	.posts li{ cursor: default}

	.posts li:hover{
		background:	#ecf0f1;
	}

	.list-group-item.active,	
	.list-group-item.active:hover,	
	.list-group-item.active:focus	{	
		 background-color:	#ecf0f1;
		 border-color:	#ecf0f1;	
		 color: #2c3e50;
	}

	.commentprofilepic{
		border-radius: 100%;
	}

	`]
})
export class PostsComponent implements OnInit, OnChanges{

	posts: string[];
	pagedPosts = [];
	pageSize = 10;
	users: string[];
	hidePreview = true;
	currentpost = new Post();
	//isLoading = true;
	commentsLoading = false;
	userPostsLoading = false;
	postsSubscription;
	comments: string[];


	

	constructor(private _ps: PostsService, private _us: UsersService){}

	ngOnInit(){

		this.loadUsers();

		this.loadPosts();

		
	}

	ngOnChanges(){

	}

	private loadUsers(){
		this._us.getUsers()
			.subscribe(users => {
				this.users = users;
				//this.userPostsLoading = false;
				//console.log(posts);
			});
	}

	private loadPosts(filter?){
		console.log(filter);
		this.postsSubscription = this._ps.getPosts(filter)
			.subscribe(
				posts => {
				this.posts = posts;
				this.pagedPosts = _.take(this.posts, this.pageSize);
				
				//console.log(posts); 
			},
			null,
			() => {this.userPostsLoading = false;});
	}

	reloadPosts(filter){
		this.loadPosts(filter);
	}

	previewPost(postid){
		this._ps.getPost(postid)
			.subscribe(

				post => {
				this.hidePreview = false;
				this.currentpost = post;
				//console.log(this.currentpost);
			},
			null,
			() => {this.commentsLoading = true;});

		this._ps.getPostComments(postid)
			.subscribe(
				postcomments => {
				this.comments = postcomments;
				console.log(this.comments);
			},
			null,
			() => {this.commentsLoading = false;});

	}

}