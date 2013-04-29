 // Animation Function
function an_jumprope() {
    var frameWidth = 510;
    var frameHeight = 300;
    var frames = 7;
    var frame = 0;
    var div = document.getElementById("an_jumprope");
    setInterval(function () {
        var frameOffset = (++frame % frames) * -frameWidth;
        div.style.backgroundPosition = frameOffset + "px " + " 0px";
    }, 140);
}

// firing off animation
//$("#an_jumprope").load(an_jumprope());

$(function(){
  $("#an_jumprope").jBlitter({
    'resource':'./img/an_jumprope.png',
    'speed':100,
    'frameWidth':510,
    'frameHeight':300,
    'reverse':false,
    'loop':true,
    });
});