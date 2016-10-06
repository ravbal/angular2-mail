import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EmailComponent} from './email/email.component'
import {EmailDetailComponent} from './email-detail/email-detail.component'
import {EmailService} from './email.service';
import {routing} from './app.routing';

@NgModule({
	imports: [
		FormsModule,
		BrowserModule,
		routing
	],
	declarations: [
		AppComponent,
		EmailComponent,
		EmailDetailComponent
	],
	bootstrap: [
		AppComponent
	],
	providers:[
		EmailService
	]


})

export class AppModule {


}