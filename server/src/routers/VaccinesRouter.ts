import express from "express";

 const VaccinesRouter=express.Router();

 import {
    getAllVaccines,

 
  } 
  from '../controllers/PatientController';



  
  VaccinesRouter.get('/',getAllVaccines)


export default VaccinesRouter;
