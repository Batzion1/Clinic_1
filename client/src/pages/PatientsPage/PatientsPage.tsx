 
import React, { FC, useEffect, useState } from 'react';

import { Patient } from '../../types/Patient';
import { Column } from '../../compomemts/Column';
import { useLocation, useNavigate } from 'react-router';
import TableComponent from '../../compomemts/Tables';
import PopUp from '../../compomemts/PopUp';
import PopUpedit from '../../compomemts/PopUpedit';


export const columns:Column<Patient>[] = [
  { label: 'First Name', value: 'firstName'  },
  { label: 'lastName', value: 'lastName'   },
  { label: 'tz', value: 'tz'   },
  { label: 'address', value: 'address'   },
  { label: 'Date_of_birth', value: 'Date_of_birth'   },
  { label: 'Phone', value: 'Phone'   },
  { label: 'Mobile_Phone', value: 'Mobile_Phone'   }
  


]
const exampleObject = {
  firstName: 'Alice',
  lastName: 'Smith',
  tz: 'UTC+3',
  address: '456 Main Street',
  Date_of_birth: '10/15/1985',
  Phone: '555-123-4567',
  Mobile_Phone: '555-987-6543',
 
};

function PatientsPage()  {
  // const employeeReducer = useSelector((store: any) => store.employeeReducer);
  const myNav = useNavigate();
  const [listPatient, setListPatient] = useState<Patient[]>([]);
  const params=useLocation()
  useEffect(() => {
    const id=params.state
 
    const fetchpatient = async () => {
      try {
        const response = await fetch(`http://localhost:3000/patient/`);
        const data = await response.json();
        console.log(data+"fghj");
  
        setListPatient(data);

      } catch (error) {
        console.error('Failed to fetch patient:', error);
      }
    };
    fetchpatient();
  }, []);
 return (
  <div>
    <h1>patient Page</h1>
    
    {/* <h1>{employeeReducer.numberOfEmployee}</h1> */}
    <TableComponent<Patient> columns={columns} data={listPatient} ></TableComponent>
    <PopUp mode="add" ></PopUp>
    <PopUpedit patientToUpdate={exampleObject} ></PopUpedit>
  </div>
);
};




export default PatientsPage;


