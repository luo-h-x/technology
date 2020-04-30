!function () {
  let leftArrow = document.querySelector('.glide__arrow--left')
  let rightArrow = document.querySelector('.glide__arrow--right')
  let slidesEl = document.querySelector('.glide__slides')

  let index = 0

  leftArrow.addEventListener('click', () => {
    if (index === 1) {
      slidesEl.classList.remove('glide__slide-active')
      slidesEl.classList.add('glide__slide-active1')
      index = 0
    }else {
      slidesEl.classList.remove('glide__slide-active1')
      slidesEl.classList.add('glide__slide-active')
      index = 1
    }

  })

  rightArrow.addEventListener('click', () => {
    if (index === 0) {
      slidesEl.classList.remove('glide__slide-active1')
      slidesEl.classList.add('glide__slide-active')
      index = 1
    }else {
      slidesEl.classList.remove('glide__slide-active')
      slidesEl.classList.add('glide__slide-active1')
      index = 0
    }
  })
}.call()
