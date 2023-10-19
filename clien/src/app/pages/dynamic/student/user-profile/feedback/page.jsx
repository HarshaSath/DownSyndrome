"use client"

import {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import TopNavDynamic from "@/components/nav/topNav/topNav-dynamic";

export default function StudentFeedBacks(){

    const [feedback,setFeedBack] = useState("");

    const clear = ()=>{
        setFeedBack(" ");
    }

    const handleFeedbackSubmit = async (e)=>{
        e.preventDefault();

        const feedbackData ={
            "uid":"123",
            "feedback":feedback
        }

        console.log(feedbackData);

        await axios
            .post("http://localhost:4000/feedback/create",feedbackData)
            .then((response)=>{
              console.log(response.data);
              if(response.data.res=="Submitted!"){
                  Swal.fire(
                      'Success!',
                      'Posted your feedback',
                      'success'
                  );
              }else{
                  Swal.fire({
                      icon: 'Fail submission',
                      title: 'please try again',
                      text: '',
                      footer: '<a href="">Why do I have this issue?</a>'
                  })
              }
            })
            .catch((err)=>{
                console.log(err.message);
                Swal.fire({
                    icon: 'error',
                    title: err.message,
                    text: '',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })

    }

    return(
        <div className="container-fluid mt-3">
            <TopNavDynamic fixedtop="True"/>
            <h1 className="text-center">Feedback</h1>
            <form onSubmit={handleFeedbackSubmit}>
                <label htmlFor="feedback">Enter your feedback here:</label>
                <textarea className="form-control bg-dark text-light" rows="5" id="feedback" name="text" value={feedback} onChange={(e)=>setFeedBack(e.target.value)}></textarea>

                <div className="row mb-4 mt-2">
                    <div className="col-6">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-6">
                        <button type="button" className="btn btn-outline-warning" onClick={clear}>Clear</button>
                    </div>
                </div>

            </form>
        </div>
    )
}