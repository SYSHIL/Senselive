// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase,ref,get,child} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getDatabase(app);
console.log(db);
const dbRef = ref(db);
// get data function
async function getData(rakeId) {
  try {
    const snapshot = await get(child(dbRef, `rakes/${rakeId}`));
    if (snapshot.exists()) {
      const temp = snapshot.val().rakeTemperature;
      return temp;
    } else {
      throw new Error("No data available");
    }
  } catch (error) {
    throw error;
  }
}

// Get the button element by ID
const getDataButton = document.getElementById("getData");

// Add an event listener to the button
getDataButton.addEventListener("click", async function (event) {
  try {
    // Get the data-key attribute from the button
    const key = event.target.getAttribute("data-key");
    // Call the getData function with the key argument
    const temperatureElement = document.getElementById("Temperature");
    const temperature = await getData(key);
    temperatureElement.innerHTML = temperature;
  } catch (error) {
    console.error(error);
    // Handle the error here by displaying a message to the user
      temperatureElement.innerHTML = "Error fetching temperature data";
    }
  });
