import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { CryptoMarketComponent } from './components/crypto-market/crypto-market.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'crypto', component: CryptoMarketComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: '**', redirectTo: '/users', pathMatch: 'full' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
