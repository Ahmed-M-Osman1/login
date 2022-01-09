import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

// to make access user any where of the app.
const AuthContext = React.createContext();

// make a hook to use it to access data.
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // handle the use in a state.
  const [currentUser, setCurrentUser] = useState();

  // handle the loading in a state.
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }


    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    })

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {
        // If we are not loading (loading false) the children passed.
      }
      {!loading && children}
    </AuthContext.Provider>
  );
}
