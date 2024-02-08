const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
buttons.forEach((button)=>{
button.addEventListener("click",function(e){
  const color = e.target.id;
  body.style.backgroundColor=color;
  // if(e.target.id=="grey"){
  //   body.style.backgroundColor=`${e.target.id}`
  // }
  // if(e.target.id=="yellow"){
  //   body.style.backgroundColor=`${e.target.id}`
  // }
  // if(e.target.id=="white"){
  //   body.style.backgroundColor=`${e.target.id}`
  // }
  // if(e.target.id=="blue"){
  //   body.style.backgroundColor=`${e.target.id}`
  // }
})
})