var slider=document.getElementsById('myRange');
var output=document.getElementById('');
output.=slider.value;
slider.oninput=function(){
  output.=this.value;
}
