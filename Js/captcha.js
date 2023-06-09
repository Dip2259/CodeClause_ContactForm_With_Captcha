const captcha = document.getElementsByClassName('captcha')[0];
const refresh = document.getElementsByClassName('refresh')[0];
var captchaVal = ""
const fonts = ['sansarif', 'cursive', 'serif', 'Fira Sans']
function generateCaptcha(){
    let uniquechar = "";
    const randomchar = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$&";
    for (let i = 1; i < 6; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
    captchaVal = uniquechar;
}
function setCaptcha(){
    let text = ""
    captchaVal.split("").forEach((char)=>{
        let rotate = -20 + Math.trunc(Math.random()*30);
        let font = Math.trunc(Math.random()*fonts.length);
        text += `<span
         style = "transform: rotate(${rotate}deg);
         font-family: ${fonts[font]}"
        >${char}</span>`
    })
    captcha.innerHTML = text; 
}
window.onload = init();
function init(){
    generateCaptcha();
    setCaptcha();
};
refresh.addEventListener('click',()=>{
    init();
})