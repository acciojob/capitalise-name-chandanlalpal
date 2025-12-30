//your JS code here. If required.
 let input = document.querySelector("#fname");

input.addEventListener("blur",(e)=>{
  console.log(e.target.value.toUpperCase());
})