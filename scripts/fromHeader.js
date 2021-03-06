!function () {
  let aboutEl = document.querySelector("#about");
  let headerEl = document.querySelector("header");
  let navEl = document.querySelector(".nav");
  let activeEl = [...navEl.children];
  let showcaseEl = document.querySelector("#showcase");
  let teamEl = document.querySelector("#team");
  let dataEl = document.querySelector("#data");
  let sections = document.querySelectorAll("section");
  let homeEl = document.getElementById("home");
  let scrollArr = [homeEl, ...sections];

  let status = false;

  activeEl.map((v, i) => {
    v.addEventListener("click", () => {
      scrollArr[i].scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.addEventListener("scroll", function (e) {
    
    let teamTop = teamEl.getBoundingClientRect().top;

    let showcaseTop = showcaseEl.getBoundingClientRect().top;

    let aboutTop = aboutEl.getBoundingClientRect().top;

    let dataTop = dataEl.getBoundingClientRect().top;

    if (aboutTop <= 0 && !status) {
      headerEl.classList.add("sticky");
      status = true;
    }
    if (aboutTop <= 72 && !activeEl[1].classList.value ) {
      console.log(!activeEl[1].classList.value);
      
      activeEl.map((v1) => {
        v1.classList.remove("active");
      });
      activeEl[1].classList.add("active");
    }
    if (showcaseTop <= 72 && !activeEl[2].classList.value ) {
      activeEl.map((v1) => {
        v1.classList.remove("active");
      });
      activeEl[2].classList.add("active");
    }
    if (teamTop <= 72 && !activeEl[3].classList.value ) {
      activeEl.map((v1) => {
        v1.classList.remove("active");
      });
      activeEl[3].classList.add("active");
    }
    if (dataTop <= 72 && !activeEl[4].classList.value ) {
      activeEl.map((v1) => {
        v1.classList.remove("active");
      });
      activeEl[4].classList.add("active");
    }
    if (aboutTop > 200 && status) {
      headerEl.classList.remove("sticky");
      activeEl.map((v1) => {
        v1.classList.remove("active");
      });
      activeEl[0].classList.add("active");
      status = false;
    }
  });
}.call();
