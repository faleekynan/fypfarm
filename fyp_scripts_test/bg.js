chrome.contextMenus.create({
    id: "add_friends",
    title: "Добавить друзей",
    contexts: ["all"]
});
chrome.contextMenus.create({
    id: "25",
	parentId: "add_friends",
    title: "25 шт",
    contexts: ["all"]
});
chrome.contextMenus.create({
    id: "50",
	parentId: "add_friends",
    title: "50 шт",
    contexts: ["all"]
});
chrome.contextMenus.create({
    id: "100",
	parentId: "add_friends",
    title: "100 шт",
    contexts: ["all"]
});



chrome.contextMenus.create({
    id: "autofill",
    title: "Автозаполнение",
    contexts: ["all"]
});


chrome.contextMenus.create({
    id: "search",
	parentId: "autofill",
    title: "Поисковый запрос",
    contexts: ["all"]
});
chrome.contextMenus.create({
    id: "fp_bio",
	parentId: "autofill",
    title: "Био ФП",
    contexts: ["all"]
});
chrome.contextMenus.create({
    id: "ananasko",
	parentId: "autofill",
    title: "Ананаско/Жук",
    contexts: ["all"]
});
chrome.contextMenus.create({
    id: "create_fp",
	parentId: "autofill",
    title: "Создание фп",
    contexts: ["all"]
});
chrome.contextMenus.create({
    id: "leeds",
	parentId: "autofill",
    title: "Лиды",
    contexts: ["all"]
});
chrome.contextMenus.create({
    id: "create_bm",
	parentId: "autofill",
    title: "Регистрация БМ",
    contexts: ["all"]
});




chrome.contextMenus.create({
    id: "mail",
    title: "Привязка почты",
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
    id: "quote",
    title: "Скопировать цитату",
    contexts: ["all"]
});

