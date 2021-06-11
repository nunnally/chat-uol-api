import express from 'express';
import dayjs from 'dayjs'
import DataParticipants from '../data/participants.js'
//import { validate } from "class-validator";

let data = []

class ParticipantsController{

    static getParticipants=(req,res) =>{

        res.send(DataParticipants.getAll())
    }

    static newParticipant=(req,res) =>{
        let { name } = req.body;

        DataParticipants.insert(name)

        res.send(data)
    }


    

}

export default ParticipantsController;