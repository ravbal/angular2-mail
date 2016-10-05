import {Component,Input} from '@angular/core';


@Component({
	selector:'app-component',
	template:'<h1>My {{title}}</h1>'+
	'<my-email></my-email>',
	stylesUrl:['app.componnet.css']


})


export class AppComponent{

title="Email Application";

}

