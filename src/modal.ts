import {inject} from 'aurelia-dependency-injection';
import {bindingMode} from 'aurelia-binding';
import {bindable, customElement} from 'aurelia-templating';

@customElement('modal')
@inject(Element)
export class Modal {
    private element: Element;
    private modal: Element;

    @bindable({defaultBindingMode: bindingMode.twoWay}) showing = false;

    @bindable fullscreen = false;
    @bindable close = closeModal;
    @bindable showCloseButton = true;

    @bindable allowKeyClose = true;
    @bindable allowClickClose = true;

    @bindable viewModel;
    @bindable viewContent;

    constructor(element: Element) {
        this.element = element;
    }

    attached() {
        if (this.allowClickClose) {
            document.addEventListener('click', e => {
                if (e.target && (e.target as HTMLElement).classList && (e.target as HTMLElement).classList.contains('modal') && this.showing) {
                    this.showing = false;

                    if (this.close) {
                        this.close();
                    }
                }
            });
        }

        if (this.allowKeyClose) {
            document.addEventListener('keyup', e => {
                if (e.keyCode == 27 && this.showing) {
                    this.showing = false;

                    if (this.close) {
                        this.close();
                    }
                }
            });
        }

        if (this.fullscreen) {
            this.modal.classList.add('modal--fullscreen');
        }
    }

    showingChanged(newVal) {
        if (this.modal) {
            if (newVal) {
                this.modal.classList.remove('modal--hidden');
                this.modal.classList.add('modal--showing');
            } else {
                this.modal.classList.remove('modal--showing');
                this.modal.classList.add('modal--hidden');
            }
        }
    }
}

export function closeModal() {
    return false;
}
