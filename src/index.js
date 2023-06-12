
// Get important stylesheet
let stylesheet = document.styleSheets[7]
let imageSrc = browser.runtime.getURL("replacemenet/leaf.png")

/**
 * Changes an existing stylesheet rule.
 * @param {CSSStyleSheet} stylesheet The stylesheet object.
 * @param {string} selector The style selector.
 * @param {string} property The style property.
 * @param {string} value The new style value.
 */
function changeStylesheetRule(stylesheet, selector, property, value) {
	for (const i in stylesheet.cssRules) {
		const rule = stylesheet.cssRules.item(i)
		if (rule.selectorText === selector) {
			rule.style[property] = value
			return
		}
	}
  
	stylesheet.insertRule(`${selector}" { "${property}": ${value}"; }`, 0);
}

// Update rules
//changeStylesheetRule(stylesheet, ".editor-menu-icon.fa", "background", `url(${imageSrc}) 50% center / contain no-repeat`)
const leaf_white_src = "https://cdn.discordapp.com/attachments/693572577532313770/1117903633711906977/leaf_white.png"
changeStylesheetRule(stylesheet, ".editor-menu-icon.fa", "background", `url(${leaf_white_src}) 50% center / contain no-repeat`)
