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

function setMainHeight(){
	var header = document.getElementById('headerMain');
	var footer = document.getElementById('footerMain');
	var main = document.getElementById('mainMain');
	var availHeight = window.screen.availHeight;
	var headerHeight = header.offsetHeight;
	var footerHeight = footer.offsetHeight;
	var mainHeight = main.offsetHeight;
	var usedHeight = headerHeight + footerHeight + mainHeight;
	var freeHeight = (availHeight - (headerHeight + footerHeight)) + 'px';
	if (usedHeight < availHeight){
		main.style.height = freeHeight;
	}
}

window.addEventListener("load", setMainHeight);