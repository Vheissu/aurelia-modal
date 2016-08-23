var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from 'aurelia-dependency-injection';
import { bindingMode } from 'aurelia-binding';
import { bindable, customElement } from 'aurelia-templating';
export let Modal = class Modal {
    constructor(element) {
        this.showing = false;
        this.fullscreen = false;
        this.close = closeModal;
        this.showCloseButton = true;
        this.allowKeyClose = true;
        this.allowClickClose = true;
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
            }
            else {
                this.modal.classList.remove('modal--showing');
                this.modal.classList.add('modal--hidden');
            }
        }
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }), 
    __metadata('design:type', Object)
], Modal.prototype, "showing", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Object)
], Modal.prototype, "fullscreen", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Object)
], Modal.prototype, "close", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Object)
], Modal.prototype, "showCloseButton", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Object)
], Modal.prototype, "allowKeyClose", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Object)
], Modal.prototype, "allowClickClose", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Object)
], Modal.prototype, "viewModel", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Object)
], Modal.prototype, "viewContent", void 0);
Modal = __decorate([
    customElement('modal'),
    inject(Element), 
    __metadata('design:paramtypes', [Element])
], Modal);
export function closeModal() {
    return false;
}
//# sourceMappingURL=modal.js.map