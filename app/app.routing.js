"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var posts_component_1 = require("./posts/posts.component");
var not_found_component_1 = require("./not-found.component");
//import { PreventUnsavedGuard } from './prevent-unsaved-guard.service';
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
]);
//# sourceMappingURL=app.routing.js.map