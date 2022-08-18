import {describe, it, assert} from "../node_modules/teevi/src/teevi.js"

describe('bootstrap-show-modal', function () {
    it('Should display notifications', function () {
        bootstrap.showNotification({body: "Hello Notification!"})
        bootstrap.showNotification({
            body: "<h3>For your Info</h3>This notification has a headline and more text than the previous one.", type: "info"
        })
        bootstrap.showNotification({
            body: "Danger!", type: "danger"
        })
        bootstrap.showNotification({
            body: "This notification will stay", type: "secondary", duration: 0
        })
    })
})
