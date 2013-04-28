 // Animation Function
function an_jumprope() {
    var frameWidth = 510;
    var frameHeight = 300;
    var frames = 8;
    var frame = 0;
    var div = document.getElementById("an_jumprope");
    setInterval(function () {
        var frameOffset = (++frame % frames) * -frameWidth;
        div.style.backgroundPosition = frameOffset + "px " + " 0px";
    }, 140);
}

// firing off animation
$("#an_jumprope").load(an_jumprope());
