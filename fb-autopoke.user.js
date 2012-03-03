// ==UserScript==
//
// @name          AutoPoke
// @include       *m.facebook.com/pokes*
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// the guts of this userscript
function main() {
    
//    alert("hello!");
    children=$(".mfss.fcg").children('.sec')
    if(children.length>=1)
    {
	link = children[0].href
//	alert(link);
	window.location=link
    }
    else
    {
//	alert("no pokes");
	setInterval(function() {
	    window.location=window.location;
	},10000);
	
    }	
}

// load jQuery and execute the main function
addJQuery(main);