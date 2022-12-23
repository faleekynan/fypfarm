window.onload = function() {
  var src = document.getElementById("main_row"),
      date = document.getElementById("date");
        en = document.getElementById("en");
       ru = document.getElementById("ru");
       rec = document.getElementById("record_row");
  src.addEventListener('input', function() {
	  date.value = src.value;
        en.value = src.value;
        ru.value = src.value;
        rec.value = src.value;
    });
  
  main_row.addEventListener('input', function() {
    en.value = translitRuEn(this.value);
  });
  main_row.addEventListener('input', function() {
    ru.value = translitRuRu(this.value);
  });
  main_row.addEventListener('input', function() {
    date.value = translitRu0(this.value);
  });
  main_row.addEventListener('input', function() {
    rec.value = translitRu0(this.value);
  });

  
  
};

document.getElementById('main_row').addEventListener('input', function(e){
	e.target.value = e.target.value.split('	').join('\n');
	e.target.value = e.target.value.split('	').join('\n');
	e.target.value = e.target.value.split('	').join('\n');
	e.target.value = e.target.value.split('	').join('\n');
	e.target.value = e.target.value.split('	').join('\n');
    e.target.value = e.target.value.split('	').join('\n');
	e.target.value = e.target.value.split(' ').join('\n');
});

    
main_row.addEventListener('input', function() {
    record_row.value = translit2(this.value);
  });
