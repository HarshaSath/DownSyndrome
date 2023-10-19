'use client'

import "bootstrap/dist/css/bootstrap.css";
import "./page.css"
import {useState} from "react";
import Swal from "sweetalert2";


export default function AdminLogin(){


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform your authentication logic here
        if (username === 'admin' && password === 'password') {



            // Successful login logic (e.g., set session, redirect)
            Swal.fire(
                'Login Success!',
                'Logged in as admin.',
                'success'
            );
            // Redirect to another page when the button is clicked
            // Simulate an HTTP redirect:
            window.location.replace("http://localhost:3000/pages/dynamic/admin/dashboard");

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Login Fail',
                text: 'User name or password incorrect. please try again',
                footer: '<a href="">Why do I have this issue?</a>'
            })

        }
    };

    return(
        <div className=" container-fluid bg-dark text-light vh-100">
            <h1 className="text-center pt-5">Admin Login</h1>
            <div className="container admin_login_card p-5">
                <h6>Login here</h6>
                <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3 mt-3  ">
                    <input type="text" className="form-control bg-dark text-light" id="uname" placeholder="Enter User Name"
                           name="uname" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <label htmlFor="email" >Enter User Name</label>
                </div>

                <div className="form-floating mt-3 mb-3">
                    <input type="text" className="form-control bg-dark text-light" id="pwd" placeholder="Enter password"
                           name="pswd" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="pwd">Enter password</label>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-block" >Login</button>
                </div>
                </form>
            </div>
        </div>
    )
}