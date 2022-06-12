// Imports
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  setDoc,
  doc,
  getDocs,
  addDoc,
} from "firebase/firestore";

import {
  getAuth,
  updatePassword,
  initializeAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";

const dairyRegestration = (request, response) => {
  // const {ownerFirstName,ownerLastName,ownerAadharNumber,ownerGender,ownerAge,ownerPhoneNumber,ownerAltNumber,ownerDairyName,ownerDairyLocation,ownerTaluka,ownerDistrict,accEmail,accPass,accConfPass,infoUid }=request.body;
  const { fullinfo, token } = request.body;
  // console.log(request.body);
  console.log(fullinfo);
  console.log(token);
  const email = fullinfo.accEmail;
  const password = fullinfo.accPass;
  console.log(email);
  console.log(password);

  const dToken = token;
  console.log(dToken);

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

  // initialize Firebase app
  const firebaseApp = initializeApp(firebaseConfig);

  // init services
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);

  const dairyRef = doc(db, "dairy/" + dToken);
  console.log(dairyRef);
  setDoc(dairyRef, fullinfo).then(() => {
    console.log("Account Created");
  });

//   const auth = getAuth();

//   const user = auth.currentUser;
//   const newPassword = password;

//   updatePassword(user, newPassword)
//     .then(() => {
//       // Update successful.
//       console.log("Password updated");
//     })
//     .catch((error) => {
//       // An error ocurred
//       console.log(error.message);
//       // ...
//     });
  // authentication
  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then((cred) => {
  //       console.log(cred.user);
  //     //   const dairyRef = doc(db, "dairy/" + cred.user.uid);

  //     })
  //     .catch((err) => {
  //       var errorMsg = err.message;
  //       console.log(errorMsg);
  //       if (errorMsg == "Firebase: Error (auth/email-already-in-use).") {
  //         console.log("User already exists..");
  //       }
  //     });
};

export { dairyRegestration };
