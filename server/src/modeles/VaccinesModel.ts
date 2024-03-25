import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IVaccines extends Document {
    PatientId:string 
    Date_of_vaccination:Date 
    manufacturer:String 

  
}

const VaccinesSchema = new Schema<IVaccines>({
    PatientId: { type: String, required: true },
    Date_of_vaccination: { type: Date, required: true },
    manufacturer: { type: String  , required: true},

});

const VaccinesModel: Model<IVaccines> = mongoose.model<IVaccines>('Vaccines', VaccinesSchema);
export default VaccinesModel;







 
