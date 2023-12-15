$(function () {
  $(".section-hq:not(:first)").hide();

  $(".seta").click(function () {
    let destino_id = $(this).attr("href");

    $(this).closest(".seta").hide();
    $(destino_id).show();

  });
});

function tocarClique() {
  var audio = document.getElementById("somBotao");
  audio.play();
}

$(function () {

  $(".draggable").draggable({
    revert: "invalid",
    cursor: "move",
  });

  $(".secao").droppable({
    accept: ".draggable",
    drop: function (event, ui) {

      $(this).append(ui.draggable);

      ui.draggable.css({
        top: 0,
        left: 0,
      });

      verificarColuna2Vazia();
    }
  });

  function verificarColuna2Vazia() {
    var coluna2Children = $('.coluna-2').children();

    if (coluna2Children.length === 0) {
      $('#verificar').removeClass('disabled');
    }
  }
});