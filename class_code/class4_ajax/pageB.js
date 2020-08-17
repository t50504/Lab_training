$( document ).ready(function() {
    $.ajaxSetup({
        data: {
        csrfmiddlewaretoken: '{{ csrf_token }}'
        },
    });

    $('#calculate').click(function(){
        var arg1 = $('#arg1').val();
        var arg2 = $('#arg2').val();
        var parse_data = new FormData();
        parse_data.append('arg1',arg1);
        parse_data.append('arg2',arg2);

        $.ajax({
            url:'/pageB/ajax_sum/', // '/t50504/{app}/ajax_sum',
            data:parse_data,  // 傳到後端的資料
            type:'POST',
            dataType: 'json',
            processData:false,
            contentType:false,
            success:function(data){ //後端傳來的jsonresponse
                if (data.status === 0){
                    $('#ajax-ans').html(data.answer);
                }
                else if(data.status === 2){
                    $('#ajax-ans').html('WRONG RANGE');
                }
                else{
                    $('#ajax-ans').html('WRONG INPUT TPYE');
                }

            },
            error: function(){
                alert('Calculate error')
            },
    
         });
        



    })
});