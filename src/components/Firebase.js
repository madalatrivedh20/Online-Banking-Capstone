
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,FacebookAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQaUwSVM1OSQoh5uS7qiniQO4beSNb1JM",
  authDomain: "online-banking-2.firebaseapp.com",
  projectId: "online-banking-2",
  storageBucket: "online-banking-2.appspot.com",
  messagingSenderId: "647396172156",
  appId: "1:647396172156:web:d876621f4a8bb6b12744f9",
  measurementId: "G-8VLQ6LQBVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const go_provider = new GoogleAuthProvider();
const fb_provider = new FacebookAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, go_provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signInWithFaceBook = () =>{
    signInWithPopup(auth, fb_provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
