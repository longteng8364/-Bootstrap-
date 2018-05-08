window.onscroll = function (){
    if(window.pageYOffset > 400){
        $('.scroll').fadeIn();
    }else{
        $('.scroll').fadeOut();
    }
}

$('.scroll').on('click', function (){
    $('body,html').animate({'scrollTop': 0}, 200);
});


