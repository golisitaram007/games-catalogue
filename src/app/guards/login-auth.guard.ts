import { switchMap } from 'rxjs/operators';
import { GamePortalService } from './../services/game-portal.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {

  constructor(private router: Router, private gamePortalService: GamePortalService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.gamePortalService.getUserCredentials().pipe(
      switchMap((user: User) => {
        if (!user.username) {
          return of(true);
        } else {
          this.router.navigate(['']);
        }
      })
    );
  }

}
