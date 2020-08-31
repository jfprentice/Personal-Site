pageLoad();


function pageLoad(){
  $(document).ready(function(){
    $("h1.hidden").fadeIn(2000);
    setTimeout(function(){
      $("hr.hidden").fadeIn(1000);
      setTimeout(function(){
        $("p.hidden").fadeIn(1000);
        setTimeout(function(){
          $(".navbar").fadeIn(1000);
          setTimeout(function(){
            $(".hidden").fadeIn(2000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
}
