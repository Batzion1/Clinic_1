 
import React, { FC, useEffect, useState } from 'react';

import { Patient } from '../../types/Patient';
import { Column } from '../../compomemts/Column';
import { useLocation } from 'react-router';
import TableComponent from '../../compomemts/Tables';
import PopUp from '../../compomemts/PopUp';
import PopUpedit from '../../compomemts/PopUpedit';


export const columns:Column<any>[] = [
  { label: 'Date_of_vaccination', value: 'Date_of_vaccination'  },
  { label: 'manufacturer', value: 'manufacturer'   },

  


]




function KoronaPage()  {
  const [listPatient, setListPatient] = useState<Patient[]>([]);
  const params=useLocation()
  useEffect(() => {
    const id=params.state
 
    const fetchpatient = async () => {
      try {
        const response = await fetch(`http://localhost:3000/Vaccines`);
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
    <TableComponent<any> columns={columns} data={listPatient} ></TableComponent>
  
      </div>
    
    )
  }
  
  export default KoronaPage;