"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var posts_service_1 = require("./posts.service");
var post_1 = require("./post");
var users_service_1 = require("../users/users.service");
var _ = require("underscore");
var PostsComponent = (function () {
    function PostsComponent(_ps, _us) {
        this._ps = _ps;
        this._us = _us;
        this.pagedPosts = [];
        this.pageSize = 10;
        this.hidePreview = true;
        this.currentpost = new post_1.Post();
        //isLoading = true;
        this.commentsLoading = false;
        this.userPostsLoading = false;
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        this.loadPosts();
    };
    PostsComponent.prototype.ngOnChanges = function () {
    };
    PostsComponent.prototype.loadUsers = function () {
        var _this = this;
        this._us.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            //this.userPostsLoading = false;
            //console.log(posts);
        });
    };
    PostsComponent.prototype.loadPosts = function (filter) {
        var _this = this;
        console.log(filter);
        this.postsSubscription = this._ps.getPosts(filter)
            .subscribe(function (posts) {
            _this.posts = posts;
            _this.pagedPosts = _.take(_this.posts, _this.pageSize);
            //console.log(posts); 
        }, null, function () { _this.userPostsLoading = false; });
    };
    PostsComponent.prototype.reloadPosts = function (filter) {
        this.loadPosts(filter);
    };
    PostsComponent.prototype.previewPost = function (postid) {
        var _this = this;
        this._ps.getPost(postid)
            .subscribe(function (post) {
            _this.hidePreview = false;
            _this.currentpost = post;
            //console.log(this.currentpost);
        }, null, function () { _this.commentsLoading = true; });
        this._ps.getPostComments(postid)
            .subscribe(function (postcomments) {
            _this.comments = postcomments;
            console.log(_this.comments);
        }, null, function () { _this.commentsLoading = false; });
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        selector: 'posts',
        templateUrl: 'app/posts/posts.component.html',
        styles: ["\n\t\n\t.posts li{ cursor: default}\n\n\t.posts li:hover{\n\t\tbackground:\t#ecf0f1;\n\t}\n\n\t.list-group-item.active,\t\n\t.list-group-item.active:hover,\t\n\t.list-group-item.active:focus\t{\t\n\t\t background-color:\t#ecf0f1;\n\t\t border-color:\t#ecf0f1;\t\n\t\t color: #2c3e50;\n\t}\n\n\t.commentprofilepic{\n\t\tborder-radius: 100%;\n\t}\n\n\t"]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService, users_service_1.UsersService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map