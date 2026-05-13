// Открываем календарь в новой вкладке при клике на иконку
chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: chrome.runtime.getURL('index.html'),
    active: true
  });
});

console.log('✅ Background script loaded');