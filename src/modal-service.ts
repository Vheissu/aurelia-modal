import {singleton} from 'aurelia-dependency-injection';

@singleton()
export class ModalService {
    public hideCloseButton: boolean = false;
    public closePromise: Promise<any> | undefined;

    public close(successful: boolean) {
        if (this.closePromise) {
            return this.closePromise;
        }

        return this.closePromise = new Promise((resolve, reject) => {
            if (successful) {
                return resolve({ wasSuccessful: true });
            } else {
                return reject({ wasSuccessful: false });
            }
        });
    }
}
