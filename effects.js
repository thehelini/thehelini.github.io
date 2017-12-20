$(".text").mouseover(function addBorder() {
    $(this).addClass("borderClass");
});

$(".text").mouseout(function removeBorder() {
    $(this).removeClass("borderClass");
});

$(".text").draggable();

//randomizing thought boxes
var divArray = [];
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
function randomnize() {
    for (var i = 0; i < divArray.length; i++){
      var left = generateRandom();
      var top = generateRandom();
      var index = Math.floor(Math.random()*divArray.length+1);
      divArray[i].css({
        "position": "absolute", "top": top+"vh", "left": left+"vw", "zIndex": index
    });
  };
};

$(document).ready(randomnize);
$(document).ready(drag);
