
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA2gdlHgeSjoX9adtEkAha_IU-cC1-gf2I",
    authDomain: "projeto-mundo-invertido-ced1f.firebaseapp.com",
    projectId: "projeto-mundo-invertido-ced1f",
    storageBucket: "projeto-mundo-invertido-ced1f.appspot.com",
    messagingSenderId: "206766151617",
    appId: "1:206766151617:web:2afb046e3382865c83c140",
    measurementId: "G-HGBV8ZY1CC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export default app
