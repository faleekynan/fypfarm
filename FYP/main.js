$('body').prepend('<style>*{margin:0; padding:0;}.menu-wrap{background-color: white; height: 56px; line-height: 56px; position: relative; width: 100%; bottom: 0;z-index: 999999999;padding-left: 10px;overflow: hidden;}.menu-wrap ul{list-style:none;}.menu-wrap ul li input, .menu-wrap ul li a{float: left; display: block; text-align: center; color: black; text-decoration: none; padding: 0 10px; font-weight: 500; font-family: system-ui; border: none;font-size: 0.95rem;cursor:pointer;}.menu-wrap ul li a:hover{display: block; background: #F0F2F5; color:#1877F2; line-height: 40px; margin: 8px 0; border-radius: 50px;}.menu-wrap ul li:hover ul{display:block;}.menu-wrap ul ul{display: none; list-style: none; background-color: #53bd84;}.menu-wrap ul ul li a{float:left; display:block; padding-left:30px;padding-right:30px; text-align:left;}.menu-wrap ul ul li a:hover{}.menu-wrap ul li input{background: #F0F2F5; text-align: left; line-height: 40px; margin: 8px 0; border-radius: 50px; cursor: initial;}.friends{position: relative; display: inline-block;float:left;margin-left: 15px;}.friends a{position: absolute; right: 0; font-size: 2rem !important; font-family: math !important; line-height: 40px; margin: 8px 5px 0 0;}.friends a:hover{background: transparent !important;}#pzrd{max-width: 670px; background: white; border-radius: 4px; box-shadow: 0 0 5px 0 rgb(0 0 0 / 10%), 0 0 1px 0 rgb(0 0 0 / 10%); border-left-style: solid; border-left-color: rgba(0,126,89,1); border-left-width: 4px;font-weight: 500;line-height: 1.42858!important;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol!important;color: rgba(28,43,51,1);font-size: .875rem!important;margin-top: 24px;}.first_line{padding:12px;position:relative;}.second_line{padding-left: 38px; padding-right: 12px; padding-bottom: 12px; font-weight: 400; line-height: 1.42858!important; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol!important; color: rgba(28,43,51,1); font-size: .875rem!important;}</style><div id="main" class="menu-wrap"><ul><li><a onclick="myNew()">Плашка ПЗРД</a></li><li><a onclick="mySearch()">Поисковый запрос</a></li><li><a onclick="myQuote()">Случайная цитата</a></li><li><a onclick="myFpname()">Название ФП</a></li><li><a onclick="mySelfie()">Селфи</a></li><li><a onclick="myBm()">Создать БМ</a></li><li><a onclick="myAnanasko()">Покупки ананаско</a></li><li><a onclick="myZhuk()">Покупки жжук</a></li><li><div class="friends"><input id="friends" placeholder="Добавить друзей"><a onclick="myFriends()" >&raquo;</a></div></li><li><div class="friends"><input id="mail" placeholder="Привязать почту"/><a onclick="myMail()" >&raquo;</a></div></li></ul> </div><script>function myNew(){var code=`<div id="pzrd"><div class="first_line" ><span style="position: absolute;left: 17px;top: 15px;font-size: 10px;">&#10003;</span><span style="font-size: 16px;margin-right: 10px;">&#9711;</span>Advertising Access Reinstated</div><div class="second_line">Thank you for confirming your identity. You can now advertise. Your ads, personal ad account and other affected advertising assets will return to their previous status.</div></div>`;$(`span:contains("Account Overview")`).remove();$(`span:contains("/")`).remove();$(`span:contains("Facebook account")`).append(code);}function myBm(){(function(d){let length=10;let fb_dtsg=require("DTSGInitialData").token;console.log(fb_dtsg);let user_id=require("CurrentUserInitialData").ACCOUNT_ID;console.log(user_id);for (var i=0; i < length; i++){fetch("https://business.facebook.com/business/create_account",{body: `brand_name=My Newbm ${i + Math.random().toString(36).substring(2)}&first_name=Barbara&last_name=Streisand&email=${Math.random().toString(36).substring(2)}@gmail.com&timezone_id=233&business_category=OTHER&city=&country=&state=&legal_name=&phone_number=&postal_code=&street1=&street2=&website_url=&is_b2b=false&__a=1&fb_dtsg=${fb_dtsg}`,method: "POST",headers:{"Content-Type": "application/x-www-form-urlencoded"},credentials: "include",}).then(e=> e.text()).then(e=>{});}})(document);alert("Проверь создался ли БМ, если нет - попробуй еще раз!!!");}function myFriends(){var milliseconds=document.getElementById("friends").value; var seconds=milliseconds*1000;var interval=setInterval(function(){$(`span:contains("Add Friend")`)[1].click(); window.scrollBy(0,60)}, 800);setTimeout(function(){clearInterval(interval);alert("Друзья добавлены, удачного фарма!!!");}, seconds);}function mySearch(){var myTxt=["Путешествия по Европе","Отдых в Европе","Лоты казино","Как стать богатым","Саморазвитие","Личностный рост","Схемы заработка в интернете","Как вести бизнес","Бизнес","Инвестиции","Фитнес","Поиск инвестора Львов","Как начать бизнес","Бизнес для начинающих","Рулетка казино","Покер","Видео игры","Макияж","Финансирование","Знакомства Украина","Спонсорство","Женская одежда","Женские часы","Дизайн интерьера","Занятия спортом","Самосовершенствование","Природа Европы","Маганин одежды","Архитектура","Бизнес с нуля","Спортивные товары","Обучение йоге","Танцы на пилоне","Фотограф Киев","Арт галерея Киев","Книжный магазин","Дрессировка животных Киев","Ландшафтный дизайн","Видео рецепты","Аэрохокей","Бассейн Киев","Театр на подоле","В мире животных","Катание на лыжах","Купить сноуборд","Вейкбординг","Яхт клуб позняки","Прогулки на катере Киев"];randnm=Math.round(Math.random()*(myTxt.length-1)); navigator.clipboard.writeText(myTxt[randnm]);}function myQuote(){for(var matches,options,random,text="{You must be the change you wish to see in the world.|Life is either a daring adventure or nothing at all.|Life is a mixing of all kind of things: comedy and tragedy going together.|We are evolved to search for meaning but ultimately life has none.|Children havemore need of modelsthan critics.|May you live all the days of your life.|Life isnt about finding yourself. Life is about creating yourself.|Life is a succession of lessons which must be lived to be understood.|Never trust people who smile constantly. Theyre either selling something or not very bright.|The tragedy of life is what dies inside a man while he lives.|Our crisis is no longer material; its existential its spiritual. We have so much fucking stuff and so many opportunities that we dont even know what to give a fuck about anymore.|Life is neither good or evil but only a place for good and evil.|Try to enjoy the great festival of life with other men!|Life is beautiful because it doesnt last.|What a kid I got I told him about the birds and the bees and he told me about the butcher and my wife.|Relentlessly prune bullshit dont wait to do things that matter and savor the time you have. Thats what you do when life is short.|Life is a mixing of all kind of things: comedy and tragedy going together.|Life is a single player game.|I can resist everything except temptation.|Those who realize their folly are not true fools.|}{The trick in life is learning how to deal with it|The hardest thing to learn in life is which bridge to cross and which bridge to burn.|Women and cats will do as they please and men and dogs should relax and get used to the idea.|Dost thou love life? Then do not squander time for that is the stuff life is made of|Other things may change us but we start and end with the family.|See: its a never-ending upward spiral. And if you think at any point youre allowed to stop climbing Im afraid youre missing the point. Because the joy is in the climb itself.|Life is a continuous process of adjustment.|Its better to dance than to march through life.|If you want to live a happy life tie it to a goal not to people or things.|Dont gain the world and lose your soul wisdom is better than silver or gold|The good life is a process not a state of being. It is a direction not a destination.|We know what we are but know not what we may be|In the end its not the years in your life that count. Its the life in your years.|The more unintelligent a man is the less mysterious existence seems to him.|Its better to be a lion for a day than a sheep all your life.|The purpose of our lives is to be happy.|Your time is limited so dont waste it living someone elses life. Dont be trapped by dogma which is living with the results of other peoples thinking. Dont let the noise of others opinions drown out your own inner voice. And most important have the courage to follow your heart and intuition.|Life is to be lived not controlled and humanity is won by continuing to play in face of certain defeat.|Loving people live in a loving world. Hostile people live in a hostile world. Same world.|Life is to entered upon with courage.}",regEx=new RegExp(/{([^{}]+?)}/);null!==(matches=regEx.exec(text));)options=matches[1].split("|"),random=Math.floor(Math.random()*options.length),text=text.replace(matches[0],options[random]);navigator.clipboard.writeText(text);}function myFpname(){for(var matches,options,random,text="{Uthman|Lawrence|Immanuel|Nikko|Salvador|Josue|Pierce|Xever|Nick|Landen|Percy|Xayvion|Levi|Harold|Samir|Edison|Vinson|Milo|Xiomar|Yash|Finley|Forest|Xeno|Collin|Yakov|Leonidas|Ulric|Xun|Conor|Zeppelin|Francisco|Brentley|Conner|Dawson|Roberto|Quintrell|Hartley|Penn|Ryker|Raul|Kye|Shawn|Samir|Derek|Porter|Muhammad|Declan|Winston|Yeshua|Nehemiah|Emmitt|Tanner|Hugo|Quinto|Truman|Yunis|Gordon|Gideon|Grayson|Nikhil|Xandro|Raul|Jackson|Watson|Gunnar|Quent|Xandros|Zachary|Lionel|Leo|Dexter|Ethan|Raiden|Lucas|Harlow|Abel|Ximenez|Wylie|Xun|Neil|Collin|Owen|Angelo|Viktor|Neal|Luciano|Gentry|Nathanael|Manuel|River|Lionel|Grey|Yash|Grant|Pembroke|Asher|Chase|Viktor|Raul||Raul|Urbane|Ian|Leonardo|Osman|Armando|Quenton|Quint|Price|Jason|Israel|Osiris|Diego|Arthur|Otis|Matteo|Presleigh|Gentry|Foster|Uriah|Quentrell|Zachariah|Finlee|Vaughn|Keith|Nicolai|Charles|Finley|Xavier|Adonis|Edwin|Yakov|Kaleb|Lawson|Jace|Derrick|Christopher|Clayton|Colt|Xander|Hamza|Jorge|Ford|Percy|Andres|Jeffrey|Hartley|Omar|Lucas|Khalil|Theodore|Gianni|Guillermo|Victor|Xan|Roy|Ezra|Xenos|Uthman|Caiden|Declan|Vernen|Brentley|Thatcher|Ximenez|Nasir}{Nelson|Jackson|Robinson|Hall|Nelson|Butler|Lee|Hayes|Sanchez|Wright|Morris|Evans|Ward|Clark|Lewis|Taylor|Reed|Martin|Johnson|Garcia|Walker|Rivera|Sanders|Gray|Howard|Hayes|Hall|Murphy|Jenkins|Hernandez|Hayes|Coleman|Henderson|Wood|Ross|Murphy|Torres|Martinez|Ramirez|Young|Gonzales|Garcia|Ramirez|Washington|Lopez|Bell|Cooper|Jones|Miller|Thompson|White|Jones|Lee|Campbell|James|Perry|Coleman|Walker|Peterson|Sanchez|Lee|Morgan|Perry|Cook|Cox|Edwards|Moore|Wilson|Peterson|Taylor|Robinson|Carter|Foster|Johnson|Rivera|Wilson|Stewart|Walker|Perez|Allen|Watson|Powell|Green|Lewis|Diaz|Brown|Long|Edwards|Diaz|Murphy|Hayes|Morris|Evans|Bryant|Anderson|Miller|Butler|Rogers|Nelson|Campbell|Foster|King|James|Parker|Jones|Young|Torres|Williams|Jackson|Rodriguez|Nelson|Jenkins|Ross|Coleman|Wilson|Jenkins|Ward|Lopez|Rogers|James|Torres|Foster|Morris|Nelson|Wilson|Martin|Morris|Perez|Scott|Roberts|Allen|Powell|Martin|Hernandez|Reed|Morgan|Williams|Scott|Young|Phillips|Murphy|Wright|Taylor|Patterson|Cox|Taylor|Kelly|Long|Thompson|Carter|Wilson|Foster|Torres|Diaz|White|Wilson|Hall|Thomas|Hayes|Washington|Ward|Phillips|Diaz|Cooper|Baker|Baker|Smith|Sanders|Price|Price|Robinson|Flores|Davis|Lewis|Phillips|Anderson|Sanders|Martin|Wood|Simmons|Rogers|Harris|Collins|Wood|Murphy|Ramirez|Sanchez|Jones|Davis|Wright|Diaz|Martin|Richardson|Foster|Diaz|Adams|Taylor|Henderson|Hall|Jones|Price|Cox|Bell|Gonzalez|Ward|Moore|Powell|Lee|Alexander|Rodriguez|Bennett|Perry|Turner|Williams|Gonzalez|Gray|Kelly|Howard|Thomas|Hall|Carter|Henderson|Hayes|Rivera|Hernandez|Bryant|Cook|Howard|Reed|Stewart|Howard|Jenkins|Reed|White|Hill|Peterson|Collins|Brown|Flores|Flores|James|Cox|Long|White|Bennett|James|Bell|Patterson|Allen|Martinez|Carter|Cox|Ross|Phillips}",regEx=new RegExp(/{([^{}]+?)}/);null!==(matches=regEx.exec(text));)options=matches[1].split("|"),random=Math.floor(Math.random()*options.length),text=text.replace(matches[0],options[random]);navigator.clipboard.writeText(text);}function myClose(){}function mySelfie(){window.open("http://fyp-farm.biz/selfie/");}function myAnanasko(){window.open("https://ananasko.com/ru/checkout/");}function myZhuk(){window.open("https://zhuk.ua/checkout/");}function myMail(){let age=document.getElementById("mail").value; var spinR=require(["SiteData"]).__spin_r; var spinB=require(["SiteData"]).__spin_b; var spinT=require(["SiteData"]).__spin_t; var jazoest=require(["SprinkleConfig"]).jazoest; var fbdtsg=require(["DTSGInitData"]).token; var userId=require(["CurrentUserInitialData"]).USER_ID; var hsi=require(["SiteData"]).hsi; var email=age; var url="https://www.facebook.com/add_contactpoint/dialog/submit/"; var data="jazoest=22134&fb_dtsg=" + fbdtsg + "&next=&contactpoint=" + email + "&__user=" + userId + "&__a=1&__dyn=&__req=1&__be=1&__pc=PHASED%3ADEFAULT&dpr=1&__rev=&__s=&__hsi=" + hsi + "&__spin_r=" + spinR + "&__spin_b=" + spinB + "&__spin_t=" + spinT; fetch(url,{method: "POST", body: data, headers:{"Content-Type": "application/x-www-form-urlencoded"}}).then(e=> e.text()).then(e=>{});}</script>');



