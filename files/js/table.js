$( document ).ready(function() {

    const $table = $('#table'), $edit = $('#edit'), $del = $('#del')

    $table.on('click', 'tbody tr', function (e) {

        $edit.removeClass('btn-animated');
        $del.removeClass('btn-animated');
        $table.find('tbody tr').removeClass('is-selected');
        $(this).addClass('is-selected');
        
        setTimeout(function() {
                $edit.addClass('btn-animated');
                $del.addClass('btn-animated');
            }, 300
        );

    })
    
    $edit.hover(function(){ $edit.removeClass('btn-animated'); });
    $del.hover(function(){ $del.removeClass('btn-animated'); });

});