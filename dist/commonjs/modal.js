"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_dependency_injection_1 = require('aurelia-dependency-injection');
var aurelia_binding_1 = require('aurelia-binding');
var aurelia_templating_1 = require('aurelia-templating');
var Modal = (function () {
    function Modal(element) {
        this.showing = false;
        this.fullscreen = false;
        this.close = closeModal;
        this.showCloseButton = true;
        this.allowKeyClose = true;
        this.allowClickClose = true;
        this.element = element;
    }
    Modal.prototype.attached = function () {
        var _this = this;
        if (this.allowClickClose) {
            document.addEventListener('click', function (e) {
                if (e.target && e.target.classList && e.target.classList.contains('modal') && _this.showing) {
                    _this.showing = false;
                    if (_this.close) {
                        _this.close();
                    }
                }
            });
        }
        if (this.allowKeyClose) {
            document.addEventListener('keyup', function (e) {
                if (e.keyCode == 27 && _this.showing) {
                    _this.showing = false;
                    if (_this.close) {
                        _this.close();
                    }
                }
            });
        }
        if (this.fullscreen) {
            this.modal.classList.add('modal--fullscreen');
        }
    };
    Modal.prototype.showingChanged = function (newVal) {
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
    };
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay }), 
        __metadata('design:type', Object)
    ], Modal.prototype, "showing", void 0);
    __decorate([
        aurelia_templating_1.bindable, 
        __metadata('design:type', Object)
    ], Modal.prototype, "fullscreen", void 0);
    __decorate([
        aurelia_templating_1.bindable, 
        __metadata('design:type', Object)
    ], Modal.prototype, "close", void 0);
    __decorate([
        aurelia_templating_1.bindable, 
        __metadata('design:type', Object)
    ], Modal.prototype, "showCloseButton", void 0);
    __decorate([
        aurelia_templating_1.bindable, 
        __metadata('design:type', Object)
    ], Modal.prototype, "allowKeyClose", void 0);
    __decorate([
        aurelia_templating_1.bindable, 
        __metadata('design:type', Object)
    ], Modal.prototype, "allowClickClose", void 0);
    __decorate([
        aurelia_templating_1.bindable, 
        __metadata('design:type', Object)
    ], Modal.prototype, "viewModel", void 0);
    __decorate([
        aurelia_templating_1.bindable, 
        __metadata('design:type', Object)
    ], Modal.prototype, "viewContent", void 0);
    Modal = __decorate([
        aurelia_templating_1.customElement('modal'),
        aurelia_dependency_injection_1.inject(Element), 
        __metadata('design:paramtypes', [Element])
    ], Modal);
    return Modal;
}());
exports.Modal = Modal;
function closeModal() {
    return false;
}
exports.closeModal = closeModal;
//# sourceMappingURL=modal.js.map