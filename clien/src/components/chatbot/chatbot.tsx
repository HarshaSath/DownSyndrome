'use client'
import "./chatbot.css"
import React, { Component } from 'react';
import {addResponseMessage, Widget} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import axios from "axios";

class ChatBot extends Component {

    componentDidMount(){
        addResponseMessage('Hello I am here to help you. Ask me anything.');
    }


    handleNewUserMessage = (newMessage) => {

        var respone;

        console.log(`New message incoming! ${newMessage}`);

        const msgRq = {
            msg : newMessage
        }

        // Send the message to your backend API
        axios.post("https://asia-south1-downs-402315.cloudfunctions.net/downs",msgRq,{headers: {
            'Content-Type': 'application/json',
        },
    })
            .then((res)=> {
                respone = res.data.msg;
                console.log(respone);
                addResponseMessage(respone);
            })
            .catch((error)=> {
                console.log(error.msg);
                addResponseMessage("Network ERR! Chatbot server is not Running.");
            })
        // Set Response

    };

    render() {
        return (
            <div>
                <Widget handleNewUserMessage={this.handleNewUserMessage} title={"Downsyndrome Helper"} subtitle={"Welcome to AI Assistant"}/>
            </div>
        );
    }
}

export default ChatBot;