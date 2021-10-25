a = "is"
b = "was"

function displayText() {
	var strText = document.getElementById("aName").value;
	var strText1 = document.getElementById("aAction").value;
	var strText3 = document.getElementById("aLocation").value
	var result = strText + ' ' + strText1 + ' ' + strText3;
	document.getElementById('spanResult').textContent = result;
}