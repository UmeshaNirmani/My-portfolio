//onscroll event
window.addEventListener("scroll", funReveal);

function funReveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// counter
const counters = document.querySelectorAll(".counter");
const speed = 1000;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const cnt = +counter.innerText;

    const inc = target / speed;

    console.log(cnt);

    if (cnt < target) {
      counter.innerText = Math.ceil(cnt + inc);
      setTimeout(updateCount, 10);
    } else {
      cnt.innerText = target;
    }
  };
  updateCount();
});

//popup window animation
document.getElementById("btn1").addEventListener("click", function () {
  document.getElementsByClassName("slider")[0].classList.add("active");
});

document.getElementById("close").addEventListener("click", function () {
  document.getElementsByClassName("slider")[0].classList.remove("active");
});
