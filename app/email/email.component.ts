import {Component, OnInit} from '@angular/core';
import {EmailService} from '../email.service'
import {Email} from "../email";
import {Router} from '@angular/router';
@Component({
	selector: 'my-email',
	templateUrl: '/app/email/email.component.html',
	styleUrls: ['app/email/email.component.css']

})

export class EmailComponent implements OnInit {
	emails: Email[];
	selectedEmail: Email;
	public editMode =false;

	constructor(private emailService: EmailService,
				private router: Router) {
	}

	ngOnInit(): void {

		this.getEmails();
	}

	getEmails(): void {

		this.emailService.getEmails().then(emails=>this.emails = emails);
	}

	onSelect(email): void {
		this.selectedEmail = email;
		this.editMode=true;

	}

	gotoDetail(email: Email): void {

		let link = ['\email', email.id];
		this.router.navigate(link);
	}

}