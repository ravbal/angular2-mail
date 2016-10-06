import {EmailDetailComponent} from './email-detail/email-detail.component';
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {EmailComponent} from "./email/email.component";
import {AppComponent} from "./app.component";


const appRoutes: Routes = [


	{
		path: 'email/:id',
		component: EmailDetailComponent
	},
	{
		path: 'email',
		component: EmailComponent
	},
	{
		path: '',
		redirectTo:'/email',
		pathMatch:'full'

	}

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);