
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
  
	console.error(`Style with selector ${selector} not found!`);
	stylesheet.insertRule(`${selector} { ${property}: ${value}; }`, 0);
}

// Update rules
const leaf_white_src = "https://cdn.discordapp.com/attachments/693572577532313770/1117903633711906977/leaf_white.png"
const leaf_grey_src = "https://cdn.discordapp.com/attachments/693572577532313770/1117912171154776074/leaf_grey.png"
const leaf_green_src = "https://cdn.discordapp.com/attachments/693572577532313770/1117870535070724268/leaf.png"

changeStylesheetRule(stylesheet, ".editor-menu-icon.fa", "background", `url(${leaf_white_src}) 50% center / contain no-repeat`)
changeStylesheetRule(stylesheet, ".multi-selection-ongoing::before, .no-file-selection::before, .no-history-available::before, .pdf-empty::before", "background", `url(${leaf_grey_src}) 50%/200px no-repeat`)
changeStylesheetRule(stylesheet, ".navbar-default .navbar-brand", "background-image", `url(${leaf_white_src})`)
changeStylesheetRule(stylesheet, ".fat-footer .footer-brand", "background-image", `url(${leaf_white_src})`)
changeStylesheetRule(stylesheet, ".loading-screen-brand", "background", `url(${leaf_grey_src}) no-repeat bottom/100%`)
changeStylesheetRule(stylesheet, ".loading-screen-brand::after", "background", `url(${leaf_green_src}) no-repeat bottom/100%`)
