import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EmailComponent} from './email/email.component'

@NgModule({
	imports: [
		FormsModule,
		BrowserModule
	],
	declarations: [
		AppComponent,
		EmailComponent
	],
	bootstrap: [
		AppComponent
	]


})

export class AppModule {


}