import { ModalService } from './../../services/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    modalOptions$;
    constructor(private modalService: ModalService) {

    }

    ngOnInit(): void {
        this.modalOptions$ = this.modalService.modalOptions();
    }

    closeModal(): void {
        this.modalService.destroy();
    }
}
