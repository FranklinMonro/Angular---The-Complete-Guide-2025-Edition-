import { Component, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

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

  private el = inject(ElementRef);

  onClick(): void {
    console.log('Control clicked');
    console.log('Element:', this.el);
  }
}
