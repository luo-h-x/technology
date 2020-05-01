!function () {
  let projectImages = document.querySelector('#project-images')

  //获取页面宽高
  let wspace = document.body.scrollWidth
  let hspace = document.body.scrollHeight

  //transform的步长
  let stepX = wspace / 40
  let stepY = hspace / 35
  let stepZ = 0
  let px = 'px'

  //transform的距离
  let transformImges = [
    [-2 * stepX + px, -2 * stepY + px, '0px'],
    [-stepX + px, -stepY + px, '0px'],
    ['0px', '0px', '0px'],
    [stepX + px, stepY + px, '0px'],
    [2 * stepX + px, 2 * stepY + px, '0px'],
  ]

  //鼠标移入时transform的距离
  let transformImges1 = [
    [-2 * stepX + px, -2 * stepY - stepY + px, '0px'],
    [-stepX + px, -stepY - stepY + px, '0px'],
    ['0px', -stepY + px, '0px'],
    [stepX + px, stepY - stepY + px, '0px'],
    [2 * stepX + px, 2 * stepY - stepY + px, '0px'],
  ]

  let arrImgs = [...projectImages.children]

  //添加事件
  arrImgs.map((v, i) => {
    v.addEventListener('mouseenter', function () {
      v.style = 'transform: translate3d(' + transformImges1[i] + ')'
    })

    v.addEventListener('mouseleave', function () {
      v.style = 'transform: translate3d(' + transformImges[i] + ')'
    })
  })

  arrImgs.map((v, i) => {
    projectImages.children[i].style.setProperty(
      'transform',
      'translate3d(' + transformImges[i] + ')'
    )
  })

  window.addEventListener('scroll', () => {
    let { top, bottom } = projectImages.getBoundingClientRect()
    //判断是否在可见区域
    if (
      bottom > 0 &&
      top < window.innerHeight - projectImages.clientHeight / 2
    ) {
      arrImgs.map((v, i) => {
        projectImages.children[i].style.setProperty(
          'transform',
          'translate3d(' + transformImges[i] + ')'
        )
      })
    }
    if (
      top > window.innerHeight - projectImages.clientHeight / 2 ||
      bottom < 50
    ) {
      arrImgs.map((v, i) => {
        projectImages.children[i].style = ''
      })
    }
  })
}.call()
