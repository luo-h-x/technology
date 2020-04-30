!function () {

  let leftArrow = document.querySelector('.glide__arrow--left') 
  let rightArrow = document.querySelector('.glide__arrow--right') 
  let slidesEl = document.querySelector('.glide__slides')
  // let slideW = window.innerWidth


  leftArrow.addEventListener( 'click', () => {
    // slidesEl[0].style = 'transform: translate3d('+ -slideW +'px, 0px, 0px); margin-left: 18px;'
    slidesEl.classList.remove('glide__slide-active')
  })

  rightArrow.addEventListener( 'click', () => {
    // slidesEl[0].style = 'transform: translate3d(0px, 0px, 0px)'
    slidesEl.classList.add('glide__slide-active')
  })

}.call()