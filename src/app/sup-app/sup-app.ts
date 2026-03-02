import { Component } from '@angular/core';
import { SupHeaderComponent } from './sup-header/sup-header';
import { ItemServerStatusComponent } from './sup-dashboard/dashboard-item/item-server-status/item-server-status';
import { ItemTrafficComponent } from './sup-dashboard/dashboard-item/item-traffic/item-traffic';
import { ItemTicketsComponent } from './sup-dashboard/dashboard-item/item-tickets/item-tickets';
import { DashboardItemComponent } from './sup-dashboard/dashboard-item/dashboard-item';

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
