import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket';

@Component({
  selector: 'item-tickets',
  imports: [NewTicketComponent],
  templateUrl: './item-tickets.html',
  styleUrls: ['../../../sup-app.css', './item-tickets.css'],
})
export class ItemTicketsComponent {}
