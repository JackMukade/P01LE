$( document ).ready(function() {

    const language = { "url": "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json" };

    const $searchContainer = $('#searchContainer'); 

    const $table = $('#table'), $edit = $('#edit'), $del = $('#del');

    $table.on('click', 'tbody tr', function (e) {

        e.stopPropagation();

        $edit.removeClass('btn-animated');
        $del.removeClass('btn-animated');
        $table.find('tbody tr').removeClass('is-selected');
        $(this).addClass('is-selected');
        
        setTimeout(function() {
                $edit.addClass('btn-animated');
                $del.addClass('btn-animated');
            }, 300
        );

    });

    $table.hover( function() { $searchContainer.css('opacity', '0.4')}, function() { $searchContainer.css('opacity', '1')});

    $table.DataTable({
        scrollY: '55vh',
        scrollCollapse: true,
        responsive: true,
        language,
        pageLength: 25
    });
    
    $edit.hover(function(){ $edit.removeClass('btn-animated'); });
    $del.hover(function(){ $del.removeClass('btn-animated'); });

    $('#main').click(function(e){

        $table.find('tbody tr').removeClass('is-selected');
        $edit.removeClass('btn-animated');
        $del.removeClass('btn-animated');

    });

    $('#iconMenu').click(function(e){

        $table.find('tbody tr').removeClass('is-selected');
        $edit.removeClass('btn-animated');
        $del.removeClass('btn-animated');

    });


});