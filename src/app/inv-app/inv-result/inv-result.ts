import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'inv-result',
  imports: [CurrencyPipe],
  templateUrl: './inv-result.html',
  styleUrl: './inv-result.css',
})
export class InvResultComponent {
  private readonly investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultsData());
}
