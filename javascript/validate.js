
	document.getElementById('submit').onclick=function() {

		return false;
		/*if(validateForm() == false) {
			return false;
		}*/
	}


	function validateForm() {

		var nameFirst = document.getElementById('nameFirst');
		var theValue = nameFirst.value;

		if(theValue != "Terry") {
			
			console.log("Will this fire?");

			var messageHolder = document.getElementById('target');
			messageHolder.style.color = "red";
			messageHolder.innerHTML = "<h3>Vous n'avez pas entré le nom attendu.</h3>";
			nameFirst.select();
			//nameFirst.focus();
			

			return false;		
		}
		
}

