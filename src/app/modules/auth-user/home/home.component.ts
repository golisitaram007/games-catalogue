import { GamePortalService } from './../../../services/game-portal.service';
import { Game, Vendor } from './../../../models/model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    games: Game[];
    sub: Subscription;
    constructor(private gamePortalService: GamePortalService) {
    }

    ngOnInit() {
    }

    getGamesByVendor(vendor: Vendor): void {
        this.sub = this.gamePortalService.getGamesByVendor(vendor.id)
            .subscribe(res => {
                this.games = res;
            });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}