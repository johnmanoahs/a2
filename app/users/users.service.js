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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
//import { usertypes } from './user-types'
require("rxjs/Rx");
require("rxjs/add/operator/map");
var UsersService = (function () {
    function UsersService(_http) {
        this._http = _http;
        this._url = "http://jsonplaceholder.typicode.com/users";
    }
    //getUsers() : Observable<usertypes>{
    UsersService.prototype.getUsers = function () {
        return this._http.get(this._url)
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getUser = function (userid) {
        return this._http.get(this._url + '/' + userid)
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.addUser = function (user) {
        return this._http.post(this._url, JSON.stringify(user))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.updateUser = function (user) {
        return this._http.put(this.userURL(user.id), JSON.stringify(user))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.deleteUser = function (userid) {
        return this._http.delete(this.userURL(userid))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.userURL = function (userid) {
        return this._url + '/' + userid;
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map