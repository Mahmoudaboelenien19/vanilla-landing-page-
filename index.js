const mainImg = document.querySelector( ".album .main img" );
const topImgs = document.querySelectorAll( ".album .top img" );
const bottom = document.querySelector( ".album .bottom" );
const bottomImgs = document.querySelectorAll( ".album .bottom img" );
const upBtn = document.querySelector( "#up-btn" );
const nav = document.querySelector( "nav" );



const imgs = [...topImgs, ...bottomImgs];

if ( localStorage.getItem( "srcActive" ) ) {
  mainImg.src = localStorage.getItem( "srcActive" );
  addActive( localStorage.getItem( "srcActive" ) );
} else {
  mainImg.src = "images/creative4.jpg";
  addImgsToLocal( mainImg.src );
}

function f1 ( x ) {
  mainImg.src = x;
  addImgsToLocal( x );
}
function mouseover ( x ) {
  mainImg.src = x;
  addImgsToLocal( x );
}

function addImgsToLocal ( src ) {
  localStorage.setItem( "srcActive", src );
  addActive( src );
}

// function addActive(x) {
//   for (i = 0; i < imgs.length; i++) {
//     imgs[i].style.opacity = 0.4;
//     if (imgs[i].src == x) {
//       imgs[i].style.opacity = 1;
//     }
//   }
// }

function addActive ( x ) {
  imgs.forEach( ( e ) =>
    e.src == x ? ( e.style.opacity = 1 ) : ( e.style.opacity = 0.4 )
  );
}




onscroll = function () {

  scrollY > 500 ? upBtn.classList.remove( "hide" ) : upBtn.classList.add( "hide" );
  nav.onmouseover = () => nav.style.opacity = 1;
  nav.onmouseleave = () => nav.style.opacity = .4;

  scrollY > 150 ? nav.style.opacity = .4 : nav.style.opacity = 1;
};
upBtn.onclick = function () {
  scrollTo( {
    top: 0,
    right: 0,
    behaviour: "smooth"

  } );
};
