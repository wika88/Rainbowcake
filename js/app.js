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


// var isAnimationRunning = false;

function addRemoveLayer(){
  var i = 0;
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
        // layer.show();
        // layer.parent().css("height", "newHeight");
        colorBar.show();
        layer.parent().animate({
          height: newHeight
        },1000, "swing", function(){
          console.log("complete");
            layer.show();
        });
        i--;
      }
      else {
        console.log("klops+");
        console.log(i);
      }
    });
  // if(isAnimationRunning === false){
    $(".remove_layer_button").on("click", function(){

        if ((i>=0)&&(i<3)){
          // isAnimationRunning = true;
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
          // layer.hide();
          layer.hide();
          colorBar.hide();
          layer.parent().animate({
            height: newHeight
          },1000, "swing", function(){
            console.log("complete");
          });
          i++;
        }
        else{
          console.log("klops-");
          console.log(i);
        }
      });
    // isAnimationRunning = false;
  // }
}

addRemoveLayer();



// blokowanie buttona
// var pushNextButton = function(){
//     console.log("przod");
//
//     if(isAnimationRunning === false){
//
//       if (index < 7){
//         index++;
//       } else {
//         index = 1;
//       }
//       console.log(index);
//       isAnimationRunning = true,
//
//       ulElement.animate({
//           left: -pictureWidth*index
//       }, 500, function() {
//          isAnimationRunning = false;
//          if(index === 7) {
//            ulElement.css('left', '-400px');
//            console.log('complete');
//            index = 1;
//          }
//       });
//       isAnimationRunning = true;
//     }
//   }





});
