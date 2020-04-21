import { Subject, Observable } from 'rxjs';
import { DomManipulationService } from './dom-manipulation.service';
import { Injectable } from '@angular/core';

interface ComponentOptions {
    component: any;
    inputs?: object;
    outputs?: object;
}

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    private modalOptSub: Subject<any> = new Subject();
    constructor(
        private domManipulate: DomManipulationService
    ) {
    }


    private modalElementId = 'modal-container';

    init(componentOptions: ComponentOptions, modalOptions: object) {
        const { component, inputs, outputs } = componentOptions;
        const componentConfig = { inputs, outputs };
        document.getElementById('body-modal').style.display = 'block';
        this.modalOptSub.next(modalOptions);
        this.domManipulate.appendComponentTo(this.modalElementId, component, componentConfig);
    }


    destroy() {
        this.domManipulate.removeComponent();
        document.getElementById('body-modal').style.display = 'none';
    }

    modalOptions(): Observable<any> {
        return this.modalOptSub.asObservable();
    }

}