!function () {
  let toTopEl = document.getElementsByClassName('scrollToTop')[0]
  let homeEl = document.getElementById('home')
  console.log(toTopEl,homeEl);
  
  window.addEventListener('scroll', () => {

    let bottom = homeEl.getBoundingClientRect().bottom
    if (bottom <0 ) {
      toTopEl.children[0].style = 'visibility: visible'
    } else {
      toTopEl.children[0].style = 'display: none'
    }
  })

  toTopEl.addEventListener('click', () => {
    homeEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}.call()
