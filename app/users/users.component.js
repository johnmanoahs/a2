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
var users_service_1 = require("./users.service");
var router_1 = require("@angular/router");
var UsersComponent = (function () {
    function UsersComponent(_us, _router) {
        this._us = _us;
        this._router = _router;
        this.isLoading = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._us.getUsers()
            .subscribe(function (users) {
            _this._users = users;
            _this.isLoading = false;
            //console.log(users)
        });
    };
    UsersComponent.prototype.editUser = function (userid) {
        this._router.navigate(['users/', userid]);
        //console.log(userid);
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        if (confirm("Are you sure to delete " + user.name + "?")) {
            var index = this._users.indexOf(user);
            this._users.splice(index, 1);
            this._us.deleteUser(user.id)
                .subscribe(null, function (err) {
                console.log(err);
                _this._users.splice(index, 0, user);
            });
            console.log(user.id);
        }
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'users',
        templateUrl: 'app/users/users.component.html',
        styles: ["\n\n\t\t.centered{\n\t\t\ttext-align: center;\n\t\t}\n\n\t"]
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        router_1.Router])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map