$(function() {
  $('.hot').text(function() { 
    $('.hot, #four').css({"background-color": "#c5a996",
            "border": "1px solid", "color":"black","text-shadow": "none"
   }); 
});
$('ul').text(function(){
  $("ul").append('<li><id="five">gluten-free soy sauce</li>');
});
$( "li" ).last().css({"text-color": "black", "background-color": "black",
"position": "relative", "text-shadow": "none", "font-family": "ariel", "font-size": "15px"});
});