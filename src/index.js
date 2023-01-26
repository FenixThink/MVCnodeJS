import express from "express";
import participant from "./routes/participant.routes.js";
import events from "./routes/festival.routes.js";
import bodyParser from "body-parser";
// import festival from "./routes/festival.routes.js";

const app = express();

app.use(bodyParser.json());

app.use(participant);
app.use(events);
app.listen(3000,() => {console.log("ejecutando en el puerto 3000");});
