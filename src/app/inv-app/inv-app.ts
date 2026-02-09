import { Component } from '@angular/core';
import { InvHeaderComponent } from './inv-header/inv-header';
import { InvUserInputComponent } from './inv-user-input/inv-user-input';
import { AnnualInvestmentData, AnnualInvestmentResult } from './investment.model';

@Component({
  selector: 'inv-app',
  imports: [InvHeaderComponent, InvUserInputComponent],
  templateUrl: './inv-app.html',
  styleUrls: ['./inv-app.css'],
})
export class InvAppComponent {
  onCalculateInvestmentResults(data: AnnualInvestmentData): AnnualInvestmentResult[] {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData: AnnualInvestmentResult[] = [];
    let investmentValue = initialInvestment;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment,
        totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    console.log(annualData);
    return annualData;
  }
}
