jQuery('document').ready(function($){

var $hamburger = $(".hamburger"),
menu = $('.navigation ul');
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    
    if(menu.hasClass('show')){
        menu.removeClass('show');
    }else {
        menu.addClass('show');
    }

  });
});