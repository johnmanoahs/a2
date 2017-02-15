"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var users_component_1 = require("./users.component");
var add_user_component_1 = require("./add-user.component");
var users_service_1 = require("./users.service");
var app_routing_1 = require("../app.routing");
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            http_1.HttpModule, http_1.JsonpModule,
            app_routing_1.routing
        ],
        declarations: [
            users_component_1.UsersComponent,
            add_user_component_1.AddUserComponent
        ],
        exports: [
            users_component_1.UsersComponent,
            add_user_component_1.AddUserComponent
        ],
        providers: [
            users_service_1.UsersService
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map