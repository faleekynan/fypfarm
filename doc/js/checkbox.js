$("input[type='radio']").change(function(){

   
if($(this).val()=="f")
{
$("#f").show();
$("#middle_name").show();
$("#my_button").show();

}
else
{
$("#f").hide(); 
$("#middle_name").hide();
$("#my_button").hide();        
}

if($(this).val()=="m")
{   
$("#m").show();
$("#middle_name_m").show(); 
$("#my_button_m").show();  
}
else
{
$("#m").hide();
$("#middle_name_m").hide();
$("#my_button_m").hide();
}

  
});

