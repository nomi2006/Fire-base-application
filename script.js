import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDyyLpFIWDTsvtmG_VIwfl_6KatIpP6u-s",
  authDomain: "blog-app-a2990.firebaseapp.com",
  projectId: "blog-app-a2990",
  storageBucket: "blog-app-a2990.appspot.com",
  messagingSenderId: "794941169564",
  appId: "1:794941169564:web:7bc6fc5964513ac3d7f259",
  measurementId: "G-NY1G19JCBE"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

console.log('app--->',app)

const auth = getAuth(app);
console.log(auth)