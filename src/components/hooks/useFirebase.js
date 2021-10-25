//@ts-nocheck
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { auth } from "../../firebaseconfig";
import { updateProfile } from "@firebase/auth";

const useFirebase = () => {
  const history = useHistory();

  const [user, setUser] = useState({});
  const singInUsingGoogle = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider).then((result) => {
      setUser(result.user);
      console.log(result.user);
    });
    history.push("/");
  };

  const singInUsingEmail = (auth, email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorMessage === "Firebase: Error (auth/user-not-found).")
          alert("Signup first");
        console.log(error.message);
      });
  };

  const signUpWithEmail = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("then");
        const user = userCredential.user;
        updateProfile(auth.currentUser, { displayName: name });

        console.log("after then", user);
        user.reload();
        user =  auth.currentUser();
        setUser(user);
        // setUserName();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // const setUserName = () => {
  //   updateProfile(auth.currentUser, { displayName: "Munna" }).then(
  //     (result) => {}
  //   );
  // };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {});
  };

  return {
    user,
    singInUsingGoogle,
    logOut,
    signUpWithEmail,
    singInUsingEmail,
  };
};

export default useFirebase;
