var x = document.getElementsByTagName("head")[0];
var y = document.createElement("script");
y.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
x.appendChild(y);
var a = document.getElementsByTagName("body")[0];
var b = document.createElement("script");
b.innerHTML = "$('p').css('border','0px solid transparent')";
a.appendChild(b);

/*$("body").css("backgroundColor", "blue");*/