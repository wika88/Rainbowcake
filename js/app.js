$(document).ready(function(){

//snippets - scrolling menu

function scrolling(){
  $('a[href^="#"]').on('click', function(event) {
    console.log("klik");

      var target = $( $(this).attr('href') );
      console.log(target);
      var targetOffsetTop = (target.offset().top - 100) + "px";
      console.log(targetOffsetTop);

      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: targetOffsetTop
          }, 1000);
      }
  });
}

scrolling();

//sticky menu

function stickyMenu(){

  var menu = $(".header_nav");
  var height = parseInt($(".nav_1").css("height"));
  var newHeight =  height*0.5;
  var menuOffset = menu.offset().top;


  $(window).scroll(function(event){

    var position = $(this).scrollTop();

    console.log(menuOffset);
    console.log(newHeight);

    if (position>menuOffset){
      menu.addClass("sticky");
      menu.find("div").css("height", newHeight);
    }
    else {
      menu.removeClass("sticky");
      menu.find("div").css("height", height);
    }
  });
}

stickyMenu();


//header - intro


function showNav(){
  $(".header_nav").find("div").each(function(){
    var navDataColor = $(this).data("color");
    $(this).animate({
      backgroundColor: navDataColor
    }, 3000);
  });
}


function setIntro() {
  $(".header_logo").find("b").each(function(){
    // $(this).css("color", "white");
    var dataColor = $(this).data("color");
    $(this).animate({
      color: "white"
    }, 300, function(){
      showNav();
      $(this).animate({
        color: dataColor
      }, 3000);
    });
  });
}


function showColor($num){
  var dataColor = $(".letter_" + $num).data("color");
  $(".letter_" + $num).animate({ //?
    color: dataColor
  }, 200, function(){
    $num++;
    if($num < 8) {
      showColor($num);
    }
    else {
      setIntro();
    }
  });
}

showColor(1);

// setIntro();

// change cake colour

$(".colours").find("div").each(function(){
  $(this).children().on("click", function(){
    var whichLayer = $(this).parent().data("layer");
    var whichColor = $(this).css("background-color");
    console.log(whichLayer);
    console.log(whichColor);
    $(whichLayer).css("background-color", whichColor);
  });
});

// change number of layers

function addRemoveLayer(){

  var i = 0;

  // adding layer
  $(".add_layer_button").on("click", function(){

    if ((i<=3)&&(i>0)){

      var layer = $(".layers_container").children().eq(i-1);
      var colorBar = $(".colours").children("div").eq(i-1);
      var layerHeight = parseInt($(".layer_6").css("height"));
      var cakeHeight = parseInt(layer.parent().outerHeight());
      var layerMarginTop = parseInt($(".layer_6").css("margin-top"));
      var newHeight = cakeHeight + layerHeight + layerMarginTop + "px";

      console.log(i);
      console.log("plus");
      console.log(layer);
      console.log(colorBar);

      colorBar.fadeIn();

      layer.parent().animate({
        height: newHeight
      },1000, "easeOutElastic", function(){
        console.log("complete");
        layer.slideDown();
      });

      i--;
    }

    else {
      console.log("klops+");
      console.log(i);
    }
  });

  // removing layer
  $(".remove_layer_button").on("click", function(){

      if ((i>=0)&&(i<3)){

        var layer = $(".layers_container").children().eq(i);
        var colorBar = $(".colours").children("div").eq(i);
        var layerHeight = parseInt($(".layer_6").css("height"));
        var layerMarginTop = parseInt($(".layer_6").css("margin-top"));

        var cakeHeight = parseInt(layer.parent().outerHeight());
        layer.parent().css("height", cakeHeight);
        var newHeight = cakeHeight - layerHeight - layerMarginTop + "px";

        console.log(i);
        console.log("minus");
        console.log(layer);
        console.log(colorBar);

        layer.slideUp();
        colorBar.fadeOut();
        // var j = 7;
        // if (j>-1){
        //   colorBar.children().each(function(j){
        //     $(this).eq(j).slideUp(500);
        //   });
        //   j--;
        // }


        layer.parent().animate({
          height: newHeight
        },1000, "easeOutBounce", function(){
          console.log("complete");
        });

        i++;

      }
      else{
        console.log("klops-");
        console.log(i);
      }
  });
}

addRemoveLayer();

//change cake size

function changeSize(){
  $(".size").each(function(){

    //I take diagonal of this circle
    var diagonal = parseInt($(this).css("width"));
    //I take box-shadow
    var boxShadow = $(this).css('boxShadow')

    //I make an array from this box-shadow
    var boxShadowArray = (boxShadow).split(' ');
    console.log("boxShadowArray: " + boxShadowArray);
    //I get "6" element from this array - blur
    var boxShadowArray6 = boxShadowArray[6];
    console.log(boxShadowArray6);

      $(this).on("mouseenter", function(){

        //I make new Diagonal
        var newDiagonal = diagonal*1.02;

        //I modify "6" element
        var boxShadowArray6Modify = (parseInt(boxShadowArray6)*4 ) + "px";
        //I push new "6" element to box-shadow array
        boxShadowArray[6] = boxShadowArray6Modify;
        //I join to string new box-shadow array
        var newBoxShadowArray= boxShadowArray.join(' ');
        console.log(newBoxShadowArray);

        $(this).children().animate({
          opacity: 100
        }, 500);

        //I push new values to css
        $(this).css({
          width: newDiagonal,
          height: newDiagonal,
          boxShadow: newBoxShadowArray
        });
      });
      $(this).on("mouseleave", function(){

        $(this).css({
          width: diagonal,
          height: diagonal,
          boxShadow: boxShadow
        });
        //
        // $(this).css("width", diagonal);
        // $(this).css("height", diagonal);
        // $(this).css("box-shadow", boxShadow);

        $(this).children().animate({
          opacity: 0
        }, 500);

      });
      $(this).on("click", function(){
        $(this).toggleClass("dimension_border");

        // $(this).children().css("opacity", "100");
      });
  });
}

changeSize();




});
