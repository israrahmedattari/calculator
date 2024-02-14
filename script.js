let btns = document.querySelectorAll("button");
let equal = document.querySelector("#equal");
let AC = document.querySelector("#ac");
let cube = document.querySelector("#cube");
let sqr = document.querySelector("#sqr");
let clear = document.querySelector("#clear");
let pi = document.querySelector("#pi");
let sqroot = document.querySelector("#sqroot");
let log = document.querySelector("#log");
let per  = document.querySelector("#per");

 btns.forEach( (button)=>{
 
  button.addEventListener("click" , ()=>{
  let val = button.value;
   document.getElementById("input-screen").innerText +=val;
    })
  })

  equal.addEventListener("click",()=>{
    let resval =document.getElementById("input-screen").innerText;
    document.getElementById("result").innerText = eval(resval);
  })
AC.addEventListener("click", ()=>{
   document.getElementById("input-screen").innerText = "";
   document.getElementById("result").innerText = "";
})


cube.addEventListener("click", ()=>{
  let resval =document.getElementById("input-screen").innerText;
  document.getElementById("result").innerText = eval(resval*resval*resval);
})

sqr.addEventListener("click", ()=>{
  let resval =document.getElementById("input-screen").innerText;
  document.getElementById("result").innerText = eval(resval*resval);
})

pi.addEventListener("click" , ()=>{
  let resval =document.getElementById("input-screen").innerText;
 if(resval===""){
  document.getElementById("result").innerText = eval(Math.PI);
 }else{
  document.getElementById("result").innerText = eval(resval*Math.PI);
 }
})

sqroot.addEventListener("click", ()=>{
  let resval =document.getElementById("input-screen").innerText;
  document.getElementById("result").innerText = eval(Math.sqrt(resval));

})

log.addEventListener("click" , ()=>{
  let resval =document.getElementById("input-screen").innerText;
  document.getElementById("result").innerText = eval(Math.log(resval));
})

per.addEventListener("click" , ()=>{
  let resval =document.getElementById("input-screen").innerText;
  document.getElementById("result").innerText = eval(resval)*100 +"%";
})



 
 