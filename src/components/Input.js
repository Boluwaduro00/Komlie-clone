import React from "react";
import {AiFillGoogleCircle} from 'react-icons/ai';
import {TiSocialFacebook} from 'react-icons/ti';
import lock from '../images/lock.png';

export default function Input() {
    return(
        <section className="right-section">
            <h2 className="welcome">Welcome Back</h2>
            <h4 className="text">Enter your login details to continue</h4>

            <div className="details">
                <input type="text" placeholder="Email address" />
                <input type="text" placeholder="Password"/>
                <button className="button"><img src={lock} alt="" className="lock" /> Login</button>
            </div>
            <div className="reset">
                <a href="" className="password-reset">Forgot password?</a>
                <hr />
                <p>you can sign in with</p>
                <div className="alt">
                    <AiFillGoogleCircle className="google"/>  <TiSocialFacebook className="fb2"/>
                </div>
                
            </div>
        </section>
    )
}