import { Component } from '@angular/core';
import { SharedButtonComponent } from '../../../../shared/button/button';

@Component({
  selector: 'new-ticket',
  imports: [SharedButtonComponent],
  templateUrl: './new-ticket.html',
  styleUrls: ['../../../../sup-app.css', './new-ticket.css'],
})
export class NewTicketComponent {}
