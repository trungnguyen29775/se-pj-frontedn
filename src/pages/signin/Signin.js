import React from 'react';
import './signIn.css';
import { useState } from 'react';

export default function SignIn() {
    return (
        <div className="auth">
            <div className="form">
                <div className="logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/4039/4039232.png" alt="" />
                </div>
                <form action="/signin" method="GET">
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" id="" placeholder="Password" />
                    <div className="text">
                        <a>Forget Password?</a>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className="forget">
                    <p>New user?</p> <a>Register</a>
                </div>
            </div>
        </div>
    );
}
