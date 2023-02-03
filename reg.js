
function makeid(length) {
    var result           = "";
    var characters       = "abcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
var randName = new Array("Анастасія","Анна","Антоніна","Арета","Богдана","Варвара","Віра","Дарія","Єва","Євгенія","Зінаїда","Зоряна","Зоя","Іванна","Ірина","Катерина","Костантина","Ксенія","Лада","Лариса","Лідія","Любов","Любомира","Людмила","Марія","Марта","Мирослава","Надія","Наталія","Ніна","Олександра","Олена","Ольга","Роксана","Соломія","Софія","Стефанія","Тамара","Таїса","Тетяна","Христина","Юлія","Ярослава");
rname=Math.round(Math.random()*(randName.length-1));
var randSname = new Array("Тищик","Папроцька","Гордієвська","Лукомська","Воблий","Левенко","Павличко","Вольвач","Сенькович","Тертишна","Каратницька","Соловей","Бобко","Завітневич","Пашковська","Калинець","Рудинська","Шматько","Прядун","Шинкар","Котовська","Лепкалюк","Височанська","Ніклевич","Дмитрів","Кабак","Грипич","Бойчак","Тимошенко","Дриженко","Ніколайчук","Значко-Яворська","Вакалюк","Мохнацька","Коструба","Охріменко","Боговін","Кулинич","Силенко","Снігур","Бабяк","Мацола");
rsname=Math.round(Math.random()*(randSname.length-1));
var randDay = new Array("10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28");
rday=Math.round(Math.random()*(randDay.length-1));
var randMonth = new Array("1","2","3","4","5","6","7","8","9");
rmonth =Math.round(Math.random()*(randMonth.length-1));
var randYear = new Array("1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001");
ryear =Math.round(Math.random()*(randYear.length-1));
var phone = document.querySelector("input[name=reg_email__]").value;
var name = randName[rname];
var surname = randSname[rsname];
var day = randDay[rday];
var month = randMonth[rmonth];
var year = randYear[ryear];
var pass = makeid(12);
var date_result = day + "." + "0" +month + "." + year;
var info = phone + "\t" + pass + "\t" + name + "\t" +surname + "\t" + date_result;

document.querySelector("input[name=firstname]").value = name;
document.querySelector("input[name=lastname]").value = surname;
document.querySelector("input[name=reg_passwd__]").value = pass;

document.getElementById("day").value = day;
document.getElementById("month").value = month;
document.getElementById("year").value = year;
$(`label:contains("жінка")`)[0].click();

a = prompt("Скопировать данные?", info);


if (a != null) {
navigator.clipboard.writeText(a);
  }

document.querySelector("button[name=websubmit]").click();