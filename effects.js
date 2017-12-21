$(".text").mouseover(function addBorder() {
    $(this).addClass("borderClass");
});

$(".text").mouseout(function removeBorder() {
    $(this).removeClass("borderClass");
});

$(".text").draggable();

//CSS FOR THOUGHTS PAGE
$(".box").mouseover(function addBorder() {
    $(this).addClass("borderClass");
});

$(".box").mouseout(function removeBorder() {
    $(this).removeClass("borderClass");
});
//puts thought boxes in array
var divArray = [];
var highestIndex = 0;
$(".box").each(function () {
    divArray.push($(this));
});
function drag() {
    for (var i = 0; i<divArray.length; i++) {
      divArray[i].draggable({
        stack: "div",
        distance: 0});
  };
};
function generateRandom() {
    var num = Math.floor(Math.random()*60);
    return num;
};
//randomizes how the boxes appear
function randomnize() {
    for (var i = 0; i < divArray.length; i++){
      var left = generateRandom();
      var top = generateRandom();
      var index = Math.floor(Math.random()*divArray.length+1);
      if (index >= highestIndex) {
        highestIndex = index;
      };
      divArray[i].css({
        "position": "absolute", "top": top+"vh", "left": left+"vw", "zIndex": index
    });
  };
};

$(document).ready(randomnize);
$(document).ready(drag);
