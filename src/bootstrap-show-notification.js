/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/bootstrap-show-notification
 * License: MIT, see file 'LICENSE'
 */
;(function ($) {
    "use strict"

    function Notification(props) {
        // see https://getbootstrap.com/docs/4.0/components/alerts/
        this.props = {
            heading: "",
            body: "",
            footer: "",
            type: "primary",
            dismissible: true
        }
        for (var prop in props) {
            // noinspection JSUnfilteredForInLoop
            this.props[prop] = props[prop]
        }
        var cssClass = "alert alert-" + this.props.type + " fade show"
        this.templateAlert =
            "<div class='alert-fixed'>" +
            "    <div class='" + cssClass + "' role='alert'>" + this.props.body +
            "        <button type='button' class='close' data-dismiss='alert' aria-label='close'>" +
            "            <span aria-hidden='true'>&times;</span>" +
            "        </button>" +
            "    </div>" +
            "</div>"
        var css = "h1 { background: red; }"
        var head = document.head || document.getElementsByTagName('head')[0]
        var style = document.createElement('style')
        head.appendChild(style)
        style.appendChild(document.createTextNode(css));
        this.showNotification()
    }

    Notification.prototype.showNotification = function() {
        $(document.body).append(this.template)
    }

    $.extend({
        showNotification: function (props) {
            return new Notification(props)
        }
    })
}(jQuery))