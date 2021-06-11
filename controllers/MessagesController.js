import express from 'express';
import dayjs from 'dayjs'
import DataMessages from '../data/messages.js'

//import { validate } from "class-validator";




class MessagesController{

    static getMessages=(req,res) =>{
        
        res.status(200).send(DataMessages.getAll())
    }

    static newMessage=(req,res) =>{
        let { to,text,type } = req.body;
        let from = req.header("user")

        console.log(from)
        DataMessages.insert(from,to,text)
        
        res.sendStatus(200)
    }


    

}

export default MessagesController;