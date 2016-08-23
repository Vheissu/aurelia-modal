declare module "index" {
    export function configure(config: any): void;
}
declare module "modal" {
    export class Modal {
        private element;
        private modal;
        showing: boolean;
        fullscreen: boolean;
        close: typeof closeModal;
        showCloseButton: boolean;
        allowKeyClose: boolean;
        allowClickClose: boolean;
        viewModel: any;
        viewContent: any;
        constructor(element: Element);
        attached(): void;
        showingChanged(newVal: any): void;
    }
    export function closeModal(): boolean;
}
