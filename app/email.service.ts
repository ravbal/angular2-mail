import {Injectable} from '@angular/core';
import {EMAILS} from './mock-emails';
import {Email} from './email';


@Injectable()
export class EmailService {

	getEmails(): Promise<Email[]> {
		return Promise.resolve(EMAILS);

	}
}