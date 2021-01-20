
function fillSettingsValues() {
    chrome.storage.sync.get(null, function (storage) {
        let settingElements = document.querySelectorAll("[data-setting]");
        for (let elem of settingElements) {
            elem.value = storage[elem.dataset.setting] || elem.value;
        }
    });
}

function saveSettingValues() {
    let values = {};
    let settingElements = document.querySelectorAll("[data-setting]");
    for (let elem of settingElements) {
        values[elem.dataset.setting] = elem.value;
    }
    chrome.storage.sync.set(values);
}

window.addEventListener("load", function() {
    fillSettingsValues();
    document.getElementById("save-settings").addEventListener("click", saveSettingValues);
});