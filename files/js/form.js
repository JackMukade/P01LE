showMyForm = false; 

$(document).ready(function() {

    //Form
    const $container = $("#formContainer"), $close = $('#closeForm'), 
    $add = $("#add"), $labelAdd = $('#labelAdd'), $edit = $('#edit'), $labelEdit = $('#labelEdit');

    $add.click(function() {

        $labelAdd.removeClass('d-none')
        $labelEdit.addClass('d-none')
        
        if(!showMyForm){

            $(this).css({'background': '#ff8432', 'color': '#fbfbfb'})
            $container.css({'display': 'block'})
            showMyForm = true;

        }else{

            $container.css({ 'display': 'none'});
            $(this).removeAttr("style");
            showMyForm = false;

        }

    });

    const $table = $('#table');

    $edit.click(function() {
        
        $labelAdd.addClass('d-none')
        $labelEdit.removeClass('d-none')

        const $select = $table.find('tbody .is-selected'); 

        if($select.length > 0){

            const array = $select.attr('data').split('++');
        
            if(!showMyForm){
    
                $(this).css({'background': '#ff8432', 'color': '#fbfbfb'})
                $container.css({'display': 'block'})
                showMyForm = true;
    
            }else{
    
                $container.css({ 'display': 'none'});
                $(this).removeAttr("style");
                showMyForm = false;
    
            }

        }

    });

    $close.click(function(){ 

        $container.css({ 'display': 'none'});
        $add.removeAttr("style");
        $edit.removeAttr("style");
        showMyForm = false;

    });
  
});

$(document).mousedown(function(e) {

    const $container = $("#formContainer"), $button = $("#add")

    if (!$container.is(e.target) && !$button.is(e.target) && $container.has(e.target).length === 0) { 
     
        $container.css({ 'display': 'none'})
        $button.removeAttr("style");
        showMyForm = false;
        
    }

});
