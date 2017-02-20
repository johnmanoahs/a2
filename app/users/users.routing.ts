import { Router, RouterModule} from '@angular/router';

import { UsersComponent } from './users.component';
//import { UserDetailsComponent } from './user-details.component';
import { AddUserComponent } from './add-user.component';
import { PreventUnsavedGuard } from '../prevent-unsaved-guard.service';


export const UsersRouting = RouterModule.forChild([

	{ 	path: 'users', 		
		component: UsersComponent 
	},
	{
		path: 'users/:id',
		component: AddUserComponent
	},
	{ 
		path: 'users/new',	
		component: AddUserComponent,
		canDeactivate: [ PreventUnsavedGuard ]
	}

]);