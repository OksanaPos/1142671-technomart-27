var popup = document.querySelector(".modal");
var link = document.querySelector(".popup-link");
var body = document.body
var form = popup.querySelector("form");
if (form) {
  var login = form.querySelector("input");
var loginStore = document.querySelector(".login-store");
var storage = localStorage.getItem("login");
}


var mapLink=document.querySelector(".map");
var mapPopup=document.querySelector(".modal-map");
// var mapClose=mapPopup.querySelector(".close-btn");

link.addEventListener("click",function(evt){
  evt.preventDefault();
  body.classList.add("modal-show");
 if (login) {
  login.focus();
 }


  if(storage){
    login.value=storage;
  }
});

window.onload = function() {
  loginStore.innerText = storage;
};


var elementsClose = document.querySelectorAll(".close-btn");
console.log(elementsClose);
for (var i = 0; i < elementsClose.length; i++) {
  elementsClose[i].onclick = function(){
  body.classList.remove("modal-show");
  body.classList.remove("modal-show-feedback");
  popup.classList.remove("modal-error");
  };
}
