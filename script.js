const counters = document.querySelectorAll(".counter");
const speed = 10000000000;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const cnt = +counter.innerText;

    const inc = target / speed;

    console.log(cnt);

    if (cnt < target) {
      counter.innerText = Math.ceil(cnt + inc);
      setTimeout(updateCount, 1);
    } else {
      cnt.innerText = target;
    }
  };

  updateCount();
});
