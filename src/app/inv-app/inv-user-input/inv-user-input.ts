import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnnualInvestmentData } from '../investment.model';

@Component({
  selector: 'inv-user-input',
  imports: [FormsModule],
  templateUrl: './inv-user-input.html',
  styleUrl: './inv-user-input.css',
})
export class InvUserInputComponent {
  @Output() calculateEvent = new EventEmitter<AnnualInvestmentData>();

  enteredInitialInvestment: string = '0';

  enteredAnnualInvestment: string = '0';

  enteredExpectedReturn: string = '5';

  enteredDuration: string = '10';

  onSubmit(): void {
    console.log('Submitted!');
    this.calculateEvent.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
    });
  }
}
