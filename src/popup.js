console.log("hey hey welcome");
chrome.contextMenus.create({
  "title": "Measure this",
  "contexts": ["image"],
  "onclick" : onContextMenuClick
});

function onContextMenuClick(e) {
    var b = chrome.extension.getBackgroundPage();
    var image = e.srcUrl;
    b.console.log(image);
    chrome.tabs.create({url: chrome.extension.getURL('measure.html?image='+image)}, function(tab) {
        chrome.tabs.executeScript(tab.id, {code:"console.log(image)"});
        b.console.log(tab);
        //tab.console.log(image);
        b.console.log(tab.getElementById("image"));
    });
}