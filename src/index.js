
// Get important stylesheet
let stylesheet = document.styleSheets[7]
let imageSrc = browser.runtime.getURL("replacemenet/leaf.png")

/**
 * Changes an existing stylesheet rule.
 * @param {string} stylesheet The stylesheet object.
 * @param {string} selector The style selector.
 * @param {string} property The style property.
 * @param {string} value The new style value.
 */
function changeStylesheetRule(stylesheet, selector, property, value) {
	selector = selector.toLowerCase();
	property = property.toLowerCase();
	value = value.toLowerCase();

	for(var i = 0; i < stylesheet.cssRules.length; i++) {
		var rule = stylesheet.cssRules[i];
		if(rule.selectorText === selector) {
			rule.style[property] = value;
			return;
		}
	}
  
	stylesheet.insertRule(selector + " { " + property + ": " + value + "; }", 0);
}

// Update rules
//changeStylesheetRule(stylesheet, ".editor-menu-icon.fa", "background", `url(${imageSrc}) 50% center / contain no-repeat`)
changeStylesheetRule(stylesheet, ".editor-menu-icon.fa", "background", `url(https://media.discordapp.net/attachments/693572577532313770/1117870535070724268/leaf.png?width=671&height=671) 50% center / contain no-repeat`)
