$(".text").mouseover(function addBorder() {
    $(this).addClass("borderClass");
});

$(".text").mouseout(function removeBorder() {
    $(this).removeClass("borderClass");
});

$(".text").draggable();
