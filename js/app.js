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
        var layer = $(".cake").children().eq(i);
        var colorBar = $(".colours").find("div").eq(i);
        console.log(i);
        console.log("plus");
        console.log(layer);
        console.log(colorBar);
        layer.show();
        colorBar.show();
        i--;
      }
      else {
        console.log("DUPA+");
        console.log(i);
      }
    });
  $(".remove_layer_button").on("click", function(){
    if ((i>=0)&&(i<3)){
      var layer = $(".cake").children().eq(i);
      var colorBar = $(".colours").find("div").eq(i);
      console.log(i);
      console.log("minus");
      console.log(layer);
      console.log(colorBar);
      layer.hide();
      colorBar.hide();
      i++;
    }
    else{
      console.log("DUPA-");
      console.log(i);
    }
  });
}

addRemoveLayer();

});
