import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import {getFirestore, doc,getDoc } from 'firebase/firestore';

const dairyInfo = (request,response)=>{

    const{token,date,month} = request.body;
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
    const firebaseApp=initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp);
    const dairyRef = doc(db,'dairy/'+token);
    const dailyMilkEntriesRef = doc(db,'/dairy/'+token+'/dailyEntries/'+date);
    const monthlyMilkEntriesRef = doc(db ,"/dairy/"+token+"/monthlyEntries/"+month);
    readDoc();
    
    
    async function readDoc(){
        const mySnapshot = await getDoc(dairyRef);
        const mySnapshot2 = await getDoc(dailyMilkEntriesRef);
        const mySnapshot3 = await getDoc(monthlyMilkEntriesRef);
       
        if(mySnapshot.exists() && mySnapshot2.exists() && mySnapshot3.exists()){
            const docData = mySnapshot.data();
            const docData2 = mySnapshot2.data();
            const docData3 = mySnapshot3.data();
         
            // console.log(docData);
            return response .send({
                status :"success",
                code:200,
                data:{
                    Fname: docData.ownerFirstName,
                    dairyName : docData.ownerDairyName,
                    dailyBmilk:docData2.totalBuffMilkQuantity,
                    dailyCmilk:docData2.totalCowMilkQuantity,
                    monthlyBmilk:docData3.totalBuffMilkQuantity,
                    monthlyCmilk:docData3.totalCowMilkQuantity,
                },
            });
        }

        if(mySnapshot.exists() && !mySnapshot2.exists() && !mySnapshot3.exists())
        {
            const docData = mySnapshot.data();

            return response .send({
                status :"success",
                code:200,
                data:{
                    Fname: docData.ownerFirstName,
                    dairyName : docData.ownerDairyName,
                    dailyBmilk:0,
                    dailyCmilk:0,
                    monthlyBmilk:0,
                    monthlyCmilk:0,
                },
            });
        }

        if(mySnapshot.exists() && !mySnapshot2.exists() && mySnapshot3.exists())
        {
            const docData = mySnapshot.data();
            const docData3 = mySnapshot3.data();

            return response .send({
                status :"success",
                code:200,
                data:{
                    Fname: docData.ownerFirstName,
                    dairyName : docData.ownerDairyName,
                    dailyBmilk:0,
                    dailyCmilk:0,
                    monthlyBmilk:docData3.totalBuffMilkQuantity,
                    monthlyCmilk:docData3.totalCowMilkQuantity,
                },
            });
        }

        if(mySnapshot.exists() && mySnapshot2.exists() && !mySnapshot3.exists())
        {
            const docData = mySnapshot.data();
            const docData2 = mySnapshot2.data();

            return response .send({
                status :"success",
                code:200,
                data:{
                    Fname: docData.ownerFirstName,
                    dairyName : docData.ownerDairyName,
                    dailyBmilk:docData2.totalBuffMilkQuantity,
                    dailyCmilk:docData2.totalCowMilkQuantity,
                    monthlyBmilk:0,
                    monthlyCmilk:0,
                },
            });
        }
       
    }

    
 
}

export {dairyInfo};