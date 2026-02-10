import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'inv-user-input',
  imports: [FormsModule],
  templateUrl: './inv-user-input.html',
  styleUrl: './inv-user-input.css',
})
export class InvUserInputComponent {
  enteredInitialInvestment = signal('0');

  enteredAnnualInvestment = signal('0');

  enteredExpectedReturn = signal('5');

  enteredDuration = signal('10');

  private readonly investmentService = inject(InvestmentService);

  onSubmit(): void {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
    });
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
    this.enteredInitialInvestment.set('0');
  }
}
