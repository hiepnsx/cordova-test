module.exports = {
    excute: function (onSuccess, onFail, loginData) {
        cordova.exec(onSuccess, onFail, "AuthCheck", "excuteAuthCheck", loginData);
    }
};