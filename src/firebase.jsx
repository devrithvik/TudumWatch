import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC96MYI83hlsQz-ayG6q8IOWVESvmi0etk",
  authDomain: "context-c02b0.firebaseapp.com",
  projectId: "context-c02b0",
  storageBucket: "context-c02b0.appspot.com",
  messagingSenderId: "82886328819",
  appId: "1:82886328819:web:c900391d0e182378501286"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);