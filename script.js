
function display() {
	DispWin = window.open('', 'NewWin', 'toolbar=no,status=no,width=300,height=200')
	message = "<ul><li><b>NAME: </b>" + document.information.yourname.value;
	message += "<li><b>ADDRESS: </b>" + document.information.subject.value;
	message += "<li><b>PHONE: </b>" + document.information.location.value + "</ul>";
	message += document.information.yourname.value + " is " + document.information.subject.value + " at " + document.information.location.value
	DispWin.document.write(message);
}