System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var inject, customElement, bindable, bindingMode, Modal;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    function closeModal() {
        return false;
    }
    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customElement = _aureliaFramework.customElement;
            bindable = _aureliaFramework.bindable;
            bindingMode = _aureliaFramework.bindingMode;
        }],
        execute: function () {
            Modal = (function () {
                var _instanceInitializers = {};

                _createDecoratedClass(Modal, [{
                    key: 'fullscreen',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return false;
                    },
                    enumerable: true
                }, {
                    key: 'close',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return closeModal;
                    },
                    enumerable: true
                }, {
                    key: 'showCloseButton',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return true;
                    },
                    enumerable: true
                }, {
                    key: 'allowKeyClose',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return true;
                    },
                    enumerable: true
                }, {
                    key: 'allowClickClose',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return true;
                    },
                    enumerable: true
                }, {
                    key: 'viewModel',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'viewContent',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function Modal(element) {
                    _classCallCheck(this, _Modal);

                    _defineDecoratedPropertyDescriptor(this, 'fullscreen', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'close', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'showCloseButton', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'allowKeyClose', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'allowClickClose', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'viewModel', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'viewContent', _instanceInitializers);

                    this.element = element;
                }

                Modal.prototype.attached = function attached() {
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

                Modal.prototype.showingChanged = function showingChanged(newVal) {
                    if (this.modal) {
                        if (newVal) {
                            this.modal.classList.remove('modal--hidden');
                            this.modal.classList.add('modal--showing');
                        } else {
                            this.modal.classList.remove('modal--showing');
                            this.modal.classList.add('modal--hidden');
                        }
                    }
                };

                var _Modal = Modal;
                Modal = bindable({
                    name: 'showing',
                    attribute: 'showing',
                    changeHandler: 'showingChanged',
                    defaultBindingMode: bindingMode.twoWay,
                    defaultValue: false
                })(Modal) || Modal;
                Modal = inject(Element)(Modal) || Modal;
                Modal = customElement('modal')(Modal) || Modal;
                return Modal;
            })();

            _export('Modal', Modal);
        }
    };
});