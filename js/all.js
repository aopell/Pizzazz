chrome.storage.sync.get(null, function (storage) {
    console.log("test");
    document.documentElement.setAttribute("pizzazz", "enabled");

    for (let key of Object.keys(storage)) {
        if (key.startsWith("color-")) {
            setCSSVariable(key, storage[key]);
        }
    }
});

/**
 * Sets the value of a CSS variable on the document
 * @param {string} name Variable name 
 * @param {string} val New variable value
 */
function setCSSVariable(name, val) {
    document.documentElement.style.setProperty(`--${name}`, val);
}