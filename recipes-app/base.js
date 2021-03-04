import Rebase from "re-base"
import firebase from "firebase/app"
import "firebase/database"


var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: ""
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const base =  Rebase.createClass(firebase.database())

  export { firebaseApp }

  export default base