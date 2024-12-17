
document.querySelectorAll('[window]')
  .forEach(element => makeDraggable(element))

// the logic to make the element draggable
function makeDraggable(element) {
  if (window.innerWidth < 950) return

  const
    handle = element.querySelector('[handle]');

  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  if (handle) handle.onmousedown = mouseDown;

  function mouseDown(e) {
    e.preventDefault();

    // get the cursor position and handle movement
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = stopDragElement;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e.preventDefault();

    // compute the new cursor position
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // set the new position of the element
    element.style.top = (element.offsetTop - pos2) + 'px';
    element.style.left = (element.offsetLeft - pos1) + 'px';
  }

  function stopDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

}
