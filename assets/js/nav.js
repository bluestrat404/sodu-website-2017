function toggleNav() {
  if (jQuery("#mySidenav").css("left") == "-250px") {
    document.getElementById("mySidenav").style.left = "0px";
    // document.getElementById("wrapper").style.left = "250px";
    jQuery(".navbar").css("margin-left","250px");
    jQuery(".nav").css("opacity","0");
  } else {
    document.getElementById("mySidenav").style.left = "-250px";
    // document.getElementById("wrapper").style.left = "0px";
    jQuery(".navbar").css("margin-left","0px");
    jQuery(".nav").css("opacity","1");
  }
}

// if (/iP(ad|hone|od)/.test(navigator.userAgent)) {
//   window.onscroll = function() {
//     document.getElementById('mySidenav').style.top =
//        (0.0212 * (window.pageYOffset + window.innerHeight) - 11.703) + 'px';
//
//       //  element.style.webkitTransform = "translate3d(0, " + window.pageYOffset + "px, 0)";
//   };
// }
