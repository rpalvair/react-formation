import Rebase from "re-base"
import firebase from "firebase/app"
import "firebase/database"


var firebaseConfig = {
    apiKey: "",
    authDomain: "chatbox-app-d83de.firebaseapp.com",
    databaseURL: "https://chatbox-app-d83de-default-rtdb.firebaseio.com"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const base =  Rebase.createClass(firebase.database())

  export { firebaseApp }

  export default base