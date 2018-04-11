$(document).ready(function(){
    $('#show').click(function(){
       
        $('#more').css("display","flex");
        $('#show').css('display','none')
    })
    
    $('.card').mouseover(function(){
       var n=$('.social-team');
    $(this).find('.social-team').css('opacity','1');
    })
    
    $('.card').mouseleave(function(){
        $(this).find('.social-team').css('opacity','0');
    })
})

