# bootstrap-show-notification

A jQuery plugin wrapper around Bootstrap 4 Alerts, to create fixed Alerts (also called notifications) dynamically in JavaScript.

![bootstrap-show-notification Example](https://shaack.com/projekte/assets/img/bootstrap-show-notification-lg.png?v=2)

## Try it

[Demo Page](https://shaack.com/projekte/bootstrap-show-notification/)

## Usage

```html
<script src="./src/bootstrap-show-notification.js"></script>
<script>
    // simple example
    $("#button-show-simple").click(function () {
        $.showNotification({body: "Hello Notification!"})
    })
    // type info and more complex body
    $("#button-show-info").click(function () {
        $.showNotification({
            body: "<h3>For your Info</h3>This notification has a title and a body and more text than the previous one.", type: "info"
        })
    })
    // type danger
    $("#button-show-danger").click(function () {
        $.showNotification({
            body: "Danger!", type: "danger"
        })
    })
    // type secondary and sticky
    $("#button-show-sticky").click(function () {
        $.showNotification({
            body: "This notification will stay", type: "secondary", duration: 0
        })
    })
</script>
```

## Props (defaults)

```js
this.props = {
    body: "", // put here the text, shown
    type: "primary", // the appearance
    duration: 5500, // duration till auto-hide, set to `0` to disable auto-hide
    maxWidth: "520px", // the notification maxWidth
    shadow: "0 2px 6px rgba(0,0,0,0.2)", // the box-shadow
    zIndex: 100,
    margin: "1rem", // the margin (above maxWidth)
    direction: "prepend" // or "append", the stack direction
}
```

# More Bootstrap extensions from shaack.com

You may want to check out our other Bootstrap and HTML extensions

- [bootstrap-input-spinner](https://shaack.com/en/open-source-components) – Input numbers
- [bootstrap-show-modal](https://shaack.com/en/open-source-components) – Show dialogs, dynamically
- [bootstrap-show-notification](https://shaack.com/en/open-source-components) – Show notifications, dynamically
- [bootstrap-detect-breakpoint](https://shaack.com/en/open-source-components) – Read the curr. BS BP from JS
- [auto-resize-textarea](https://shaack.com/en/open-source-components) – Auto resize textareas by its content
- [external-links-blank](https://shaack.com/en/open-source-components) – Open external links auto `_blank`
