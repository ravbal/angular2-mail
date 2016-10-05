import {Component, OnInit} from '@angular/core';
import {EmailService} from '../email.service'
import {Email} from "../email";

@Component({
	selector: 'my-email',
	templateUrl: '/app/email/email.component.html',
	styleUrls: ['app/email/email.component.css']

})

export class EmailComponent implements OnInit {
	emails: Email[];
	selectedEmail:Email;

	constructor(private emailService: EmailService) {
	}

	ngOnInit(): void {

		this.getEmails();
	}

	getEmails(): void {

		this.emailService.getEmails().then(emails=>this.emails = emails);
	}
	onSelect(email):void{
		this.selectedEmail=email;

	}

}