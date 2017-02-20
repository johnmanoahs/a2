import { Router, RouterModule} from '@angular/router';

import { HomeComponent } from './home.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found.component';
//import { PreventUnsavedGuard } from './prevent-unsaved-guard.service';


export const routing = RouterModule.forRoot([

	{ path: '', 		component: HomeComponent },
	{ path: 'posts', 	component: PostsComponent },
	{ path: '**', 		component: NotFoundComponent }

]);