import { initializeApp } from 'firebase/app';
import {getFirestore, doc,getDoc } from 'firebase/firestore';
const FarmerProfile = (request,response)=>{
    const{farmerId , dairyId}=request.body;

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
    const farmerRef = doc(db,"/dairy/"+dairyId+"/farmers/"+farmerId);
    const dairyRef = doc(db ,"/dairy/"+dairyId);

    readDoc();
    
    async function readDoc(){
         const mySnapshot = await getDoc(farmerRef);
         const mySnapshot2 = await getDoc(dairyRef);
         if(mySnapshot.exists()&& mySnapshot2.exists()){
             const docData = mySnapshot.data();
             const docData2 = mySnapshot2.data();
             return response .send({
                 status :"success",
                 code:200,
                 data:{
                     dairyName: docData2.ownerDairyName,
                     Fname: docData.userFname,
                     Lname:docData.userLname,
                     phoneNumber: docData.userPhone,
                     aadharNo:docData.userAadhar,
 
                 },
             });
         }
    }
}

export{FarmerProfile};