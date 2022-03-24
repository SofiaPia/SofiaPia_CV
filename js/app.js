/** TYPEWRITER EFFECT **/

var messageArray = ["Sofia Pia"];

var textPosition = 0;

var speed = 100;

typewriter = () => {
  document.querySelector("#message").
  innerHTML = messageArray[0].substring(0, textPosition);

  if(textPosition++ != messageArray[0].lenght)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);


/** LANGUAGES BARS **/
  
  var offsetTop = $('#languages').offset().top;
  
  $(window).scroll(function() {
  var height = $(window).height();
    if($(window).scrollTop()+height > offsetTop) {
      jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
        },2000);
      });
    }
  });
