import { Observable } from 'rxjs';
import { GamePortalService } from './../../services/game-portal.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/model';

@Component({
    selector: 'app-auth-user',
    templateUrl: './auth-user.component.html',
    styleUrls: ['./auth-user.component.scss']
})
export class AuthUserComponent {

    user$: Observable<User>;
    constructor(private gamePortalService: GamePortalService) {
        this.user$ = this.gamePortalService.getUserCredentials();
    }

}
