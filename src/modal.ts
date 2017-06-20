import { PLATFORM } from 'aurelia-pal';
import { bindable, customElement, useView } from 'aurelia-templating';

import { ModalService } from './modal-service';

@customElement('modal')
@useView(PLATFORM.moduleName('modal.html'))
export class Modal {
    private modalService: ModalService;

    @bindable() public showCloseButton: boolean | undefined;
    @bindable() public closeAction = () => {};

    static inject = [ModalService];

    constructor(modalService: ModalService) {
        this.modalService = modalService;
    }

    public bind(): void {
        if (typeof this.showCloseButton !== 'boolean') {
            this.showCloseButton = !this.modalService.hideCloseButton;
        }
    }
}
