
var myTxt2 = new Array(
'<a href="./old_index.html">Старый генератор</a>',
'<a href="./old_index.html">Старый генератор</a>',
                                           );
randnm=Math.round(Math.random()*(myTxt2.length-1));

document.getElementById("btn").innerHTML = myTxt2[randnm];
