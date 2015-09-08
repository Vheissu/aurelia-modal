define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    exports.__esModule = true;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    var Modal = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(Modal, [{
            key: 'fullscreen',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return false;
            },
            enumerable: true
        }, {
            key: 'close',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return closeModal;
            },
            enumerable: true
        }, {
            key: 'showCloseButton',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return true;
            },
            enumerable: true
        }, {
            key: 'allowKeyClose',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return true;
            },
            enumerable: true
        }, {
            key: 'allowClickClose',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return true;
            },
            enumerable: true
        }, {
            key: 'viewModel',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'viewContent',
            decorators: [_aureliaFramework.bindable],
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
        Modal = _aureliaFramework.bindable({
            name: 'showing',
            attribute: 'showing',
            changeHandler: 'showingChanged',
            defaultBindingMode: _aureliaFramework.bindingMode.twoWay,
            defaultValue: false
        })(Modal) || Modal;
        Modal = _aureliaFramework.inject(Element)(Modal) || Modal;
        Modal = _aureliaFramework.customElement('modal')(Modal) || Modal;
        return Modal;
    })();

    exports.Modal = Modal;

    function closeModal() {
        return false;
    }
});