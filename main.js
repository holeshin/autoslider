let containers = document.querySelectorAll(".container div");
let preButton = document.getElementById("pre");
let nextButton = document.getElementById("next");
let width = document.querySelector(".inner").clientWidth;
let count = 0;

document.getElementById("버튼1").addEventListener("click", () => {
  containers.forEach((item) => {
    item.style.transform = `translate(0px)`;
    auto;
  });
});
document.getElementById("버튼2").addEventListener("click", () => {
  containers.forEach((item) => {
    item.style.transform = "translate(-400px)";
    auto;
  });
});
document.getElementById("버튼3").addEventListener("click", () => {
  containers.forEach((item) => {
    item.style.transform = "translate(-800px)";
    auto;
  });
});

preButton.addEventListener("click", () => {
  count--;
  console.log(count);
  render();
  clearInterval(auto);
});

nextButton.addEventListener("click", () => {
  count++;
  console.log(count);
  render();
  clearInterval(auto);
});

//
function render() {
  const nexIf =
    count < containers.length - 1
      ? (nextButton.style.display = "inline")
      : (nextButton.style.display = "none");
  const preIf =
    count > 0
      ? (preButton.style.display = "inline")
      : (preButton.style.display = "none");

  containers.forEach((item) => {
    item.style.transform = `translate(${count * -width}px)`;
  });
}
preButton.style.display = "none";

//자동 슬라이더
function slider() {
  count++;
  if (count == containers.length) {
    count = 0;
  } else if (count < 0) {
    count = containers.length - 1;
  }
  render();
}

let auto = setInterval(slider, 4000);
