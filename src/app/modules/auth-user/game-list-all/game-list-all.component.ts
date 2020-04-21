import { Game } from './../../../models/model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-game-list-all',
    templateUrl: './game-list-all.component.html',
    styleUrls: ['./game-list-all.component.scss']
})
export class GameListAllComponent implements OnInit {

    @Input() data: Game[];

    initialData;
    currentSize = 15;
    loading: boolean;

    constructor() {

    }

    ngOnInit(): void {
        this.loadInitialData(this.currentSize);
    }

    loadInitialData(size): void {
        this.initialData = this.data.length > 15 ? this.data.slice(0, size) : this.data;
    }

    onScroll() {
        this.loading = true;
        this.currentSize += 10;
        setTimeout(() => {
            if (this.currentSize > this.data.length) {
                this.loadInitialData(this.data.length);
            } else {
                this.loadInitialData(this.currentSize);
            }
            this.loading = false;
        }, 1000);
    }
}