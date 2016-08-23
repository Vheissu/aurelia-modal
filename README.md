# aurelia-modal
A modal plugin for Aurelia with no dependencies, just vanilla Javascript. Simplistic API, keyboard and mouse events. Supports rendering using viewmodels or HTML.

## Install and Setup
1. Install: `npm install aurelia-modal --save` or `jspm install aurelia-modal`
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

## In Use
To display or hide the modal, you need to use the ``showing`` attribute and pass through a boolean value.

**Allow escape key to close modal:**
``<modal allowKeyClose="true"></modal>``

**Allow clicks outside modal content area to close modal:**
``<modal allowClickClose="true"></modal>``

**Make modal go fullscreen of the viewport:**
``<modal fullscreen="true"></modal>``

**Show or hide the close button:**
``<modal showCloseButton="true"></modal>``

**Close button clicked callback:**
``<modal close.call="myViewModelCloseFunction()"></modal>``

**Show or hide using boolean value (true to show or false to hide):**
``<modal showing.bind=myViewModelBoolean"></modal>``

**Render a ViewModel inside of the modal:**
``<modal view-model="myViewModel"></modal>``

**Render a ViewModel inside of the modal with an object of content:**
``<modal view-model="myViewModel" view-content.bind="myContent"></modal>``

**Display a Modal with supplied content:**
``<modal><h1>Some Heading</h1><p>My custom content in here</p></modal>``
