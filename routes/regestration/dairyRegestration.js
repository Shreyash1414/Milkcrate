// Imports
import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import {collection, getFirestore, setDoc,doc,getDocs,addDoc} from 'firebase/firestore';

import{getAuth, initializeAuth,createUserWithEmailAndPassword,sendEmailVerification,onAuthStateChanged} from 'firebase/auth';


const dairyRegestration=(request,response)=> {
        
        const {ownerFirstName,ownerLastName,ownerAadharNumber,ownerGender,ownerAge,ownerPhoneNumber,ownerAltNumber,ownerDairyName,ownerDairyLocation,ownerTaluka,ownerDistrict,accEmail,accPass,accConfPass }=request.body;
        

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

        // initialize Firebase app
        const firebaseApp=initializeApp(firebaseConfig);

        // init services
        const auth = getAuth(firebaseApp);
        const db = getFirestore(firebaseApp);
        const email=accEmail;
        const password=accPass;

        
        
        
        // authentication
        createUserWithEmailAndPassword(auth,email,password).then((cred)=>{
            
            // // console.log(cred.user);
            // sendEmailVerification(cred.user)
            // .then(() => {
            // // Email verification sent!
            // // ...
            //     // window.alert("Verification link has been sent to the Email");
            //     console.log("Verification link has been sent to the Email");
            //     console.log(cred.user.emailVerified);

              
                
                
            //  });
             
           
            // while(cred.user.emailVerified!=true)
            // {
            //     continue;
            // }
            // if(cred.user.emailVerified==true)
            // {
            //     console.log("Hello");
            // }
            // console.log(cred.user.emailVerified);

            //  console.log(cred.user); 

            
            // get collection ref
            const dairyRef = doc(db,'dairy/'+cred.user.uid) ;
         
            setDoc(dairyRef,request.body)
            .then(()=>{
                console.log("Account Created");
            });
          
        }).catch((err)=>{
            var errorMsg = err.message;
            if(errorMsg=="Firebase: Error (auth/email-already-in-use).")
            {
                console.log("User already exists");
            }
            
        });

                
};

export {dairyRegestration};