import { Component } from '@angular/core';
import { SharedButtonComponent } from '../../../../shared/button/button';
import { ControlComponent } from '../../../../shared/control/control';

@Component({
  selector: 'new-ticket',
  imports: [SharedButtonComponent, ControlComponent],
  templateUrl: './new-ticket.html',
  styleUrls: ['./new-ticket.css'],
})
export class NewTicketComponent {}
