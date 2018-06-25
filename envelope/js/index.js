$(function() {

  var ANIMATION_TIME = 500;
  var envelope = $("#envelope");
  var envelopeUp = $("#envelope-up");
  var card = $('#card');
  var close = $('#close');
  var send = $('#mailit');

  envelope.click(function() {
    if (!$(this).hasClass('flip')) {
      $(this).removeClass('pulse');
      $(this).addClass('flip');
      envelopeUp.fadeOut(ANIMATION_TIME);
      window.setTimeout(function() {
        card.find('h1').hide().fadeIn(300);
        card.css('display', 'block');
      }, ANIMATION_TIME);
    }
  });

  close.click(function(e) {
    card.css('display', 'none');
    envelope.removeClass('flip').addClass('flip-back');
    envelopeUp.fadeIn(ANIMATION_TIME);
    window.setTimeout(function() {
      envelope.removeClass('flip-back');
      envelope.addClass('pulse');
    }, ANIMATION_TIME);
    e.stopPropagation();
  });

  send.click(function(e) {
    card.css('display', 'none');
    envelope.removeClass('flip').addClass('send');
    e.stopPropagation();
  });

});