import React from "react";
import './signIn-Out.style.scss'
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.components";
const signInAndSingnUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp/>
    </div>
    
)
export default signInAndSingnUpPage;