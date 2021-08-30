import React, { useCallback, useContext } from 'react'
import { withRouter,Redirect } from 'react-router';
import { auth } from 'firebase';
import app from '../Firebase';
import "./Login.css"
import { AuthContext } from '../Authorization'; 
import { Link } from 'react-router-dom';
const Login = ({history}) => {
    const handleLogin = useCallback(
        async event=>{
            event.preventDefault();
            const {email,password} = event.target.elements;
            try{
                await app.auth().signInWithEmailAndPassword(email.value,password.value);
                history.push("/dashboard");
            }
            catch(error){
                alert(error);
            }
        },[history]
    )
    const {currentUser} = useContext(AuthContext);
    if(currentUser){
        return <Redirect to="/dashboard" />
    }
    return (
        <div className="login">
            <h1>
                Log in
            </h1>
            <form onSubmit={handleLogin}>
                <label>
                    Login
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit" style={{fontWeight:"bold"}}>
                    LOG IN
                </button>
            </form>
            <button className="signup">
                <Link to="/signup">Or Signup</Link>
            </button>
        </div>
    )
}

export default withRouter(Login);
