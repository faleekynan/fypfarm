$("input[type='radio']").change(function(){

   
if($(this).val()=="f")
{
$("#f").show();
}
else
{
$("#f").hide();       
}

if($(this).val()=="m")
{   
$("#m").show(); 
}
else
{
$("#m").hide();
}

  
});

