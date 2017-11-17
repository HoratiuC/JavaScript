
function Calculate(r,h)
{
    var r = document.getElementById("radius").value;
	var h = document.getElementById("height").value;
	document.getElementById("answer1").innerHTML = Math.PI*r*r*h;
	}
