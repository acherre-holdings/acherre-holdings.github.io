function _testFunction(e) {
	console.log("Clicked:", e.innerText + " " + e.tagName);
}
function menuItem(e) {
	_testFunction(e);
}
function accMenu(e) {
	_testFunction(e);
}
function populateHeaderLinks(linklist) {
	linklist = linklist | 'nullEntryProvided';
	_testFunction(linklist);
}
function selectLang(e) {
	_testFunction(e);
}