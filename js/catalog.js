<script>
var popup=document.querySelector(".modal-login");
popup.classList.add("modal-show");
link.addEventListener("click",function(evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
  // console.log("клик по ссылке вход");
});
var close=document.querySelector(".modal-close");

close.addEventListener("click",function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
</script>
