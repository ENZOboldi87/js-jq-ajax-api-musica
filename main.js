$(document).ready(function() {

  $.ajax({
    url: 'https://flynn.boolean.careers/exercises/api/array/music',
    type: 'GET',
    success: function (dischi) {
      var cds = dischi.response;
      showCd(cds);
    },
    error:(function() {
      alert('errore');
    })
  })

// funzione che stampa i cd nel container
function showCd(arrayCd) {
  var source = $("#cd-template").html();
  var template = Handlebars.compile(source);


  for (var i = 0; i < arrayCd.length; i++) {
    var singoloCd = arrayCd[i];
    var html = template(singoloCd);
    $('.cds-container').append(html);
  }


}




});
