import { Request, Response } from 'express';
import  PatientModel, { IPatient } from '../modeles/patientModel';
import VaccinesModel from '../modeles/VaccinesModel';

 

export const createPatient = async (req: Request, res: Response) => {
    try {
        const { firstName,lastName,tz,address,Date_of_birth,Phone, Mobile_Phone,Date_of_receipt_answer,recovery_date} = req.body;
        const newPatient: IPatient = new PatientModel({firstName,lastName,tz,address,Date_of_birth,Phone, Mobile_Phone,Date_of_receipt_answer,recovery_date});
        // ValidEmployee(newEmployee); //עשינו במודל עצמו ולידציות בסיסיות
        const PatientSave = await newPatient.save();
        res.status(200).json(PatientSave);
    } catch (error:any) {
        console.log(error)
    //     if (error.message == "All fields are mandatory!") {
    //         res.status(400).json({ error: "All fields are mandatory!" });
    //       } else if (error.message == "Invalid email!")
    //         res.status(400).json({ error: "Invalid email!" });
    //         else if (error.message == "Invalid phone!")
    //     res.status(400).json({ error: "Invalid phone!" });
    //   else {
    //     res.status(500).json({ message: 'Failed to create Patient', error });
    //   }
        
    }
};

export const updatePatient = async (req: Request, res: Response) => {
     try {
        const { id } = req.params;
        const { firstName,lastName,tz,adress,Date_of_birth,Phone, Mobile_Phone,Date_of_receipt_answer,recovery_date } = req.body;
        const updated= await PatientModel.findByIdAndUpdate(id, {firstName,lastName,tz,adress,Date_of_birth,Phone, Mobile_Phone,Date_of_receipt_answer,recovery_date}, { new: true });
        console.log(updated)
        res.status(200).json("ggod: "+updated);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update employee', error });
    }
};

export const getAllPatients = async (req: Request, res: Response) => {
    console.log(req.body+"hvjkwjfdhgjqw")
    try {
        const allPatients = await PatientModel.find();
        res.status(200).json(allPatients);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get Patient', error });
    }
};
export const getAllVaccines = async (req: Request, res: Response) => {
    console.log(req.body+"hvjkwjfdhgjqw")
    try {
        const allVaccines = await VaccinesModel.find();
        res.status(200).json(allVaccines);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get Vaccines', error });
    }
};

export const getPatientById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const searchPatient = await PatientModel.findById(id);
        if (!searchPatient) {
            return res.status(404).json({ msg: "Patient not found" });
        }
        res.status(200).json(searchPatient);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

export const deletePatient = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletePatient = await PatientModel.findByIdAndDelete(id);
        if (!deletePatient) {
            return res.status(404).json({ msg: "Patient not found" });
        }
        res.status(200).json({ msg: "Patient deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};


export const getVaccinesByPatientId = async (req: Request, res: Response) => {
    console.log("cmhui")
    try {
        // const { id } = req.params;
         const Vaccines = await VaccinesModel.find({VaccinesId:req.params.PatientId})
        
        if (!Vaccines) {
          return res.status(404).send('Vaccines not found');
        }
        res.send(Vaccines)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get Vaccines', error });
    }
  };
 

