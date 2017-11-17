function verifySentence(v) {

    var v = document.getElementById("sentence").value.toLowerCase();

    var regex = /([a-z])(?!.*\1)/g;
	var res;

    if (v.match(regex).length == 26) { 
	document.getElementById("sentenceOutcome").innerHTML = "Yes, it is a pangram!"; }

    else { 
	document.getElementById("sentenceOutcome").innerHTML = "No, it is NOT a pangram";}    

    }