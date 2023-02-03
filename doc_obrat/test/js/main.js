
var myExpiry = new Array(
'<textarea rows="1" readonly class="expiry">04 01 2025</textarea>',
'<textarea rows="1" readonly class="expiry">14 10 2030</textarea>',
'<textarea rows="1" readonly class="expiry">23 12 2023</textarea>',
'<textarea rows="1" readonly class="expiry">24 11 2030</textarea>',
'<textarea rows="1" readonly class="expiry">02 11 2028</textarea>',
'<textarea rows="1" readonly class="expiry">19 03 2029</textarea>',
'<textarea rows="1" readonly class="expiry">06 10 2028</textarea>',
'<textarea rows="1" readonly class="expiry">05 06 2026</textarea>',
'<textarea rows="1" readonly class="expiry">23 06 2023</textarea>',
'<textarea rows="1" readonly class="expiry">03 04 2024</textarea>',
'<textarea rows="1" readonly class="expiry">24 08 2026</textarea>',
'<textarea rows="1" readonly class="expiry">05 01 2027</textarea>',
'<textarea rows="1" readonly class="expiry">06 05 2030</textarea>',
'<textarea rows="1" readonly class="expiry">27 02 2025</textarea>',
'<textarea rows="1" readonly class="expiry">29 11 2028</textarea>',
'<textarea rows="1" readonly class="expiry">27 09 2023</textarea>',
'<textarea rows="1" readonly class="expiry">18 08 2028</textarea>',
'<textarea rows="1" readonly class="expiry">15 12 2025</textarea>',
'<textarea rows="1" readonly class="expiry">08 12 2027</textarea>',
'<textarea rows="1" readonly class="expiry">09 12 2023</textarea>',
'<textarea rows="1" readonly class="expiry">10 11 2028</textarea>',
'<textarea rows="1" readonly class="expiry">20 02 2027</textarea>',
'<textarea rows="1" readonly class="expiry">03 09 2030</textarea>',
'<textarea rows="1" readonly class="expiry">16 07 2023</textarea>',
'<textarea rows="1" readonly class="expiry">14 09 2029</textarea>',
'<textarea rows="1" readonly class="expiry">26 02 2030</textarea>',
'<textarea rows="1" readonly class="expiry">28 08 2023</textarea>',
'<textarea rows="1" readonly class="expiry">05 02 2027</textarea>',
'<textarea rows="1" readonly class="expiry">06 04 2027</textarea>',
'<textarea rows="1" readonly class="expiry">02 04 2030</textarea>',
'<textarea rows="1" readonly class="expiry">22 01 2029</textarea>',
'<textarea rows="1" readonly class="expiry">26 10 2023</textarea>',
'<textarea rows="1" readonly class="expiry">30 12 2026</textarea>',
'<textarea rows="1" readonly class="expiry">21 08 2023</textarea>',
'<textarea rows="1" readonly class="expiry">22 10 2029</textarea>'
                      );
randnm1=Math.round(Math.random()*(myExpiry.length-1));
document.getElementById("expiry").innerHTML = myExpiry[randnm1];

var myIssue = new Array(
'11 01 2021',
'20 12 2021',
'23 09 2021',
'29 03 2020',
'05 11 2019',
'04 05 2019',
'01 11 2022',
'25 01 2019',
'19 02 2022',
'23 11 2022',
'19 12 2022',
'19 09 2018',
'24 09 2021',
'13 05 2020',
'19 06 2019'
                                           );
randnm3=Math.round(Math.random()*(myIssue.length-1));
document.getElementById('issue').innerHTML = myIssue[randnm3];

var randomNumber2 = Math.floor((Math.random() * 8888) + 1000);
document.getElementById("authority").innerHTML = randomNumber2;

var randomNumber3 = Math.floor((Math.random() * 8888888888) + 1000000000);
document.getElementById("inn").innerHTML = randomNumber3;

var myCity = new Array(
'м. дніпропетровськ дніпропетровська область</br> україна/m. dnipropetrovsk dnipropetrovska oblast</br>ukraina/ukr',
'м. київ київська область</br> україна/m. kyiv kyivska oblast</br>ukraina/ukr',
'м. черкаси черкаська область</br> україна/m. cherkasy chrkaska oblast</br>ukraina/ukr',
'м. чернігів чергінівська область</br> україна/m.chernigiv chernigivska  oblast</br>ukraina/ukr',
'м. харків харківська область</br> україна/m. khakiv kharkivska oblast</br>ukraina/ukr',
'м. херсон херсонська область</br> україна/m. kherson khersonska oblast</br>ukraina/ukr',
'м. житомир житомирська область</br> україна/m. zhytomyr zhytomyrska oblast</br>ukraina/ukr'
                                           );
randnm4=Math.round(Math.random()*(myCity.length-1));

document.getElementById('city').innerHTML = myCity[randnm4];

oo = "00";
id_ukr = "IDUKR";
four = "4";


var randomNumber = Math.floor((Math.random() * 8888888) + 1000000);
document.getElementById("doc_number").innerHTML = oo + randomNumber;
document.getElementById("id_ukr_doc_number").innerHTML = id_ukr + oo + randomNumber + four;


var randomNumber1 = Math.floor((Math.random() * 88888) + 10000);
document.getElementById("rand_num").innerHTML = randomNumber1+ "<<<";


 
  var bir_date = document.getElementById('bir_date');
  var en_paste_surname = document.getElementById('en_paste_surname');
    var en_paste_name = document.getElementById('en_paste_name');
      var middle = document.getElementById('middle');
	  
var id_ukr_doc_number1 = document.getElementById('id_ukr_doc_number1');
var reverse_bir_date = document.getElementById('reverse_bir_date');
var third_line = document.getElementById('third_line');


var result3 = document.getElementById('year');
var middle_name = document.getElementById('middle_name');
function updateResult() {

	third_line.textContent = en_paste_surname.value+"<<" + en_paste_name.value+"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<";
    result3.textContent = bir_date.value ;
    result3.textContent = result3.textContent.replace('.', ' ');
	result3.textContent = result3.textContent.replace('.', ' ');
	result3.textContent = result3.textContent.replace(',', ' ');
	result3.textContent = result3.textContent.replace(',', ' ');
	
	middle_name.textContent = middle.value ;
	
    id_ukr_doc_number1.textContent = bir_date.value ;
	id_ukr_doc_number1.textContent = id_ukr_doc_number1.textContent.replace('.', ' ');
	id_ukr_doc_number1.textContent = id_ukr_doc_number1.textContent.replace('.', ' ');
	id_ukr_doc_number1.textContent = id_ukr_doc_number1.textContent.replace(',', ' ');
	id_ukr_doc_number1.textContent = id_ukr_doc_number1.textContent.replace(',', ' ');
	
	reverse_bir_date.textContent = randomNumber1 + "-" + " " +  bir_date.value;
	reverse_bir_date.textContent = reverse_bir_date.textContent.replace('.', ' ');
	reverse_bir_date.textContent = reverse_bir_date.textContent.replace('.', ' ');
	reverse_bir_date.textContent = reverse_bir_date.textContent.replace(',', ' ');
	reverse_bir_date.textContent = reverse_bir_date.textContent.replace(',', ' ');
	
	
	
}

bir_date.addEventListener('keyup', updateResult);
  en_paste_surname.addEventListener('keyup', updateResult);
  en_paste_name.addEventListener('keyup', updateResult);
  middle.addEventListener('keyup', updateResult);
  
  var randomNumber2 = Math.floor((Math.random() * 8888888) + 1000000);
document.getElementById("second_line").innerHTML = randomNumber2 + "M" + randomNumber + "UKR" + "<<<<<<<<<<<<8";



var path = './img/',
    imgs = [
   '1.png',
   '2.png',
   '3.png',
   '4.png',
   '5.png',
   '6.png',
   '7.png',
   '8.png'
 ],
    i = Math.floor(Math.random()*imgs.length);
$('#signe').append("<img class='items' src='"+path+imgs[i]+"'>");                  
