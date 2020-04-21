import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GameListAllComponent } from './game-list-all/game-list-all.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { HomeComponent } from './home/home.component';
import { VendorsComponent } from './vendors/vendors.components';
import { AuthUserComponent } from './auth-user.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';


const authUserRoutes: Routes = [
  {
    path: '',
    component: AuthUserComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [
    AuthUserComponent,
    VendorsComponent,
    HomeComponent,
    GamesComponent,
    GameInfoComponent,
    GameListAllComponent
  ],
  exports: [
    GameListAllComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authUserRoutes),
    InfiniteScrollModule
  ],
  entryComponents: [
    GameListAllComponent
  ]
})
export class AuthUserModule { }
