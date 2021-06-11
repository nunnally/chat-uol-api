import dayjs from 'dayjs'
let data = [];

const currentDate = Date.now()

class DataMessages{

    static insert(from,to="Todos",text){

        data.push({
            from,
            to,
            text,
            type:to==="Todos"?'message':'private_message',
            time:dayjs(currentDate).format("HH:mm:ss")
        })
    }

    static createAlert(from,text="sai da sala ..."){

        data.push({
            from,
            to:"Todos",
            text,
            type:"status",
            time:dayjs(currentDate).format("HH:mm:ss")
        })
    }

    //It includes alerts too. Dunno if we have to
    static getAll(limit=0){

        return (data);
    }


}

export default DataMessages