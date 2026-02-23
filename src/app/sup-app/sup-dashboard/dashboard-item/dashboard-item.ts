import { Component, input } from '@angular/core';

@Component({
  selector: 'dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css',
})
export class DashboardItemComponent {
  image = input.required<{ src: string; alt: string }>();

  title = input.required<string>();
}
