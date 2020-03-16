
var popup = document.querySelector(".modal");
var link = document.querySelector(".popup-link");
var close=document.querySelector(".close-btn");
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
  console.log("123")
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


close.addEventListener("click",function(evt){
  evt.preventDefault();
  body.classList.remove("modal-show");
  body.classList.remove("modal-show-feedback");
  popup.classList.remove("modal-error");
});


console.log(login)

form.addEventListener("submit",function(evt){
  if(!login.value){
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth=popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести логин");
  }else {
    loginStore.innerText = login.value
    localStorage.setItem("login",login.value);
    body.classList.remove("modal-show");
}
});

window.addEventListener("Keydown",function(evt){
  if(evt.keyCode===27){
    if(popup.classList.contains("modal-show")){
      evt.preventDefault();
      popup.classList.remove("modal-show")
    }
  }
});
