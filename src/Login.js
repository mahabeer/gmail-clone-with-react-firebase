import React from 'react'
import { actions } from './context/Reducer';
import { StateContext, useStateValue } from './context/StateProvider';
import { auth,provider } from './firebase';
import logo from './img/gmail.png'
import "./styles/login.css"

function Login() {

const [state, dispatch] = useStateValue(StateContext);
const loginwithgmail=()=>{
    auth.signInWithPopup(provider).then((result) => {
        dispatch({
           type:actions.SET_USER,
           user:result.user
       })
    }).catch((error) => {
        alert(error.message);
    });
}
    return (
        <div className="loginwrapper">
        <div className="loginpage">
            <img src={logo}/>

            <button className="gmail_login" onClick={loginwithgmail}>Login with Gmail</button>
        </div>
        </div>
    )
}

export default Login
