$(document).ready(function () {
    $('#show').click(function () {

        $('#more').css("display", "flex");
        $('#show').css('display', 'none')
    })

    $('.card').mouseover(function () {
        var n = $('.social-team');
        $(this).find('.social-team').css('opacity', '1');
    })

    $('.card').mouseleave(function () {
        $(this).find('.social-team').css('opacity', '0');
    })

    $('.work-col').mouseover(function () {
        $(this).find('.item').css("display", 'block');
        $(this).find('.fas').css('display', 'block')
        $(this).find('img').css('opacity','0.8')
    })

    $('.work-col').mouseleave(function () {
        $(this).find('.item').css('display', 'none');
$(this).find('.fas').css('display','none');
       $(this).find('img').css('opacity','1') 
    })
})
