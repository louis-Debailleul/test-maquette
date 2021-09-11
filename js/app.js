jQuery(document).ready(function($){
    $(document).on( 'click','.responsive-menu',function() {
        $(".container-home").toggleClass('diplay-none');
        $(".responsive-menu").toggleClass('diplay-none');
        $(".logo").toggleClass('diplay-none');
        $(".footer").toggleClass('diplay-none');
        $('.contents').prepend('<span id=close class=material-icons close> close </span>');
        $('#menu').removeClass('menu').toggleClass('menu-popUp')
    });

    $(document).on( 'click','#close',function() {
        $(".container-home").removeClass('diplay-none');
        $(".responsive-menu").removeClass('diplay-none');
        $(".logo").removeClass('diplay-none');
        $(".footer").removeClass('diplay-none');
        $('#close').remove();
        $('#menu').removeClass('menu-popUp').toggleClass('menu')
    });
});