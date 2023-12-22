 $(document).ready(function(){
    $("#info").click(function(){
           $(".header_right").slideToggle(500);
           $(".back").show();
           $(".back").click(function(){
            $(".header_right").slideUp(500);
            $(".back").hide();
           })
        })
    $("#login").click(function(){
            $("#login_right").slideToggle(600);
            $(".back").show();
            $(".back").click(function(){
            $("#login_right").slideUp(600);
            $(".back").hide();
           })
        })
})



var password = false;
function check(){
   var view = document.getElementById("password");
   if(password == false){
      view.setAttribute("type", "text");
      password=true;
   }
   else if(password == true){
      view.setAttribute("type", "password");
      password=false;
   }
}
var open;
function openwin(){
   open = window.open("https://t.me/nirkpub");
}


$(document).ready(function(){
   $(".cocktail_block").hover(function(){
      $(".cocktail_block_write").fadeToggle(400);
   })
})


$(document).ready(function(){
   $(".beer_block").hover(function(){
      $(".beer_block_write").fadeToggle(400);
   })
})