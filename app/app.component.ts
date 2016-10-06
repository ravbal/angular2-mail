import {Component,Input} from '@angular/core';


@Component({
	selector:'app-component',
	template:'<h1>My {{title}}</h1>'+
		'<router-outlet></router-outlet>'


})


export class AppComponent{

title="Email Application";

}

