import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-crypto-market',
  templateUrl: './crypto-market.component.html',
  styleUrls: ['./crypto-market.component.css']
})
export class CryptoMarketComponent implements OnInit {
  cryptoPrices: { [key: string]: { usd: number } } = {};
  coins: string[] = [];

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService.getPrices().subscribe(prices => {
      this.cryptoPrices = prices;
      this.coins = Object.keys(prices);
    });
  }
}
