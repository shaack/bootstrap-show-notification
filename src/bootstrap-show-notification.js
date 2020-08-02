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
        for (var prop in props) {
            // noinspection JSUnfilteredForInLoop
            this.props[prop] = props[prop]
        }
        var cssClass = "alert alert-" + this.props.type + " alert-dismissible fade"
        this.id = "id-" + Math.random().toString(36).substr(2)
        this.template =
            "<div class='" + cssClass + "' role='alert'>" + this.props.body +
            "   <button type='button' class='close' data-dismiss='alert' aria-label='close'>" +
            "       <span aria-hidden='true'>&times;</span>" +
            "   </button>" +
            "</div>"
        this.$container = $("#" + this.props.containerId)
        if (!this.$container.length) {
            console.log("creating new alert container")
            this.$container = $("<div id='" + this.props.containerId + "'></div>")
            $(document.body).append(this.$container)
            var css = "#" + this.props.containerId + " {" +
                "position: fixed;" +
                "right: " + this.props.margin + ";" +
                "top: " + this.props.margin + ";" +
                "margin-left: " + this.props.margin + ";" +
                "z-index: " + this.props.zIndex + ";" +
                "}" +
                "#" + this.props.containerId + " .alert {" +
                "box-shadow: " + this.props.shadow + ";" +
                "width: " + this.props.width + ";" +
                "}" +
                "@media screen and (max-width: " + this.props.breakpoint + ") {" +
                "#" + this.props.containerId + " {max-width: 100%; width: 100%; right: 0; top: 0;}" +
                "#" + this.props.containerId + " .alert {margin-bottom: 0.25rem;width: auto;}" +
                "}"
            var head = document.head || document.getElementsByTagName('head')[0]
            var style = document.createElement('style')
            head.appendChild(style)
            style.appendChild(document.createTextNode(css))
        }
        this.showNotification()
    }

    Notification.prototype.showNotification = function () {
        var $notification =  $(this.template)
        this.$container.append($notification)
        $notification.addClass("show")
        setTimeout(function () {
            console.log("hide", $notification)
            $notification.alert("close")
        }, this.props.delay)
    }
    $.extend({
        showNotification: function (props) {
            return new Notification(props)
        }
    })
}(jQuery))