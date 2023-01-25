window.onload = function() {
var name = document.getElementById("name");
	    surname = document.getElementById("surname");
		bir_date = document.getElementById("bir_date");
	    paste_name = document.getElementById("paste_name");
		paste_surname = document.getElementById("paste_surname");
		paste_date = document.getElementById("paste_date");
		
	    en_paste_name = document.getElementById("en_paste_name");
		en_paste_surname = document.getElementById("en_paste_surname");
		reverse_bir_date = document.getElementById("reverse_bir_date");
		
      
  name.addEventListener('input', function() {
	paste_name.value = name.value;
	en_paste_name.value = name.value;
    });
  surname.addEventListener('input', function() {
	paste_surname.value = surname.value;
	en_paste_surname.value = surname.value;
	});
  bir_date.addEventListener('input', function() {
	paste_date.value = bir_date.value;
	reverse_bir_date.value = bir_date.value;
    });
	
  
  name.addEventListener('input', function() {
    en_paste_name.value = translitRuEn(this.value);
  });
  surname.addEventListener('input', function() {
    en_paste_surname.value = translitRuEn(this.value);
  });
bir_date.addEventListener('input', function() {
    paste_date.value = translitRu0(this.value);
	reverse_bir_date.value = translitRu0(this.value);
  });
  
  
};


    
main_row.addEventListener('input', function() {
    record_row.value = translit2(this.value);
  });
 

