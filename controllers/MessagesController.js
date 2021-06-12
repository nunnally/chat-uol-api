import DataMessages from '../data/messages.js'

class MessagesController{

    static getMessages=(req,res) =>{
        
        res.status(200).send(DataMessages.getAll())
    }

    static newMessage=(req,res) =>{

        let { to,text } = req.body;
        let from = req.header("user")
        DataMessages.insert(from,to,text)
        
        res.sendStatus(200)
    }


    

}

export default MessagesController;