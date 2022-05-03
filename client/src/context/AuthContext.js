import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, auth1 } from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [user1, setUser1] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

   const signInAdmin = (email, password) =>  {
    return signInWithEmailAndPassword(auth1, email, password)
   }

  const logout = () => {
      return signOut(auth)
  }

  const logoutAdmin = () => {
    return signOut(auth1)
}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    const unsubscribe1 = onAuthStateChanged(auth1, (currentUser1) => {
      console.log(currentUser1);
      setUser1(currentUser1);
    });
    return () => {
      unsubscribe();
      unsubscribe1();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, user1, logout, logoutAdmin, signIn, signInAdmin }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
