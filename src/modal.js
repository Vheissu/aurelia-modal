import {inject, customElement, bindable, bindingMode} from 'aurelia-framework';

@customElement('modal')
@inject(Element)
@bindable({
    name: 'showing',
    attribute: 'showing',
    changeHandler: 'showingChanged',
    defaultBindingMode: bindingMode.twoWay,
    defaultValue: false
})
export class Modal {
    @bindable fullscreen = false;
    @bindable close = closeModal;
    @bindable showCloseButton = true;

    @bindable allowKeyClose = true;
    @bindable allowClickClose = true;

    @bindable viewModel;
    @bindable viewContent;

    constructor(element) {
        this.element = element;
    }

    attached() {
        if (this.allowClickClose) {
            document.addEventListener('click', e => {
                if (e.target && e.target.classList && e.target.classList.contains('modal') && this.showing) {
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

function closeModal() {
    return false;
}
