
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/16PqM5t_b2ist3mp9l-OFAc5hNz9tAmOnB0KppxdHxwo/edit?usp=sharing';

  $(document).ready(function(){
    Tabletop.init( {
      key: publicSpreadsheetUrl,
      callback: showInfo,
      simpleSheet: true 
    } )
  

  
  function showInfo(data, tabletop) {
    for(var i=0;i<data.length;i++){
    $( "tbody" ).append('<tr><td>'+data[i].Subject+'</td><td>'+data[i].Faculty+'</td><td>'+data[i].Slot+'</td><td><button type="button" class="btn btn-success"><a href="'+data[i].Whatsapp+'">Link</a></button></td><tr>');
  }
  }
  
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#maininfo tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  