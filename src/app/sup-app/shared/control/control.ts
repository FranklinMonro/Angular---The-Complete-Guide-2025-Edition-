import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shared-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  label = input.required<string>();

  onClick(): void {
    console.log('Control clicked');
  }
}
