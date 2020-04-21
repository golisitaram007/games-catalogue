import { GameListAllComponent } from './../game-list-all/game-list-all.component';
import { ModalService } from './../../../services/modal.service';
import { Game } from './../../../models/model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-game-info',
    templateUrl: './game-info.component.html',
    styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent {

    @Input() label: string;
    @Input() size: number;
    @Input() grid: number;
    @Input() data: Game[] = [];

    constructor(private modalService: ModalService) {

    }

    showAllGames(label, data): void {
        this.modalService.init({
            component: GameListAllComponent,
            inputs: {
                data
            }
        }, {
            label
        });
    }

    trackByFn(index, item) {
        return item.id;
    }
}