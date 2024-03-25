import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
 const app=express();
 
 import PatientRouter from './routers/PatientRouter';
import VaccinesRouter from './routers/VaccinesRouter';
 app.use(cors());
 app.use(bodyParser.json());
 require("../connectMongo")

app.use('/Patient',PatientRouter);
app.use('/Vaccines',VaccinesRouter);

 const port = process.env.PORT || 3000;
 
 app.listen(3000, () => console.log('app is listening at port 3000'));