// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, child, get } = require('firebase/database');
// rakeId = "RAKE 2"
const firebaseConfig = {
    apiKey: "AIzaSyCNzRdlcfQeoN8a7L0jA04zhDamdpwyyJI",
    authDomain: "learnfirebase-f2755.firebaseapp.com",
    databaseURL: "https://learnfirebase-f2755-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "learnfirebase-f2755",
    storageBucket: "learnfirebase-f2755.appspot.com",
    messagingSenderId: "994018527725",
    appId: "1:994018527725:web:d6978ce0e350bd778effe4",
    measurementId: "G-WBPJCQ3BK5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Get a reference to the database
  const database = getDatabase(app);
  
  // Get a reference to the root node
const rootRef = ref(database);
const dbRef = ref(getDatabase());
function getData(rakeId){
  get(child(dbRef, `rakes/${rakeId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });  
}
module.exports= {getData}