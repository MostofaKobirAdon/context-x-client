import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  console.log(user);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (info) => {
    return updateProfile(auth.currentUser, info);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = { createUser, Login, updateUser, user, loading };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
