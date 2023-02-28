javascript:var SPINTAX_PATTERN = /\{[^"\r\n\}]*\}/; var spin = function (spun) {   var match;   while (match = spun.match(SPINTAX_PATTERN)) {    match = match[0];    var candidates = match.substring(1, match.length - 1).split("|");    
spun = spun.replace(match, candidates[Math.floor(Math.random() * candidates.length)])   };   return spun;  };
var name="{Агафія|Акилина|Анастасія|Анісія|Анна|Антоніна|Арета|Богдана|Божена|Варвара|Віра|Дарія|Єва|Євгенія|Євдокія|Євстахія|Зінаїда|Зореслава|Зоряна|Зоя|Іванна|Ірина|Катерина|Костантина|Ксенія|Лада|Лариса|Лідія|Любов|Любомира|Людмила|Марія|Марта|Меланія|Мирослава|Мотрона|Надія|Наталія|Ніна|Олександра|Олена|Ольга|Параскевія|Пелагія|Радослава|Роксана|Роксоляна|Романа|Рута|Соломія|Софія|Стефанія|Тамара|Таїса|Теодора|Тереса|Тетяна|Харитина|Христина|Юліана|Юстина|Ярослава}"; 
var surname="{Тищик|Папроцька|Гордієвська|Лукомська|Воблий|Левенко|Павличко|Вольвач|Сенькович|Тертишна|Каратницька|Соловей|Бобко|Завітневич|Пашковська|Калинець|Рудинська|Шматько|Прядун|Шинкар|Котовська|Лепкалюк|Височанська|Ніклевич|Олесь|Дмитрів|Кабак|Грипич|Бойчак|Тимошенко|Дриженко|Ніколайчук|Значко-Яворська|Вакалюк|Мохнацька|Коструба|Охріменко|Боговін|Кулинич|Силенко|Снігур|Баб'як|Мацола|Денисюк|Лукомська|Піддубна|Герасимчук|Гуцуляк|Філіпчук|Дунін-Борковська|Конотопенко|Рубаненко|Городиська|Сиваченко|Стефаник|Кришень|Корж|Алексієвець|Скрипниченко|Зацний|Маковійчук|Плахотнюк|Лучицька|Макаревич|Юхимович|Засядько|Рабій|Антонич|Дончук|Сугоняко|Химич|Безус|Герцик|Мелащенко|Горілий|Соляник|Мазур|Дочинець|Бурбело|Маринченко|Бондаренко|Добряк|Худченко|Бутник|Ящук|Мартинець|Антків|Костецька|Компанієць|Балога|Заруцька|Бенюк|Герасимчук|Кормош|Магура|Сисуненко|Хміль|Маньківська|Герасимюк}";

var day="{10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28}";
var month="{1|2|3|4|5|6|7|8|9}";
var year="{1985|1986|1987|1988|1989|1990|1991|1992|1993|1994|1995|1996|1997|1998|1999|2000|2001}";

val_name = spin(name);
val_surname = spin(surname);
val_day = spin(day);
val_month = spin(month);
val_year = spin(year);

phone = document.querySelector('input[name=reg_email__]').value;
    
	


function makeid(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
 b = makeid(12);
 

document.querySelector('input[name=firstname]').value = val_name;
document.querySelector('input[name=lastname]').value = val_surname;
document.querySelector('input[name=reg_passwd__]').value = b;


document.getElementById('day').value = val_day;
document.getElementById('month').value = val_month;
document.getElementById('year').value = val_year;



$('label:contains("жінка")')[0].click();

var reg = document.querySelector('button[name="websubmit"]').click();


a = prompt("Скопировать данные?", phone+"\t"+    b+"\t"+    val_name+"\t"+    val_surname+"\t"+    val_day  + "." +  "0" +  val_month + "." + val_year);


if (a == null || a == "") {

  } else {
	  
  navigator.clipboard.writeText(a);
  }

