import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

const dairyFarmerTransaction = (request, response) => {
  const { dairyId, month } = request.body;

  console.log("month");
  console.log(month);

  // firebase config
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCB2aj0AM2DCI9ZsgrSIeSm-SqxuDg2TQg",
    authDomain: "dsmp2022-bceb9.firebaseapp.com",
    projectId: "dsmp2022-bceb9",
    storageBucket: "dsmp2022-bceb9.appspot.com",
    messagingSenderId: "367344091480",
    appId: "1:367344091480:web:f450f90491b573b751e52d",
    measurementId: "G-96TCPMYK50",
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  
  traildoc();

   
   async function traildoc(){
    var documents = [];
    const querySnapshot = await getDocs(collection(db, "/dairy/"+dairyId+"/farmers"));
    for (const documentSnapshot of querySnapshot.docs) {
      // console.log(querySnapshot.docs);
      // console.log(documentSnapshot.id);
      const docu = documentSnapshot.data();
      // console.log(docu);
      console.log(docu.useruid);
      // const paymentCheckRef = doc(db,"/dairy/"+dairyId+"/farmers/"+docu.useruid+"/farmerMonthlyEntries/5-2022");
        const farmerCheckRef=doc(db,"/dairy/"+dairyId+"/farmers/"+docu.useruid);
        const temp= await checkDoc(paymentCheckRef, docu , farmerCheckRef);
        documents.push(temp);
      
  }
    // querySnapshot.forEach(async docu => {
    //     // doc.data() is never undefined for query doc snapshots
    //     const paymentCheckRef = doc(db,"/dairy/"+dairyId+"/farmers/"+docu.id+"/farmerMonthlyEntries/5-2022");
    //     const farmerCheckRef=doc(db,"/dairy/"+dairyId+"/farmers/"+docu.id);
    //     const temp= await checkDoc(paymentCheckRef, docu , farmerCheckRef);
    //     documents.push(temp);
      
    //   });

   return response.send({
    status :"success",
    code:200,
    documents,
   })
}

async function checkDoc(paymentCheckRef , docu ,farmerCheckRef){
    
    // const mySnapshot3 = await getDoc(paymentCheckRef);
    const mySnapshot4 = await getDoc(farmerCheckRef);
    if( mySnapshot4.exists())
    {
        // const docData3 = mySnapshot3.data();
        const docData4 = mySnapshot4.data();
        // if(docData3)
        // {
          const document = { farmerId: docu.useruid ,farmerName : docData4.userFname+" "+docData4.userLname ,phoneNo:docu.userPhone};
            // console.log(document);
            return document;

        // }
    }
    // var myArray = JSON.parse(documents);
   
   
  


}
}

export { dairyFarmerTransaction };
