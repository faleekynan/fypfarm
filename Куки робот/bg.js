chrome.contextMenus.create({
    id: "cookie",
    title: "Куки",
    contexts: ["all"]
});


chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (tab) {
        if (info.menuItemId === "cookie"){
           chrome.tabs.executeScript(tab.id, {file: "background.js"});
        }
    }
});