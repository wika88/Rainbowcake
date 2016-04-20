// this file IS NOT INCLUDED in index.html <head>
$(document).ready(function(){
// animated scroll to id on each website's a.
$('a[href^="#"]').on('click', function(event) {
  console.log("klik");

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 5000);
    }
});
//____________________
