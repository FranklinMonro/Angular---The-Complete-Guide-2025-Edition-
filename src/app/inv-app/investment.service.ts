import { Injectable, signal } from '@angular/core';
import { AnnualInvestmentData, AnnualInvestmentResult } from './investment.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  resultsData = signal<AnnualInvestmentResult[] | undefined>(undefined);

  calculateInvestmentResults(data: AnnualInvestmentData): void {
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
    this.resultsData.set(annualData);
  }
}
