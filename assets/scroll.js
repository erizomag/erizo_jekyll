$(function() {
  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: 100,
    offset: 50
    })
    .setPin(".container")
    .addTo(controller);

  controller.addScene(scene);

});

// change vertical scroll to horizontal in content
let content: ?HTMLElement = document.querySelector('.sample_container')
window.addEventListener('mousewheel', MouseWheelHandler);

function MouseWheelHandler(e) {
  if(content === undefined) {
    content = document.querySelector('.sample_container')
  } else {
    // $FlowFixMe
    content.scrollLeft += e.deltaY
  }
}
