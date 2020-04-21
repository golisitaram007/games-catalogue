import { Vendor } from './../../../models/model';
import { Observable } from 'rxjs';
import { GamePortalService } from './../../../services/game-portal.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-vendors',
    templateUrl: './vendors.component.html',
    styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

    @Output() activeVendor: EventEmitter<Vendor> = new EventEmitter<Vendor>();

    vendors$: Observable<Vendor[]>;
    selectedVendor = 0;
    constructor(
        private gamePortalService: GamePortalService
    ) {
        this.vendors$ = this.gamePortalService.getVendors().pipe(
            tap(vendors => this.emitActiveVendor(vendors[this.selectedVendor]))
        );
    }

    ngOnInit(): void {

    }

    getVendorGames(vendor: Vendor, index: number): void {
        this.selectedVendor = index;
        this.emitActiveVendor(vendor);
    }

    emitActiveVendor(vendor: Vendor): void {
        this.activeVendor.emit(vendor);
    }

    trackByFn(index, item) {
        return item.id;
    }
}