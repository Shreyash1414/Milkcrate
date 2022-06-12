import { request } from "express";
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  setDoc,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const farmerReg = (request, response) => {
  // console.log(request.body);

  const { userFname, userLname, userAadhar, userPhone, appVerifier, useruid, dairyId } =
    request.body;
  const phoneNumber = userPhone;
  const dID = dairyId;
  const fID = useruid;
  // console.log(fID);
  // console.log(dID);

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
    measurementId: "G-96TCPMYK50",
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
 
  //  deleteDoc(doc(db, "dairy/" + dID + "/farmers/" + ));
  try{
  const farmerRef = doc(db, "dairy/" + dID + "/farmers/" + fID);
  const farmerRef2 = doc(db, "dairyIds/" + fID);
  const farmerRef3 = doc(db, "phoneNum/" + phoneNumber);

  setDoc(farmerRef, request.body ).then(() => {
    console.log("Account Created");
  });
  setDoc((farmerRef2),{
    userPhone:phoneNumber,
    dairyId:dID
    // console.log("Account Created");
  });
  setDoc((farmerRef3),{
    dairyId:dID,
    useruid:fID
    // console.log("Account Created");
  });

  return response.send({
    status: "success",
    code: 200,
    data: {
      dUid: dID,
    },
  });
} catch{
  console.log(error);
  return response.send({
    status: "failure",
    message: "Something went wrong",
    code: 400,
  });
}


};


export { farmerReg };
