$(function(){
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function(){
     $('#result').html('');
     $('#state').val('');
     var searchField = $('#search').val();
     var expression = new RegExp(searchField, "i");
     $.getJSON('countries.json', function(data) {
      $.each(data, function(key, value){
       if (value.name.search(expression) != -1 || value.code.search(expression) != -1)
       {
        $('#result').append('<li class="list-group-item link-class"> ' + value.name +  '</span> | <span class="text-muted">' + value.code + '</span></li>');
       }
      });   
     });
    });
    
    $('#result').on('click', 'li', function() {
     var click_text = $(this).text().split('|');
     $('#search').val($.trim(click_text[0]));
     $("#result").html('');
    });
   });