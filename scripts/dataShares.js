!function () {
  function numAutoPlus(targetEle, options) {
    options = options || {}
    // 获取dom元素
    // if(targetEle.includes(/\./))
    let that = document.querySelectorAll(targetEle)
    // 转化为数组
    let arr = [...that]
    arr.map((v, i) => {
      // 动画时长(毫秒数)
      // 也可以将需要的参数写在dom上如：[data-XXX]
      let time = options.time
      // 最终要显示的数字
      let finalNum = options.num[i]
      // 调节器(毫秒数) 改变数字增加速度
      let rate = options.rate
      // 步长
      let step = finalNum / (time / rate)
      // 计数器
      let count = 0
      // 初始值
      let initNum = 0
      // 定时器
      let timer = setInterval(function () {
        count = Math.floor(count + step)
        v.innerText = count
        if (count >= finalNum) {
          clearInterval(timer)
          v.innerText = finalNum
        }
      }, 30)
    })
  }

  let status = true

  let dataEl = document.querySelector('.data')
  let dataPiece = document.getElementsByClassName('data-piece')
  let arr = [...dataPiece]

  window.addEventListener('scroll', () => {
    let { top, bottom } = dataEl.getBoundingClientRect()
    //判断是否在可见区域
    if (bottom > 0 && top < window.innerHeight - 100 && status) {
      status = false

      arr.forEach((v) => {
        v.style = 'animation: rise 1.5s ease-out forwards'
      })
      
      numAutoPlus('.num', {
        time: 1000,
        rate: 40,
        num: [7979, 283, 1558, 189],
      })
    }
  })
}.call()
