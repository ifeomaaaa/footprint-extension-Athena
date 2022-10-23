// pop up should take data from payload and display as a cute little graphic

window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});

// using the tutorial from Tom Forth - we're taking the data we got from payload to feed into our popup
chrome.runtime.onMessage.addListener(function (message) {
	document.getElementById('cart-estimate').innerHTML = yourEmission;
	document.getElementById('total-this-month').innerHTML = thisMonth;
});