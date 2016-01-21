cordova.define("cordova-plugin-authcheck.authcheck", function(require, exports, module) { var argscheck = require('cordova/argscheck'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');

channel.createSticky('onCordovaInfoReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('onCordovaInfoReady');

/**
 * This represents the mobile device, and provides properties for inspecting the model, version, UUID of the
 * phone, etc.
 * @constructor
 */
function AuthCheck() {

}
AuthCheck.prototype.excute = function (email, password) {
    this.available = false;
    this.isSuccess = false;
    this.error = null;
    me = this;
    exec(function(data) {
                //ignoring info.cordova returning from native, we should use value from cordova.version defined in cordova.js
                me.available = true;
                me.isSuccess = data.isSuccess;
                me.error = data.error;
                channel.onCordovaInfoReady.fire();
            },function(e) {
                me.available = false;
                utils.alert("[ERROR] Error initializing Cordova: " + e);
            }, "AuthCheck", "excuteAuthCheck", [email, password]);
    return this.isSuccess;
};
module.exports = new AuthCheck();
});
