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
var shared_module_1 = require("../shared/shared.module");
var users_component_1 = require("./users.component");
var add_user_component_1 = require("./add-user.component");
var users_service_1 = require("./users.service");
var users_routing_1 = require("./users.routing");
var app_routing_1 = require("../app.routing");
var prevent_unsaved_guard_service_1 = require("../prevent-unsaved-guard.service");
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            common_1.CommonModule,
            http_1.HttpModule, http_1.JsonpModule,
            shared_module_1.SharedModule,
            users_routing_1.UsersRouting,
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
            users_service_1.UsersService,
            prevent_unsaved_guard_service_1.PreventUnsavedGuard
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map