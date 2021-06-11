import DataMessages from './messages.js'


let data = [];

setInterval(function(){ 
    removeInactives()
}, 5000);


const alreadyExists=(name)=>{
    return data.find((person) => person.name === name);
}

const removeInactives=()=>{

    const currentDate = Date.now()

    let inactiveParticipants = data.filter((person) => currentDate - person.lastStatus >= 10000);

    inactiveParticipants.forEach(person=>
        DataMessages.createAlert(person.name)
    );
    data = data.filter((person) => currentDate - person.lastStatus <= 10000);

}

class DataParticipants{

    static insert(name){
        const participant = {
            name,
            lastStatus: Date.now()
        }

        if(!alreadyExists(name)){
            DataMessages.createAlert(name,"entra na sala...")
            data.push(participant)

            return true
        }

        return false
    }

    static getAll(){
        return (data);
    }


}

export default DataParticipants