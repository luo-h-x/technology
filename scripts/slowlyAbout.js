!function () {
  let features = document.querySelector('.features')
  let featuresEL = document.querySelectorAll('.feature')
  let status = true
  window.addEventListener('scroll', () => {
    let { bottom } = features.getBoundingClientRect()

    if (bottom <= window.innerHeight && status) {
      status = false
      featuresEL.forEach((v, i) => {
        setTimeout(() => {
          v.style = ''
          v.classList.add('move-in')
        }, 500 * i)
      })
    }
  })
}.call()
