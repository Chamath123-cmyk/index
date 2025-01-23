
const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signUp');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})

signInButton.addEventListener('click',function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})


const cut=document.getElementById('cut');
const cutForm = document.getElementById('cutForm');
cut.addEventListener('click',function(){
    cutForm.style.display="none";
})
