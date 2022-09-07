# bootstrap-show-notification

> This component is Bootstrap 4 only. For a Bootstrap 5 compatible
> component with similar functionality, see [bootstrap-show-toast](https://github.com/shaack/bootstrap-show-toast).

A jQuery plugin wrapper around Bootstrap 4 Alerts, to show them as toasts (also called notifications) dynamically from JavaScript.

![bootstrap-show-notification Example](https://shaack.com/projekte/assets/img/bootstrap-show-notification-lg.png?v=2)

=> 
- Responsive and mobile friendly
- Needs no extra CSS

## Try it

- [Demo Page](https://shaack.com/projekte/bootstrap-show-notification/)

## Installation

- [npm package](https://www.npmjs.com/package/bootstrap-show-notification)

```sh
npm install bootstrap-show-notification
```

## Usage

```html
<script src="./node_modules/bootstrap-show-notification/src/bootstrap-show-notification.js"></script>
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
    body: "", // the text, shown
    type: "primary", // the appearance
    duration: 5500, // duration till auto-hide, set to `0` to disable auto-hide
    maxWidth: "520px", // the notification maxWidth
    shadow: "0 2px 6px rgba(0,0,0,0.2)", // the box-shadow
    zIndex: 100,
    margin: "1rem", // the margin (above maxWidth)
    direction: "prepend" // or "append", the stack direction
}
```

## Documentation

- [Repository and documentation](https://github.com/shaack/bootstrap-show-notification)

## More Bootstrap extensions

Check out my [further Bootstrap extensions](https://shaack.com/en/open-source-components)
