import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

const farmerTransactionHistory = (request, response) => {
  const { dairyId, farmerId, month } = request.body;
  console.log(dairyId);
  console.log(farmerId);
  console.log(month);

  var monVal;
  if (month == "Jan") monVal = 1;
  else if (month == "Feb") monVal = 2;
  else if (month == "March") monVal = 3;
  else if (month == "April") monVal = 4;
  else if (month == "May") monVal = 5;
  else if (month == "June") monVal = 6;
  else if (month == "July") monVal = 7;
  else if (month == "August") monVal = 8;
  else if (month == "Sept") monVal = 9;
  else if (month == "Oct") monVal = 10;
  else if (month == "Nov") monVal = 11;
  else monVal = 12;

  console.log(monVal);
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
  const nameRef = doc(db, "/dairy/" + dairyId + "/farmers/" + farmerId);
  funCal();

  async function funCal() {
    var documents = [];
    const querySnapshot = await getDocs(
      collection(
        db,
        "/dairy/" + dairyId + "/farmers/" + farmerId + "/milkDates"
      )
    );

    //trial
    const Snapshot2 = await getDoc(nameRef);
    const docData2 = Snapshot2.data();
    const FLname = docData2.userFname + " " + docData2.userLname;
    console.log(FLname);

    for (const documentSnapshot of querySnapshot.docs) {
      const docu = documentSnapshot.data();
      console.log(docu);
      /**
       * @type { String }
       */
      const date = documentSnapshot.id;
      const dbMonth = date.split('-')[1];
      
      console.log("dbMonth: ");
      console.log(dbMonth);

      const temp = documentSnapshot.id;
      if (dbMonth == monVal) {
        documents.push(temp);
        documents.push(docu);
      }
    }
    return response.send({
      status: "success",
      code: 200,
      documents,
      data: {
        fname: FLname,
      },
    });
  }
};
export { farmerTransactionHistory };
