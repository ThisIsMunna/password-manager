import React, { ReactEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../components/hooks/useFirebase";
import { useHistory } from "react-router";
import { getAuth } from "@firebase/auth";

const EmailSignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {singInUsingEmail} = useFirebase()
    const history = useHistory()
    const auth = getAuth()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await singInUsingEmail( auth ,email, password)
         history.push("/")
        console.log(email, password)
    }

return(
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" onChange={(e) => setEmail(e.target.value)} name="email">
            </input>
            <input type="password" onChange={(e) => setPassword(e.target.value)}name="password">
            </input>
            <button type="submit">Login</button>
        </form>
    </div>
    <div>
    <Link to="/emailSignUp">Sign up</Link>
    </div>
    </>
)
}
export default EmailSignIn;
