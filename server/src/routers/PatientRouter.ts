import express from "express";
 const patientRouter=express.Router();

 import {
    createPatient,
    updatePatient,
    getAllPatients,
    getPatientById,
    deletePatient,
    getVaccinesByPatientId,
    getAllVaccines

 
  } from '../controllers/PatientController';



  patientRouter.post('/', createPatient);
  patientRouter.put('/:id', updatePatient);
  patientRouter.get('/', getAllPatients);
  patientRouter.get('/:id', getPatientById);
  patientRouter.delete('/:id', deletePatient);
  patientRouter.get('/getVaccinesByPatientId/:VaccinesId',getVaccinesByPatientId);
  patientRouter.get('/',getAllVaccines);


export default patientRouter;
