# bootstrap-show-notification

A jQuery plugin wrapper around Bootstrap 4 Alerts, to create fixed Alerts (also called Notifications) dynamically in JavaScript.

![bootstrap-show-notification Example](https://shaack.com/projekte/assets/img/bootstrap-show-notification-lg.png)

## Try it

[Demo Page](https://shaack.com/projekte/bootstrap-show-notification/)

## Usage

```html
<script src="./src/bootstrap-show-notification.js"></script>
<script>
    $("#button-show-simple").click(function () {
        $.showNotification({body: "Hello Notification!"})
    })
    $("#button-show-info").click(function () {
        $.showNotification({
            body: "<h3>For your Info</h3>This notification has a title and a body and more text than the previous one.", type: "info"
        })
    })
    $("#button-show-danger").click(function () {
        $.showNotification({
            body: "Danger!", type: "danger"
        })
    })
</script>
```

## Props (defaults)

```js
props = {
    body: "",
    type: "primary",
    shadow: "0 2px 6px rgba(0,0,0,0.2)",
    zIndex: 100,
    margin: "1rem",
    dismissible: true,
    delay: 5000,
    containerId: "bootstrap-show-notification-container",
    breakpoint: "500px",
    width: "420px"
}
```