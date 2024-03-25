import axios from "axios";

class VaccinesService {


    getVaccinesbyPatient = async (id: string) => {
        try {
       
          const response = await axios.get(`http://localhost:3000/Patient/getVaccinesByPatientId${id}`);
          console.log('Update successful:', response.data);
        } catch (error) {
          console.error('Failed to update:', error);
        }
      };
      async getAll() {
        try {
          const response = await axios.get('http://localhost:3000/Vaccines');
          console.log('get all Patient successful:', response.data);
          return response.data;  
        } catch (error) {
          console.error('Failed to get all Patient:', error);
          throw error; 
        }
      }

}
export default new VaccinesService