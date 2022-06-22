


$( document ).ready(function() {
$('#one').text(function(){
    $('#one').before("<p>Just updated</p>");
});
$('p').text(function(){
    $("ul").append('<li><id="five">gluten-free soy sauce</a></li>');
});
$( "li" ).last().css( "font-style", "italic" );

});
	
