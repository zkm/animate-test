// Animation Function
function an_jumprope() {
    const frameWidth = 510;
    const frames = 7;
    let frame = 0;
    const div = document.getElementById("an_jumprope");
    function animate() {
      const frameOffset = (++frame % frames) * -frameWidth;
      div.style.backgroundPosition = `${frameOffset}px 0px`;
      requestAnimationFrame(animate);
    }
    animate();
  }
  
  // firing off animation
  an_jumprope();
  
  $(function () {
    $("#an_jumprope").jBlitter({
      resource: "./img/an_jumprope.png",
      speed: 100,
      frameWidth: 510,
      frameHeight: 300,
      reverse: false,
      loop: true,
    });
  });
  