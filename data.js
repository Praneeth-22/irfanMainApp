// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN6Q5ylohlv7dOv1062CCaxOPECDgSZsg",
  authDomain: "m-irfan-portfolio.firebaseapp.com",
  databaseURL: "https://m-irfan-portfolio.firebaseio.com",
  projectId: "m-irfan-portfolio",
  storageBucket: "m-irfan-portfolio.appspot.com",
  messagingSenderId: "779544296679",
  appId: "1:779544296679:web:ce0d4ef0df71fe0f13b642",
  measurementId: "G-R6MZWM21ER"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const firestore=firebase.firestore()
const db =firestore.collection("messeges")
//save msg to firebase
const saveMsg=(name,email,subject,text)=>{
  db.add({
    name:name,
    mail:email,
    subject:subject,
    text:text,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  }).then( 
    ()=>{
    console.log("ok")
  }).catch(
    ()=>{
      console.log("error")
    }
  )
 }