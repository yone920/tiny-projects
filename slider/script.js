const panels = document.querySelectorAll('.panel')
console.log('panels:', panels)

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClass(panel)
    panel.classList.add('active')
  })
})

function removeActiveClass(panel) {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}