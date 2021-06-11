import express from 'express';
import routes from './routes/index.js';
import cors from 'cors'
//import ParticipantsController from "../controllers/ParticipantsController";


const app = express();
app.use(cors())
app.use(express.json());
const PORT= 4000 

let participants = []



app.use("/", routes);
//router.get("/", ParticipantsController.teste);

app.listen(PORT, () => {
    console.log(`[Bate Papo Uol] - Backend running at:: ${PORT}`)
});

app.use(function(req, res){
    res.status(404);
});

const timeoutScheduled = Date.now();

