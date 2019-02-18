let show = false;

$(document).ready(function() {

    const $container = $("#searchContainer"), $button = $("#searchHandle"), $close = $('#closeSearch');

    $button.click(function() {
        
        if(!show){

            $(this).css({'background': '#ff8432', 'color': '#fbfbfb'})
            $container.css({'display': 'block'})
            show = true;

        }else{

            $container.css({ 'display': 'none'});
            $(this).removeAttr("style");
            show = false;

        }

    });

    $close.click(function(){ 
        $container.css({ 'display': 'none'});
        $button.removeAttr("style");
        show = false;
    });

});

$(document).mouseup(function(e) {

    const $container = $("#searchContainer"), $button = $("#searchHandle");

    // if the target of the click isn't the container nor a descendant of the container
    if (!$container.is(e.target) && !$button.is(e.target) && $container.has(e.target).length === 0) { 
     
        $container.css({ 'display': 'none'})
        $button.removeAttr("style");
        show = false;
        
    }

});
