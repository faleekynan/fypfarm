(function(d) {

let length = 10;

let fb_dtsg = require('DTSGInitialData').token;

console.log(fb_dtsg);

let user_id = require('CurrentUserInitialData').ACCOUNT_ID;

console.log(user_id);

for (var i = 0; i < length; i++) {

fetch('https://business.facebook.com/business/create_account', {
	
	mail = prompt("Почта");

body: `brand_name=My Newbm ${i + Math.random().toString(36).substring(2)}&first_name=Barbara&last_name=Streisand&email=mail&timezone_id=233&business_category=OTHER&city= &country=&state=&legal_name=&phone_number=&postal_code=&street1=&street2=&website_url= &is_b2b=false&__a=1&fb_dtsg=${fb_dtsg}`,

method: 'POST',

headers: {

'Content-Type': 'application/x-www-form-urlencoded'

},

credentials: 'include',

}).then(e => e.text()).then(e => {

});

}

})(document);

alert("Проверь создался ли БМ, если нет - попробуй еще раз!!!");