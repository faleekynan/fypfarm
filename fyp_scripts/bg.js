chrome.contextMenus.create({
    id: "add_friends",
    title: "Добавить друзей",
    contexts: ["all"]
});

chrome.contextMenus.create({
    id: "quotes",
    title: "Случайная цитата",
    contexts: ["all"]
});

chrome.contextMenus.create({
    id: "mail",
    title: "Привязка почты",
    contexts: ["all"]
});
chrome.contextMenus.create({
    id: "coockie",
    title: "Конвертер куки",
    contexts: ["all"]
});
chrome.contextMenus.create({
    id: "search",
    title: "Поисковый запрос",
    contexts: ["all"]
});
chrome.contextMenus.create({
    id: "create_bm",
    title: "Создание БМ",
    contexts: ["all"]
});
chrome.contextMenus.create({
    id: "fp_names",
    title: "Название для ФП",
    contexts: ["all"]
});
chrome.contextMenus.create({
    id: "pixel",
    title: "Открыть пиксель",
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (tab) {
        if (info.menuItemId === "add_friends"){
           chrome.tabs.executeScript(tab.id, {file: "add_friends.js"});
        }
        if (info.menuItemId === "quotes"){
           chrome.tabs.executeScript(tab.id, {file: "quotes.js"});
        }
		if (info.menuItemId === "mail"){
           chrome.tabs.executeScript(tab.id, {file: "mail.js"});
        }
		if (info.menuItemId === "coockie"){
           chrome.tabs.executeScript(tab.id, {file: "coockie.js"});
        }
		if (info.menuItemId === "search"){
           chrome.tabs.executeScript(tab.id, {file: "search.js"});
        }
		if (info.menuItemId === "create_bm"){
           chrome.tabs.executeScript(tab.id, {file: "create_bm.js"});
        }
		if (info.menuItemId === "fp_names"){
           chrome.tabs.executeScript(tab.id, {file: "fp_names.js"});
        }
		if (info.menuItemId === "pixel"){
           chrome.tabs.executeScript(tab.id, {file: "pixel.js"});
        }
    }
});