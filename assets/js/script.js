$(document).ready(function () {

  audioClick();

  $(function () {
    $(".section-hq:not(:first)").hide();

    $(".seta").click(function () {
      let destino_id = $(this).attr("href");

      $(this).closest(".seta").hide();
      $(destino_id).show();

    });
  });


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


  $('#verificar').on('click', function () {
    verificarRespostas();
  });


  function verificarRespostas() {
    const respostasFixas = ['universidade', 'aluguel', 'condominio'];
    const respostasVariaveis = ['luz', 'limpeza', 'presentes'];
    const respostasLazer = ['pizza', 'praia', 'acampamento'];

    const elementosFixas = $('.secao-fixas').children().map(function () {
      return $(this).attr('id');
    }).get();

    const elementosVariaveis = $('.secao-variaveis').children().map(function () {
      return $(this).attr('id');
    }).get();

    const elementosLazer = $('.secao-lazer').children().map(function () {
      return $(this).attr('id');
    }).get();

    if (
      verificarRespostasCategoria(elementosFixas, respostasFixas) &&
      verificarRespostasCategoria(elementosVariaveis, respostasVariaveis) &&
      verificarRespostasCategoria(elementosLazer, respostasLazer)
    ) {
      $('#feedbackPositivoModal').modal('show');
      $('#audio-correto')[0].play();
    } else {
      $('#feedbackNegativoModal').modal('show');
      $('#audio-incorreto')[0].play();
    }
  }

  function verificarRespostasCategoria(elementos, respostas) {
    return respostas.every(function (resposta) {
      return elementos.includes(resposta);
    });
  }

});

function audioClick() {
  $('.som-clique').on('click', function () {
    $('#somBotao')[0].play();
  });
}