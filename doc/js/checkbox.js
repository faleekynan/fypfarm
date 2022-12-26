$("input[type='radio']").change(function(){

   
if($(this).val()=="f")
{
$("#f").show();
$("#middle_name").show();
}
else
{
$("#f").hide(); 
$("#middle_name").hide();       
}

if($(this).val()=="m")
{   
$("#m").show();
$("#middle_name_m").show();  
}
else
{
$("#m").hide();
$("#middle_name_m").hide();
}

  
});

