let myname=document.getElementById("myname");
let pass=document.getElementById("pass");
let email=document.getElementById("email");
let jump=document.getElementById("jump");
let clicked=document.getElementById("clicked");
jump.addEventListener("click",()=>{
    localStorage.setItem("myname",myname.value);
    localStorage.setItem("password",pass.value);
    localStorage.setItem("email",email.value);
});