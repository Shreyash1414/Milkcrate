import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import {getFirestore, doc,getDoc } from 'firebase/firestore';

const dairyInfo = (request,response)=>{

    const{token} = request.body;
    console.log(token);


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
    const db = getFirestore(firebaseApp);
    const dairyRef = doc(db,'dairy/'+token) ;
    readDoc();
    
    async function readDoc(){
        const mySnapshot = await getDoc(dairyRef);
        if(mySnapshot.exists()){
            const docData = mySnapshot.data();
            console.log(docData);
            return response .send({
                status :"success",
                code:200,
                data:{
                    Fname: docData.ownerFirstName,
                    dairyName : docData.ownerDairyName,
                },
            });
        }
    }

    
 
}

export {dairyInfo};