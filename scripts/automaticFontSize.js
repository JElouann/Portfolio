window.addEventListener("load", () => {
    setTimeout(() => {
  const getFontSize = (textLength, gridColumnCount) => {
  const baseSize = 9
  if (textLength >= baseSize) {
    textLength = baseSize - 2
  }
  const fontSize = baseSize - textLength
  return `${fontSize}vw`
}

const titles = document.querySelectorAll('.project-title')

if (!titles) {
  console.warn("Titles .project-title introuvables");
  return; // stop proprement
}
const gridComputedStyle = window.getComputedStyle(document.getElementById('project-grid'));
const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;

titles.forEach(title => {
  title.style.fontSize = getFontSize(title.textContent.length, 10 / gridColumnCount);
})
}, 50)
})