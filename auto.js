document.querySelector('.ytp-miniplayer-button').addEventListener('click',function () {
	if (!document.pictureInPictureElement) {
		document.querySelector('video').requestPictureInPicture()
	}
});

document.querySelector('.ytp-miniplayer-scrim').addEventListener('click',function () {
		// alert('test')
		document.exitPictureInPicture()
});