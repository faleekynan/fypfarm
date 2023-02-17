chrome.contextMenus.create({
    id: "main",
    title: "Заполнить поля",
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (tab) {
        if (info.menuItemId === "main"){
           chrome.tabs.executeScript(tab.id, {file: "main.js"});
        }
    }
});