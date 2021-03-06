import React, { useCallback } from 'react'
import { withRouter } from 'react-router';
import { auth,provider } from '../Firebase';
import "./Signup.css"
const Signup = ({history}) => {
    const handleSignup = useCallback(async event =>{
        event.preventDefault();
        const {email,password} = event.target.elements;
        try{
            await auth.createUserWithEmailAndPassword(email.value,password.value);
            history.push("/dashboard");
        }
        catch(error){
            alert(error);
        }
    },[history])
    return (
        <div>
            <h1>
                Sign Up
            </h1>
            <form onSubmit={handleSignup} className="signup">
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default withRouter(Signup)
