
import { initializeApp } from 'firebase/app';
import {getFirestore, doc,getDoc } from 'firebase/firestore';

const getNumberInfo=(request , response)=>{
    const{dId,number}=request.body;
    console.log(request.body);

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
    try{
    const phoneNumer = "+91"+number;
    const firebaseApp=initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp);
    const numRef =doc(db ,"/phoneNum/"+phoneNumer);
    readDoc();
    
    async function readDoc(){
        const mySnapshot = await getDoc(numRef);
        if(mySnapshot.exists()){
            const docData = mySnapshot.data();
            if(docData.dairyId!=dId)
            {
                return response.send({
                    status :"failure",
                    code:400,
                });
            }
            // console.log(docData);
            return response .send({
                status :"success",
                code:200,
                data:{
                    fId:docData.useruid,
                    dId:docData.dairyId,
                },
            });
        }
        else{
            console.log("No data");
            return response.send({
                status :"failure",
                code:400,
            });
        }
    }
    }catch{
        console.log(error);
    }

}

export {getNumberInfo};