
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
randnm=Math.round(Math.random()*(myExpiry.length-1));
document.getElementById("expiry").innerHTML = myExpiry[randnm];



var myMiddle = new Array(
'<textarea class="middle_name" rows="1" readonly >Олександрівна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Олегівна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Максимівна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Дмитрівна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Павлівна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Владиславівна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Володимирівна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Сергіївна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Євгенівна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Юріївна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Олексіївна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Ілівна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Іванівна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Василівна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Віталіївна</textarea>',
'<textarea class="middle_name" rows="1" readonly >Петрівна</textarea>'
                                           );
randnm=Math.round(Math.random()*(myMiddle.length-1));

document.getElementById("middle_name").innerHTML = myMiddle[randnm];

oo = "00";
var randomNumber = Math.floor((Math.random() * 8888888) + 1000000);
document.getElementById("doc_number").innerHTML = oo + randomNumber;