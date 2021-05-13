import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQhQxYNCUZY44H_DoESGWBL5B-jqUh7fI",
  authDomain: "mentor-me-7c285.firebaseapp.com",
  projectId: "mentor-me-7c285",
  storageBucket: "mentor-me-7c285.appspot.com",
  messagingSenderId: "131600595621",
  appId: "1:131600595621:web:6714c5003208d403dfab4c",
  measurementId: "G-G1Y3VXE61Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GithubAuthProvider();
const auth = firebase.auth();

export { auth, provider };
