import { trailLogin } from "../api/loginData.js";
export function setLoginForm(){

const loginForm = document.querySelector('.login-form');
const email=document.getElementById('exampleInputEmail1');
const password = document.getElementById('exampleInputPassword1');



console.log(loginForm);


loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    let loginInfo={
        ownerEmail : email.value,
        ownerPassword : password.value,
    };
    console.log(loginInfo);

    trailLogin(loginInfo);
})

}