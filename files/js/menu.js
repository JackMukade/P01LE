$( document ).ready(function() {

    const $bars = $('#bars'), $icon_bar = $('.bars'), $sidebar = $('#sidebar');
    const originalWidth = $sidebar.width();

    $bars.click( function( e ) {
        e.preventDefault();

        const sidewidth = $sidebar.width();

        if (sidewidth > 0) {

            $sidebar.removeClass('col')
            $sidebar.animate({width: "0"}, 300, function(){$sidebar.css('display', 'none')});
            $icon_bar.css('color', '#ff8432')
       
        }else {

            $sidebar.removeAttr("style")
            $sidebar.animate({width: originalWidth}, 300, function(){$sidebar.addClass('col')});
            $icon_bar.css('color', '#999')
            
        }

    });

 

});