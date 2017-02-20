import { Component, Input } from '@angular/core';

@Component({
	selector: 'loading',
	template: `
				<div *ngIf="visible">
					<i class="fa fa-spinner fa-spin fa-3x"></i>
				</div>

	`
})
export class LoadingComponent{

	@Input() visible = true;

}