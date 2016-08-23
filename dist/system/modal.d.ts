export declare class Modal {
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
export declare function closeModal(): boolean;
