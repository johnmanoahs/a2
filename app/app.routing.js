"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var users_component_1 = require("./users/users.component");
var add_user_component_1 = require("./users/add-user.component");
var posts_component_1 = require("./posts/posts.component");
var not_found_component_1 = require("./not-found.component");
// export const routing = RouterModule.forRoot([
// 	{ path: '', component: HomeComponent },
// 	{ path: 'users', component: UsersComponent},
// 	{ path: 'posts', component: PostsComponent},
// 	{ path: '**', component: NotFoundComponent}
// ]);
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'users/new', component: add_user_component_1.AddUserComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
]);
//# sourceMappingURL=app.routing.js.map