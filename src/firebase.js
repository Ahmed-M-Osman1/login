import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// initialize firebase config.
//if we want to change the server to production we will change the process.env only.
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
});

export const auth = app.auth()
export default app