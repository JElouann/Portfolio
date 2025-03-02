// window.transitionToPage = function(href) {
//     document.querySelector('body').style.opacity = 0
//     setTimeout(function() { 
//         window.location.href = href
//     }, 500)
// }

// document.addEventListener('DOMContentLoaded', function(event) {
//     document.querySelector('body').style.opacity = 1
// })

// listener that activates an animation right before the unload of the page
window.addEventListener("beforeunload", function () {
    document.body.classList.add("bodyAnimateOut");
    // document.getElementsByClassName("contentBlock").add("contentBlockAnimateOut");
  });