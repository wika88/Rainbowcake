$(document).ready(function(){

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

// add or remove layer - JAK TO ZROBIĆ???


function addRemoveLayer(){
  var i = 0;
  $(".add_layer_button").on("click", function(){
    if ((i<=3)&&(i>0)){
        var layer = $(".cake").children().eq(i-1);
        var colorBar = $(".colours").children("div").eq(i-1);
        var layerHeight = parseInt($(".layer_6").css("height"));
        var cakeHeight = parseInt(layer.parent().outerHeight());
        var layerMarginTop = parseInt($(".layer_6").css("margin-top"));
        var newHeight = cakeHeight + layerHeight + layerMarginTop + "px";
        console.log(i);
        console.log("plus");
        console.log(layer);
        console.log(colorBar);
        // layer.show();
        // layer.parent().css("height", "newHeight");

        layer.parent().animate({
          height: newHeight
        },1000, "swing", function(){
          console.log("complete");
            layer.show();
        });
        // layer.slideDown(1000, function(){
        //   $(layer).css("height", layerHeight);
        // });
        // colorBar.show();
        // colorBar.animate({
        //   height: layerHeight
        // }, 1000);
        i--;
      }
      else {
        console.log("klops+");
        console.log(i);
      }
    });
  $(".remove_layer_button").on("click", function(){
    if ((i>=0)&&(i<3)){
      var layer = $(".cake").children().eq(i);
      var colorBar = $(".colours").children("div").eq(i);
      var layerHeight = parseInt($(".layer_6").css("height"));
      var layerMarginTop = parseInt($(".layer_6").css("margin-top"));
      var cakeHeight = parseInt(layer.parent().outerHeight());
      var newHeight = cakeHeight - layerHeight - layerMarginTop + "px";
      console.log(i);
      console.log("minus");
      console.log(layer);
      console.log(colorBar);
      // layer.hide();
      // colorBar.hide();
      layer.parent().animate({
        height: newHeight
      },1000, "swing", function(){
        console.log("complete");
          layer.hide();
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

});
