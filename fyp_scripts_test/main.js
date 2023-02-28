

try{
search = document.querySelector('input[type="search"]');
search.focus(); search.select();
document.execCommand("insertHTML", false, mySearch[randnm]);
} catch(err){console.log(err)}

try{
document.querySelector('[aria-label="Page name (required)"]').focus();
document.execCommand("insertHTML", false, names);
} catch(err){console.log(err)}

try{
document.querySelector('[aria-label="Bio (optional)"]').focus();
document.execCommand("insertHTML", false, quote);
} catch(err){console.log(err)}