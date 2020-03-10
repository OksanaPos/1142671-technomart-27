
var popup = document.querySelector(".modal");
var link = document.querySelector(".popup-link");
var close=document.querySelector(".close-btn");
var body = document.body
var form=popup.querySelector("form");
var login=popup.querySelector("[name=modal-login-title]");
var storage=localStorage.getItem("login");

var mapLink=document.querySelector(".map");
var mapPopup=document.querySelector(".modal-map");
var mapClose=mapPopup.querySelector(".close-btn");

link.addEventListener("click",function(evt){
  evt.preventDefault();
  body.classList.add("modal-show");
  
  if(storage){
    login.value=storage;
  }
});


close.addEventListener("click",function(evt){
  evt.preventDefault();
  body.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit",function(evt)){
  if(!login.value){
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth=popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести логин");
  }else {
    localStorage.setItem("login",login.value);
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
