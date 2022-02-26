import { initializeApp } from "firebase/app";

const firebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBIlQc_QEmssdwMQKzZoKvOOJ15VnnKa-Y",
    authDomain: "buildings-app-43760.firebaseapp.com",
    databaseURL: "https://buildings-app-43760-default-rtdb.firebaseio.com",
    projectId: "buildings-app-43760",
    storageBucket: "buildings-app-43760.appspot.com",
    messagingSenderId: "576031302386",
    appId: "1:576031302386:web:f7ca1fa930639eeb36e66b"
  };

  initializeApp(firebaseConfig)
}

export default firebase