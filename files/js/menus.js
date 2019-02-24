$( document ).ready(function() {

    /* --- Mobile and Desktop menu --- */

    const $barsMenu = $('#barsMenu'), $barsContainer = $('#barsContainer'), 
    $iconMenu = $('#iconMenu'), originalWidth = $iconMenu.width();

    //Mobile
    const $navMob = $('#navMob'), 
    $opnavMob1  = $('#opnavMob1'), $opnavMob2 = $('#opnavMob2'), $opnavMob3 = $('#opnavMob3'),
    $subNavMob1 = $('#subNavMob1'), $close1   = $('#close1'),
    $subNavMob2 = $('#subNavMob2'), $close2   = $('#close2');

    //Logo
    const $logoFixed = $('#logoFixed')

    $barsMenu.click( function( e ) {

        e.preventDefault();

        const wScreen = $(window).width();

        if(wScreen >= 768){

            const wMenu = $iconMenu.width();

            if (wMenu > 0) {

                $iconMenu.removeClass('col')
                $iconMenu.animate({width: "0"}, 300, function(){$iconMenu.css('display', 'none')});
                $barsContainer.css('color', '#ff8432')
                $logoFixed.css('opacity', '0.5')
        
            }else {

                $iconMenu.removeAttr("style")
                $iconMenu.animate({width: originalWidth}, 300, function(){$iconMenu.addClass('col')});
                $barsContainer.css('color', '#999')
                $logoFixed.css('opacity', '0')
            }
        
        }else{

            $navMob.css('width', ($navMob.width() > 0) ? '0' : '100%'); //Main

            if($subNavMob1.width() > 0){ $subNavMob1.css('width', '0'); } //Subs

            if($subNavMob2.width() > 0){ $subNavMob2.css('width', '0'); }

        }

    });

    //Option1 
    $opnavMob1.click(function(e){

        e.preventDefault();
        $subNavMob1.css('width', '100%');

    })

    $close1.click(function(e){

        e.preventDefault();
        $subNavMob1.css('width', '0');

    })
 
    //Option2
    $opnavMob2.click(function(e){

        e.preventDefault();
        $subNavMob2.css('width', '100%');

    })

    $close2.click(function(e){

        e.preventDefault();
        $subNavMob2.css('width', '0');

    })

});
  