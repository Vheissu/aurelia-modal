# aurelia-modal
A modal plugin for Aurelia with no dependencies, just vanilla Javascript. Simplistic API, keyboard and mouse events. Supports rendering using viewmodels or HTML.

## Install and Setup
1. Install: jspm install aurelia-modal=github:vheissu/aurelia-modal
2. Use during the bootstrapping phase:

Use the plugin in your app's main.js:

```javascript
export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-modal');

    aurelia.start().then(a => a.setRoot());
}
```

## Using the plugin
Inside of your HTML you can use the element like so:

``<modal></modal>``

## Credit
Parts of this plugin are based off the [Aurelia bs-modal plugin](https://github.com/PWKad/aurelia-bs-modal) by [PWKad](https://github.com/PWKad). Instead of being based on Bootstrap, this version borrows some ideas presented in that plugin and extends them to a more native solution.

Inspiration was also taken from the [Aurelia Dialog plugin](https://github.com/aurelia/dialog), the build tasks for moving CSS were taken directly from this repository.
