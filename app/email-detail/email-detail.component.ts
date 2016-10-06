import {Component} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {EmailService} from '../email.service';
import {Email} from '../email';

@Component({
	selector:'my-email-detail',
	templateUrl:'/app/email-detail/email-detail.component.html',
	styleUrls:['app/email-detail/email-detail.component.css']

})

export class EmailDetailComponent{

	email:Email;
	constructor(private emailService: EmailService,
				private route: ActivatedRoute
				) {
	}


	ngOnInit(): void {

		this.route.params.forEach((params: Params)=> {

			let id = +params['id'];
			this.emailService.getEmail(id)
				.then(email=>this.email = email);
		});

	}



}