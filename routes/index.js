import express from 'express';
const { Router, Request, Response } = express;
import participants from "./participants.js";
import messages from "./messages.js";
import status from "./status.js"

const routes = Router();

routes.use("/participants", participants);
routes.use("/messages", messages);
routes.use("/status", status);


export default routes;