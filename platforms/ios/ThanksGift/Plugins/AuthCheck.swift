import Foundation

@objc(AuthCheck) class AuthCheck : CDVPlugin {
    
    func excuteAuthCheck(command: CDVInvokedUrlCommand) {
        var isSuccess = false
        var msg = ""
        var email = command.arguments[0] as! String
        var password = command.arguments[1] as! String
        
        if email == "verve@gmail.com" && password == "123456" {
            isSuccess = true
            msg = "Login successfully!"
        } else {
            isSuccess = false
            msg = "Login fail"
        }
        
        let data: [String: AnyObject] = ["isSuccess": isSuccess, "msg": msg]
        
        var pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAsDictionary: data)
        commandDelegate!.sendPluginResult(pluginResult, callbackId:command.callbackId)
    }
    
}