import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AddUserComponent } from './users/add-user.component';
import { FormGroup } from '@angular/forms';

export interface FormComponent{
	form: FormGroup;
}

export class PreventUnsavedGuard implements CanDeactivate<FormComponent>{
	
	canDeactivate(component: FormComponent){
		if (component.form.dirty){
			return confirm("Are you sure?");
		}

		return true;
	}
}
