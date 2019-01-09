// this is the background code...

chrome.tabs.onUpdated.addListener(function (tabId , info) {
	if (info.status === 'complete') {
	  // your code ...
	  chrome.tabs.getSelected(null, function(tab){
		chrome.tabs.executeScript(tab.id, {file: 'auto.js'}, function(response) {
		});
	});
	}
  });


chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});