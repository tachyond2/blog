const accs = document.getElementByClassName('accordion')

/* classList property add/remove/replace/toggle */

for (const acc of acc) {
  acc.onClick = function () {
    this.classList.toggle('active')
    const panel = this.nextElementSibling
    if (panel.style.display === 'block') {
      panel.style.display = 'none'
    } else {
      panel.style.display = 'block'
    }
  }
}
