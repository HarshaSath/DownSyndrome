"use client"
import Section2 from "@/components/section2/section2";
import Section3 from "@/components/section3/section3";
import Footer from "@/components/footer/footer";
import Section1Dynamic from "@/components/section1/section1dynamic";
import HeroWelcome from "@/components/hero/hero-welcome";
import {useEffect, useState} from "react";
import axios from "axios";
import cookie from "js-cookie";
import TopNavDynamic from "@/components/nav/topNav/topNav-dynamic";




export default function StudentHome(){

    const [data,setData] = useState(null);
    const [isLoading,setLoading] = useState(true);

    var cookieUid = cookie.get('uid');

    async function fetchData(){

        const url = "http://localhost:4000/user/fetchOne/"+cookieUid;

        console.log(url)

        await axios
            .get(url)
            .then((res)=>{
                console.log(res.data.firstName);
                setData(res.data);
                console.log(data);
                setLoading(false);
            })
            .catch((err)=>{
                console.log(err.message);
            })

    }

    useEffect(()=>{

        fetchData();

    },[])

    if(isLoading) return <p>Loading...</p>
    if (!data) return <p>No data</p>

    return(

                <>
                    <TopNavDynamic fixedtop="True"/>
                    <HeroWelcome uname={data.firstName}/>
                    <Section1Dynamic/>
                    <Section2/>
                    <Section3/>
                    <Footer/>
                </>

    )
}