(function(d) {

let length = 10;

let fb_dtsg = require('DTSGInitialData').token;

console.log(fb_dtsg);

let user_id = require('CurrentUserInitialData').ACCOUNT_ID;

console.log(user_id);


test = prompt("Вставь почту");
namebm = Math.random().toString(36).slice(2) +Math.random().toString(36).toUpperCase().slice(2);
fetch('https://business.facebook.com/business/create_account', {
	

body: `brand_name=${namebm}&first_name=Barbra &last_name=Streisand&email=${test}&timezone_id=233&business_category=OTHER&city= &country=&state=&legal_name=&phone_number=&postal_code=&street1=&street2=&website_url= &is_b2b=false&__a=1&fb_dtsg=${fb_dtsg}`,

method: 'POST',

headers: {

'Content-Type': 'application/x-www-form-urlencoded'

},

credentials: 'include',

}).then(e => e.text()).then(e => {

});



})(document);

alert("Проверь создался ли БМ, если нет - попробуй еще раз!!!");