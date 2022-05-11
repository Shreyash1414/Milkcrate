import { request } from "express";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword,RecaptchaVerifier ,signInWithPhoneNumber} from 'firebase/auth';

const farmerReg=(request,response)=>{

        // console.log(request.body);

        const{ userFname,userLname,userAadhar,userPhone,appVerifier}=request.body;
        const phoneNumber = "+91"+userPhone;

        // console.log(phone);

           
    // firebase config
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional   
    const firebaseConfig = {
        apiKey: "AIzaSyCB2aj0AM2DCI9ZsgrSIeSm-SqxuDg2TQg",
        authDomain: "dsmp2022-bceb9.firebaseapp.com",
        projectId: "dsmp2022-bceb9",
        storageBucket: "dsmp2022-bceb9.appspot.com",
        messagingSenderId: "367344091480",
        appId: "1:367344091480:web:f450f90491b573b751e52d",
        measurementId: "G-96TCPMYK50"
    };
    const firebaseApp=initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log(error);
    });

     

}

export{farmerReg};