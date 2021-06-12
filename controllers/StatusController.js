
import DataParticipants from '../data/participants.js'

class StatusController{

    static update(req,res){

        let user = req.header("user")

        if(DataParticipants.online(user)){

            res.sendStatus(200)
            return;
        }
        else {
            res.sendStatus(400)
        }
        
        
    }

}

export default StatusController