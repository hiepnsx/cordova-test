var app = {

    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        var checkButton = document.getElementById("check");
        checkButton.addEventListener('click', function() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            authcheck.excute(onAuthSuccess, onAuthFail, [email, password]);
        }, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
function onAuthSuccess(result) {
        console.log("success");
        document.getElementById("result").innerHTML = result.msg;
        //TODO: redirect to take picture
};
function onAuthFail(result) {
        console.log("fail");
        document.getElementById("result").innerHTML = result.msg;
};
app.initialize();