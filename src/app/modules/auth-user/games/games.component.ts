import { Game } from './../../../models/model';
import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit, OnChanges {

    @Input() games: Game[];

    latest: Game[];
    hot: Game[];
    popular: Game[];

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        const { previousValue, currentValue } = changes.games;
        const prevValString = JSON.stringify(previousValue);
        const currValString = JSON.stringify(currentValue);

        if (prevValString !== currValString) {
            this.hot = [];
            this.latest = [];
            this.popular = [];
            currentValue.forEach((game: Game) => {
                if (!game.hot && !game.new) {
                    this.popular.push(game);
                } else if (game.hot) {
                    this.hot.push(game);
                } else if (game.new) {
                    this.latest.push(game);
                }
            });
        }
    }
}