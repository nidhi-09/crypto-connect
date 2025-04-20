import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CryptoService {
  private apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,dogecoin,polygon,polkadot,litecoin,tron,chainlink&vs_currencies=usd';

  constructor(private http: HttpClient) {}

  getPrices(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
