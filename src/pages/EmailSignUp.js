//@ts-nocheck
import React, { useState } from "react";
import useFirebase from "../components/hooks/useFirebase";
import { useHistory } from "react-router";
import { getAuth,updateProfile } from "@firebase/auth";
import useAuth from "../components/hooks/useAuth";

const EmailSignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("")
  const [password, setPassword] = useState("");
  const { signUpWithEmail } = useFirebase();
  const history = useHistory();
  const handleSubmit = async  (e) => {
    e.preventDefault();
    await signUpWithEmail(name, email, password);
    history.push("/home");
    history.go(0)
    console.log(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="text"
        ></input>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        ></input>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        ></input>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default EmailSignUp;
