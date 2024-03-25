import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IPatient extends Document {
  firstName: string
  lastName: string
  tz:string,
  address: string
  Date_of_birth: string
  Phone:string
  Mobile_Phone:string
  Date_of_receipt_answer:Date
  recovery_date:Date

  
}

const patientSchema = new Schema<IPatient>({
 firstName: { type: String, required: true },
 lastName: { type: String, required: true },
 tz: { type: String  , required: true},
 address: { type: String ,required: true},
 Date_of_birth: { type: String, required: true },
 Phone: { type: String, required: true },
 Mobile_Phone: { type: String, required: true },
 Date_of_receipt_answer: { type: Date, required: false },
 recovery_date: { type: Date, required: false },
});

const PatientModel: Model<IPatient> = mongoose.model<IPatient>('Patient', patientSchema);
export default PatientModel;







 
