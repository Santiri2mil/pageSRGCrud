   // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyDV9i6eCY1mZpM05Lw1MGdkp_ezB8Jr_is",
        authDomain: "srg-web-crud.firebaseapp.com",
        projectId: "srg-web-crud",
        storageBucket: "srg-web-crud.appspot.com",
        messagingSenderId: "446814094855",
        appId: "1:446814094855:web:56a7c9db7418364b5c8ca2"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      
      export default app;
