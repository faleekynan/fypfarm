$("#back").hide();
$(".f_ava").click(function() {
    if($(this).is(":checked")) {
        $("#back").show();
		$("#front").hide();
		
    } else {
        $("#back").hide();
		$("#front").show();
		
		
    }
});