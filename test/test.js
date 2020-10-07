var assert = chai.assert

afterEach(function () {
})

describe('bootstrap-show-modal', function () {
    it('Should display notifications', function () {
        $.showNotification({body: "Hello Notification!"})
        $.showNotification({
            body: "<h3>For your Info</h3>This notification has a headline and more text than the previous one.", type: "info"
        })
        $.showNotification({
            body: "Danger!", type: "danger"
        })
        $.showNotification({
            body: "This notification will stay", type: "secondary", duration: 0
        })
    })
    // TODO more testing
})
