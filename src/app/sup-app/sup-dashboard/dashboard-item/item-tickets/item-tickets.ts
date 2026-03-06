import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket';

@Component({
  selector: 'item-tickets',
  imports: [NewTicketComponent],
  templateUrl: './item-tickets.html',
  styleUrls: ['./item-tickets.css'],
})
export class ItemTicketsComponent {}
