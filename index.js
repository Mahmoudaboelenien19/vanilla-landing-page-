mainImg = document.querySelector(".album .main img");
top = document.querySelector(".album .top ");
topImgs = document.querySelectorAll(".album .top img");
bottom = document.querySelector(".album .bottom");
bottomImgs = document.querySelectorAll(".album .bottom img");
upBtn = document.querySelector(".up-btn button")
nav = document.querySelector("nav")



imgs = [...topImgs, ...bottomImgs];
console.log(imgs);
if (localStorage.getItem("srcActive")) {
  mainImg.src = localStorage.getItem("srcActive");
  addActive(localStorage.getItem("srcActive"));
} else {
  mainImg.src = "images/creative4.jpg";
  addImgsToLocal(mainImg.src);
}

function f1(x) {
  mainImg.src = x;
  addImgsToLocal(x);
}
function mouseover(x) {
  mainImg.src = x;
  addImgsToLocal(x);
}

function addImgsToLocal(src) {
  localStorage.setItem("srcActive", src);
  addActive(src);
}

// function addActive(x) {
//   for (i = 0; i < imgs.length; i++) {
//     imgs[i].style.opacity = 0.4;
//     if (imgs[i].src == x) {
//       imgs[i].style.opacity = 1;
//     }
//   }
// }

function addActive(x) {
  imgs.forEach((e) =>
    e.src == x ? (e.style.opacity = 1) : (e.style.opacity = 0.4)
  );
}

upBtn.style.display = "none"


onscroll = function () {

  scrollY > 500 ? upBtn.style.display = "block" : upBtn.style.display = "none";
  nav.onmouseover = () => nav.style.opacity = 1;
  nav.onmouseleave = () => nav.style.opacity = .4;

  scrollY > 150 ? nav.style.opacity = .4 : nav.style.opacity = 1;
}
upBtn.onclick = function () {
  scrollTo({
    top: 0,
    right: 0,
    behaviour: "smooth"

  })
}
