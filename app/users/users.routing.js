"use strict";
var router_1 = require("@angular/router");
var users_component_1 = require("./users.component");
//import { UserDetailsComponent } from './user-details.component';
var add_user_component_1 = require("./add-user.component");
var prevent_unsaved_guard_service_1 = require("../prevent-unsaved-guard.service");
exports.UsersRouting = router_1.RouterModule.forChild([
    { path: 'users',
        component: users_component_1.UsersComponent
    },
    {
        path: 'users/:id',
        component: add_user_component_1.AddUserComponent
    },
    {
        path: 'users/new',
        component: add_user_component_1.AddUserComponent,
        canDeactivate: [prevent_unsaved_guard_service_1.PreventUnsavedGuard]
    }
]);
//# sourceMappingURL=users.routing.js.map