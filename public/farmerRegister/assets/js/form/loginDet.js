import{trailuserReg} from '../api/userReg.js';
export function getlogin(){
    const loginForm = document.querySelector('#userLogin');
    const Fname = document.getElementById("firstname");
    const Lname = document.getElementById("lastname");
    const Aadhar = document.getElementById("aadhar");
    const phone = document.getElementById("phone");

    const firebaseConfig = {
        apiKey: "AIzaSyCB2aj0AM2DCI9ZsgrSIeSm-SqxuDg2TQg",
        authDomain: "dsmp2022-bceb9.firebaseapp.com",
        projectId: "dsmp2022-bceb9",
        storageBucket: "dsmp2022-bceb9.appspot.com",
        messagingSenderId: "367344091480",
        appId: "1:367344091480:web:f450f90491b573b751e52d",
        measurementId: "G-96TCPMYK50"
    };
    firebase.initializeApp(firebaseConfig);
    render();
    function render(){
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        recaptchaVerifier.render();
       
    }
    
  
    // const appVerifier = window.recaptchaVerifier;
    // console.log(appVerifier);
   
    loginForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        let userLogInfo={
            userFname: Fname.value,
            userLname: Lname.value,
            userAadhar: Aadhar.value,
            userPhone: phone.value,
            appVerifier: window.recaptchaVerifier,
        };

        console.log(userLogInfo);

        trailuserReg(userLogInfo);

    })

}