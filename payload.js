// get array of product elements 

titleTag = document.getElementsByClassName("a-link-normal sc-product-link");

// traverse through the elements to get the titles
var allSpans = document.getElementsByClassName("a-link-normal sc-product-link");
var arrayNumbers = [];

for (var i = 0; i < allSpans.length; i++) {
   var products = arrayNumbers.push(allSpans[i].innerHTML);
}

// here we would want to send this back to our server to find the appropriate cabron offset

// you'd want it to return to us a var with our own carbon offset, as well as the user offset for that month

var yourEmission = "26kg"
var thisMonth = "36.7kg"

// send the page title as a chrome message
chrome.runtime.sendMessage(yourEmission);
chrome.runtime.sendMessage(thisMonth);

// we only want to store this data if the user has purchased this - see Honey chrome extension for an example of data confirmed once a purchase has been made