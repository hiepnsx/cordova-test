cordova.define("cordova-plugin-authcheck.authcheck", function(require, exports, module) { module.exports = {
    excute: function (onSuccess, onFail, loginData) {
        cordova.exec(onSuccess, onFail, "AuthCheck", "excuteAuthCheck", loginData);
    }
};
});
