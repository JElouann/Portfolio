// listener that activates an animation right before the unload of the page
window.addEventListener("beforeunload", function () {
    document.body.classList.add("bodyAnimateOut");
  });