!function () {
  let aboutEl = document.querySelector('#about')
  let headerEl = document.querySelector('header')
  let navEl = document.querySelector('.nav')
  let activeEL = [...navEl.children]
  let sectionEL = document.querySelectorAll('section')
  console.log(sectionEL)

  let status = false

  activeEL.map((v, i) => {
    v.addEventListener('click', () => {
      activeEL.map((v1) => {
        v1.classList.remove('active')
      })
      v.classList.add('active')
    })
  })

  window.addEventListener('scroll', function () {
    
    let { top } = aboutEl.getBoundingClientRect()
    if (top <= 0) {
      headerEl.classList.add('sticky')
      status = true
    }
    if (top > 0 && status === true) {
      headerEl.classList.remove('sticky')
      activeEL.map((v1) => {
        v1.classList.remove('active')
      })
      activeEL[0].classList.add('active')
      status = false
    }
  })
}.call()
