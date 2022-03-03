const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
  // Abre o menu no evento de "click"
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
}

if (close) {
  // fecha o menu no evento de "click"
  close.addEventListener('click', () => {
    nav.classList.remove('active')
  })
}

// Substituir as imagens grandes pelas pequenas ao clicar nos detalhes do produto.

var MainImg = document.getElementById('MainImg')
var smallimg = document.getElementsByClassName('small-img')

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src
}
smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src
}
smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src
}
smallimg[3].onclick = function () {
  MainImg.src = smallimg[3].src
}
