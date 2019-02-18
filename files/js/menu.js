$( document ).ready(function() {

    const $barsDesktop = $('#bars-desktop'), $icon_bar = $('.bars'), $sidebar = $('#sidebar');
    const originalWidth = $sidebar.width();

    //Mobile
    const $navMob = $('#navMob'), $opnavMob1 = $('#opnavMob1'), $opnavMob2 = $('#opnavMob2'), 
    $opnavMob3 = $('#opnavMob3');

    const $subNavMob1 = $('#subNavMob1'), $close1 = $('#close1')

    const $subNavMob2 = $('#subNavMob2'), $close2 = $('#close2')

    //Logo
    const $logoFixed = $('#logoFixed')

    $barsDesktop.click( function( e ) {
        e.preventDefault();

        const w = $(window).width();

        if(w >= 768){

            const sidewidth = $sidebar.width();

            if (sidewidth > 0) {

                $sidebar.removeClass('col')
                $sidebar.animate({width: "0"}, 300, function(){$sidebar.css('display', 'none')});
                $icon_bar.css('color', '#ff8432')
                $logoFixed.css('opacity', '0.5')
        
            }else {

                $sidebar.removeAttr("style")
                $sidebar.animate({width: originalWidth}, 300, function(){$sidebar.addClass('col')});
                $icon_bar.css('color', '#999')
                $logoFixed.css('opacity', '0')
            }
        
        }else{

            const wMain = $navMob.width();

            if(wMain > 0){

                $navMob.css('width', '0')

            }else{

                $navMob.css('width', '100%')

            }

            const wSub1 = $subNavMob1.width();

            if(wSub1 > 0){ $subNavMob1.css('width', '0') }

            
            const wSub2 = $subNavMob2.width();

            if(wSub2 > 0){ $subNavMob2.css('width', '0') }

        }

    });

    //Option1 
    $opnavMob1.click(function(e){

        e.preventDefault();
        $subNavMob1.css('width', '100%')

    })

    $close1.click(function(e){

        e.preventDefault();
        $subNavMob1.css('width', '0')

    })
 
    //Option2
    $opnavMob2.click(function(e){

        e.preventDefault();
        $subNavMob2.css('width', '100%')

    })

    $close2.click(function(e){

        e.preventDefault();
        $subNavMob2.css('width', '0')

    })

});
  