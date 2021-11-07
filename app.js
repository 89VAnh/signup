var $ = document.querySelector(".form");
var inputs = document.querySelectorAll(".form input");
inputs.forEach(function (input) {
  var lable = input.parentElement.children[0];
  input.onkeydown = function () {
    lable.classList.add("active");
  };
  input.onblur = function () {
    if (input.value === "") {
      lable.classList.remove("active");
    }
  };
});
function signup() {
  signupTap = document.getElementById("signupTap");
  classSignupTap = signupTap.classList;
  if (!classSignupTap.contains("active")) {
    classSignupTap.add("active");
    document.getElementById("loginTap").classList.remove("active");
    document.getElementById("signup").style.display = "block";
    document.getElementById("login").style.display = "none";
  }
}
function login() {
  loginTap = document.getElementById("loginTap");
  classloginTap = loginTap.classList;
  if (!classloginTap.contains("active")) {
    classloginTap.add("active");
    document.getElementById("signupTap").classList.remove("active");
    document.getElementById("login").style.display = "block";
    document.getElementById("signup").style.display = "none";
  }
}
// });

// document.querySelector(".tab a").addEventListener("click", function (e) {
//   e.preventDefault();

//   this.parent().addClass("active");
//   this.parent().siblings().removeClass("active");

//   target = document.querySelector(this).attr("href");

//   document.querySelector(".tab-content > div").not(target).hide();

//   document.querySelector(target).fadeIn(600);
// });
