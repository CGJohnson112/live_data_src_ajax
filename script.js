$(document).ready(function(){
 $.ajaxSetup({ cache: false });
 $('#search').keyup(function(){
  $('#result').html('');
  $('#state').val('');
  var searchField = $('#search').val();
  var expression = new RegExp(searchField, "i");
  $.getJSON('data.json', function(data) {


    
   $.each(data, function(key, value){
    if (value.state.search(expression) != -1 || value.city.search(expression) != -1)
    {
     $('#result').append('<li class="list-group-item link-class"> '+ value.hours +' | <span class="text-muted">' +value.address+  '</span>| <span class="text-muted">' +value.city+ ' </span>| <span class="text-muted">' + value.state + '</span>| <span class="text-muted">' + value.companyId + '</span> | <span class="text-muted">' + value.phone + '</span></li>');
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