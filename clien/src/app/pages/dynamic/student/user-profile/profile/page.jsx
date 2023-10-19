"use client"
import {useEffect, useState} from "react";
import axios from "axios";
import cookie from "js-cookie";
import TopNavDynamic from "@/components/nav/topNav/topNav-dynamic";
import {error} from "next/dist/build/output/log";
import Swal from "sweetalert2";

export default function StudentProfile(){

    // const [fname, setFname] = useState('');
    // const [lname, setLname] = useState('');
    // const [email, setEmail] = useState('');
    // const [pw, setPw] = useState('');
    //
    // const [data,setData] = useState(null);
    // const [isLoading,setLoading] = useState(true);
    //
    // var cookieUid = cookie.get('uid');
    //
    // function bindForm(){
    //     setFname(data.firstName);
    //     setLname(data.lastName);
    //     setEmail(data.email);
    //     setPw(data.password);
    // }
    //
    // async function fetchData(){
    //
    //     const url = "http://localhost:4000/user/fetchOne/"+cookieUid;
    //
    //     console.log(url)
    //
    //     await axios
    //         .get(url)
    //         .then((res)=>{
    //             console.log(res.data.firstName);
    //             setData(res.data);
    //             console.log(data);
    //             bindForm();
    //             setLoading(false);
    //
    //         })
    //         .catch((err)=>{
    //             console.log(err.message);
    //         })
    //
    // }
    //
    // useEffect(()=>{
    //
    //     fetchData();
    //
    // },[])
    //
    // async function updateData(user){
    //
    //     await axios
    //         .post("http://localhost:4000/user/",user)
    //         .then((response)=>{
    //             console.log(response.data);
    //             const userData = response.data;
    //             setData(userData);
    //             Swal.fire(
    //                 'Success!',
    //                 'Profile Updated',
    //                 'success'
    //             );
    //         })
    //         .catch((error)=>{
    //             console.log(error);
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: error.message,
    //                 text: 'Server is not connected or running!',
    //                 footer: '<a href="">Why do I have this issue?</a>'
    //             })
    //         })
    //
    // }
    //
    // const handleupdateuser = async (e)=>{
    //
    //     const user ={
    //         firstName: fname,
    //         lastName: lname,
    //         email: email,
    //         password: pw,
    //     }
    //
    //     updateData(user);
    //
    //
    // }
    //
    // if(isLoading) return <p>Loading...</p>
    // if (!data) return <p>No data</p>

    return(
        <div className="container-fluid mt-3">
            <TopNavDynamic fixedtop="True"/>
            <h1 className="text-center">Profie</h1>
            <form >
                {/*<form onSubmit={handleupdateuser}>*/}
                <div className="mb-3 mt-3">
                    <label htmlFor="fname" className="form-label">First Name :</label>
                    <input type="fname" className="form-control bg-dark text-light" id="fname" placeholder="Enter First Name" name="fname"  />
                    {/*<input type="fname" className="form-control bg-dark text-light" id="fname" placeholder="Enter First Name" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} />*/}
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="lname" className="form-label">Last Name :</label>
                    <input type="lname" className="form-control bg-dark text-light" id="lname" placeholder="Enter Last Name" name="lname"  />
                    {/*<input type="lname" className="form-control bg-dark text-light" id="lname" placeholder="Enter Last Name" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} />*/}
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="pemail" className="form-label">Email :</label>
                    <input type="pemail" className="form-control bg-dark text-light" id="pemail" placeholder="Enter email" name="pemail"  />
                    {/*<input type="pemail" className="form-control bg-dark text-light" id="pemail" placeholder="Enter email" name="pemail" value={email} onChange={(e) => setEmail(e.target.value)} />*/}
                </div>
                <div className="mb-3">
                    <label htmlFor="ppwd" className="form-label">Password:</label>
                    <input type="password" className="form-control bg-dark text-light" id="ppwd" placeholder="Enter password" name="ppswd"  />
                    {/*<input type="password" className="form-control bg-dark text-light" id="ppwd" placeholder="Enter password" name="ppswd" value={pw} onChange={(e) => setPw(e.target.value)} />*/}
                </div>

                <div className="row mb-4 mt-2">
                    <div className="col-6">
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                    <div className="col-6">
                        <button type="button" className="btn btn-warning">Clear</button>
                    </div>
                </div>

            </form>
        </div>
    )
}