import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CryptoService } from 'src/app/services/crypto.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  cryptoPrices: any = {};

  constructor(private userService: UserService, private cryptoService: CryptoService) {}

  ngOnInit(): void {
    forkJoin({
      users: this.userService.getUsers(),
      prices: this.cryptoService.getPrices()
    }).subscribe(({ users, prices }) => {
      this.users = users;
      this.cryptoPrices = prices;
    });
  }

  getPrice(crypto: string): number {
    return this.cryptoPrices[crypto]?.usd || 0;
  }
}
