import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'inv-user-input',
  imports: [FormsModule],
  templateUrl: './inv-user-input.html',
  styleUrl: './inv-user-input.css',
})
export class InvUserInputComponent {
  enteredInitialInvestment: string = '0';

  enteredAnnualInvestment: string = '0';

  enteredExpectedReturn: string = '5';

  enteredDuration: string = '10';

  onSubmit(): void {}
}
