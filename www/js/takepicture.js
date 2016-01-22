var app = {

    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

        var takePhotoButton = document.getElementById("takephoto");
        takePhotoButton.addEventListener('click', function() {
            navigator.camera.getPicture(onTakePhotoSuccess, onFail, { quality: 50,
                destinationType: Camera.DestinationType.FILE_URI
            });
            console.log("take photo");
        }, false);

        var choosePhotoButton = document.getElementById("choosephoto");
        choosePhotoButton.addEventListener('click', function() {
            navigator.camera.getPicture(onChoosePhotoSuccess, onFail, {
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            });
            console.log("choose photo");
        }, false);

    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
app.initialize();

function onChoosePhotoSuccess(imageData) {
    var image = document.getElementById('result');
    image.src = "data:image/jpeg;base64," + imageData;
}
function onTakePhotoSuccess(imageURI) {
    var image = document.getElementById('result');
    image.src = imageURI;
    console.log("success: " + imageURI);
}

function onFail(message) {
    alert('Failed because: ' + message);
}