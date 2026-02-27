import { Component } from '@angular/core';
import { SupHeaderComponent } from './sup-header/sup-header';
import { ItemServerStatusComponent } from './dashboard-item/item-server-status/item-server-status';
import { ItemTrafficComponent } from './dashboard-item/item-traffic/item-traffic';
import { ItemTicketsComponent } from './dashboard-item/item-tickets/item-tickets';
import { DashboardItemComponent } from './dashboard-item/dashboard-item';

@Component({
  selector: 'sup-app',
  imports: [
    SupHeaderComponent,
    DashboardItemComponent,
    ItemServerStatusComponent,
    ItemTrafficComponent,
    ItemTicketsComponent,
  ],
  templateUrl: './sup-app.html',
  styleUrl: './sup-app.css',
})
export class SupAppComponent {}
