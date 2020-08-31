$(document).ready(function(){
  $("#title").hover(function(){
    $(".navbar").fadeIn();
    setTimeout(function(){
      $("h1").fadeIn();
    }, 500);
    setTimeout(function(){
      $("hr").fadeIn();
    }, 250);
    setTimeout(function(){
      $("p").fadeIn();
    }, 500);

  })
});
