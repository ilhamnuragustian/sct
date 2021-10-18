//////////////////////menjalankan preloader//////////////////////
$(document).ready(function(){
   $(".preloader").show().delay(000).fadeOut("slow"); //show homepage setelah 2000ms
});

//////////////////////efek typing//////////////////////
var $el = $('.typing'), txt = $el.text(), txtLen = txt.length, timeOut, char = 0;
$el.text('|');
(function typeIt() {   
    var humanize = Math.round(Math.random() * (200 - 30)) + 30;
    timeOut = setTimeout(function() {
        char++;
        var type = txt.substring(0, char);
        $el.text(type + '|');
        typeIt();

        if (char == txtLen) {
            $el.text($el.text().slice(0, -1)); // remove the '|'
            clearTimeout(timeOut);
        }
    }, humanize);
}());

//////////////////////transparansi ke solid color navbar//////////////////////
$(document).ready(function() {
    $(window).scroll(function() {
        var height = $('.first-container').height();
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= height - 40) {
            $('.nav-container').addClass('solid-nav');
        } else {
            $('.nav-container').removeClass('solid-nav');
        }
    });
});

//////////////////////smooth scroll//////////////////////
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 100, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});

//////////////////////slide up title footer//////////////////////
$(document).ready(function(){
    $(".footer").mouseenter(function(){
      $(".title-footer").slideUp();
      $(".item-footer").addClass('visible').fadeIn();
    });
    $(".footer").mouseleave(function(){
      $(".title-footer").slideDown();
      $(".item-footer").addClass('hidden').removeClass('visible');
    });
});

//////////////////////setting footer sesuai ukuran windows//////////////////////
$(document).ready(function() {
    if ($(window).width() < 960){
      $('.footer').addClass('footer-mobile');
      $(".item-footer").addClass('vivible').removeClass('hidden').removeClass('item-footer');
      $('.title-footer').hide();
    }else{
      $('.footer').addClass('footer-desktop');
    }
});

//////////////////////more collpase//////////////////////
$("#show").click(function(){
  $(".more-subang").show(500).removeClass('hidden');
  $("#hide").show(500).removeClass('none');
  $(this).hide(500);
});

$("#hide").click(function(){
  $(".more-subang").hide(500);
  $("#show").show(500);
  $(this).hide(500);
});

/////////////////animasi card flip///////////////////
$('.card').click(function(){
  $(this).toggleClass('flipped');
}); 


