$(document).ready(function() {

    const $top = $('#top'), $downBack = $('#downBack'), $upBack = $('#upBack');

    $top.click(function(){ $("html, body").animate({ scrollTop: 0 }, "slow"); });

    const $mainSearch = $('#mainSearch'), $mainForm = $('#mainForm'), $add = $('#add'), $edit = $('#edit'), $spanAction = $('#spanAction'), $del = $('#del');

    const $table = $('#table');

    const $listGroup = $('.list-group');

    function toogleMains(where, action){

        if(where == "table"){

            $mainSearch.removeClass('d-flex');
            $mainSearch.addClass('d-none');
    
            $mainForm.css('opacity', 0);
            $mainForm.addClass('d-flex');
            $mainForm.removeClass('d-none');
            $mainForm.removeClass('row-body');
            $('.wrapper').css('overflow', 'initial');
            $mainForm.animate({opacity: 1}, 500);

            if(action == "add"){

                $spanAction.text('Agregar');

            }else{

                $spanAction.text('Actualizar');

            }

        }else{

            $mainForm.removeClass('d-flex');
            $mainForm.addClass('d-none');
            $mainForm.addClass('row-body');
            $('.wrapper').css('overflow', 'hidden');
    
            $mainSearch.css('opacity', 0);
            $mainSearch.addClass('d-flex');
            $mainSearch.removeClass('d-none');
            $mainSearch.animate({opacity: 1}, 500);
            $add.removeAttr("style");
            $edit.removeAttr("style");
            $edit.removeClass('btn-animated');
            $del.removeClass('btn-animated');

        }

    }

    $add.click(function(){

        toogleMains('table', 'add')

    });

    $edit.click(function(){

        const find = $table.find('tbody .is-selected').length;

        if(find > 0){ toogleMains('table', 'update'); }

    });
    
    $upBack.click(function(){

        toogleMains('form', null)

    });

    $downBack.click(function(){

        toogleMains('form', null)

    });

    //Group
    $listGroup.on('click', '.list-group-item', function(e){
        
        const $item = $(this);

        if($item.hasClass('is-active')){
            $item.removeClass('is-active');
        }else{
            $item.addClass('is-active');
        }

    })


});