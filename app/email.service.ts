import {Injectable} from '@angular/core';
import {EMAILS} from './mock-emails';
import {Email} from './email';


@Injectable()
export class EmailService {

	getEmails(): Promise<Email[]> {
		return Promise.resolve(EMAILS);

	}

	getEmail(id:number):Promise<Email>{
		return this.getEmails()
			.then(emails=>emails.find(emails=>emails.id === id));

	}

}