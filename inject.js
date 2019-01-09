(function() {
	if (!document.pictureInPictureElement) {
		document.querySelector('video').requestPictureInPicture()
	} else {
		document.exitPictureInPicture()
	}
})();