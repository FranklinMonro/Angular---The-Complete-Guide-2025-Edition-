import { Component } from '@angular/core';
import { SupHeaderComponent } from './sup-header/sup-header';
import { ServerStatusComponent } from './dashboard-item/server-status/server-status';
import { TrafficComponent } from './dashboard-item/traffic/traffic';
import { TicketsComponent } from './dashboard-item/tickets/tickets';
import { DashboardItemComponent } from './dashboard-item/dashboard-item';

@Component({
  selector: 'sup-app',
  imports: [
    SupHeaderComponent,
    DashboardItemComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
  ],
  templateUrl: './sup-app.html',
  styleUrl: './sup-app.css',
})
export class SupAppComponent {}
