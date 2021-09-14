
var bg = chrome.extension.getBackgroundPage();

let url = bg.getUrl(); 

$("#id-url").text(url);
