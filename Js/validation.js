const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const btn = document.getElementsByClassName('btn')[0];
let nameover = document.getElementsByClassName("overlap-name")[0]
let emailover = document.getElementsByClassName("overlap-email")[0]
let phoneover = document.getElementsByClassName("overlap-phone")[0]
let wrapper = document.getElementsByClassName("wrapper")[0];
let captcha = document.querySelector('.captchaInp input');
let message = document.querySelector('.details textarea');
let nameCorrect = false;
let emailCorrect = false;
let phoneCorrect = false;

function nameError(){
    let regex = /^[A-Z][a-z]*\s[A-Z][a-z]+/;
    if(name.value === ""){
        nameover.innerHTML = "Name Can't be empty";
        nameover.classList.add('active');
        setTimeout(() => {
            nameover.classList.remove('active');
        }, 2500);
        return true;
    }
    else if(!name.value.match(regex)){
        nameover.innerHTML = "Name will be 'Firstname Surname'";
        nameover.classList.add('active');
        setTimeout(() => {
            nameover.classList.remove('active');
        }, 2500);
        return true;
    }
    else{
        return false;
    }
}
function emailError(){
    let regex = /^[A-Za-z0-9]*@[a-z]*\.[A-Za-z]{2,4}$/;
    if(email.value === ""){
        emailover.innerHTML = "Email Can't be empty";
        emailover.classList.add('active');
        setTimeout(() => {
            emailover.classList.remove('active');
        }, 2500);
        return true;
    }
    else if(!email.value.match(regex)){
        emailover.innerHTML = "Email is Invalid";
        emailover.classList.add('active');
        setTimeout(() => {
            emailover.classList.remove('active');
        }, 2500);
        return true;
    }
    else {
        return false;
    }
}
function phoneError(){
    let regex = /[0-9]{10}/;
    if(phone.value === ""){
        phoneover.innerHTML = "Phone No Can't be empty";
        phoneover.classList.add('active');
        setTimeout(() => {
            phoneover.classList.remove('active');
        }, 2500);
        return true;
    }
    else if(!phone.value.match(regex)){
        phoneover.innerHTML = "Phone No will be of 10 digit";
        phoneover.classList.add('active');
        setTimeout(() => {
            phoneover.classList.remove('active');
        }, 2500);
        return true;
    }
    else {
        return false;
    }
}
function Submit(){
    wrapper.style.display = "block";
    setTimeout(() => {
        wrapper.style.display = "none";
    }, 4000);
    name.value = ""
    email.value = ""
    phone.value = ""
    captcha.value = ""
    message.value = ""
}

name.addEventListener('blur',()=>{
    nameCorrect = nameError();
})
email.addEventListener('blur',()=>{
    emailCorrect = emailError();
})
phone.addEventListener('blur',()=>{
    phoneCorrect = phoneError();
})

btn.addEventListener('click',()=>{
    if(captcha.value != captchaVal){
        let captchaover = document.getElementsByClassName("overlap-captcha")[0];
        captchaover.innerHTML = "Captcha Not Matched";
        captchaover.classList.add('active');
        setTimeout(() => {
            captchaover.classList.remove('active');
        }, 2500);
    }
    if(nameCorrect || emailCorrect || phoneCorrect){
        nameCorrect = nameError(); 
        emailCorrect = emailError(); 
        phoneCorrect = phoneError();
    }
    if((captcha.value === captchaVal) && (!nameCorrect) && (!emailCorrect) && (!phoneCorrect)){
        Submit();    
    }
})