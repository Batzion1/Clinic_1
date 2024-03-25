import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import PatientService from '../services/patientService';
import PopUp from './PopUp';
import EditIcon from '@mui/icons-material/Edit';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PopUpedit from './PopUpedit';
import VaccinesService from '../services/VaccinesService';
export interface Column<T> {
  label: string;
  value: keyof T;
}

interface Props<T> {
  columns: Column<T>[];
  data: T[];
}

const TableComponent = <T extends Record<string, any>>({ columns, data }: Props<T>) => {

  
  const [list, setList] = useState<T[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const myNav = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    
  };

  const displayPatient = (values: any) => {
    setShowPopUp(true);

    // setSelectedPatient(values._id);
    // const id = values._id;
    // console.log(id+"fghjk");
    //   //  <PopUp mode="update" patientToUpdate={id} ></PopUp>;

  };
  const displayVaccines=(row: any)=>{
    VaccinesService.getAll();
    const id=row._id
    myNav('Vaccines',{state:id});
  }

  const deleteItem = (row: any) => {
    console.log(data);

    const confirmation: boolean = window.confirm("Are you sure you want to delete this record?");

    // Check the user's choice
    if (confirmation) {
        // If user clicks OK, call the deleteRecord function
        PatientService.deletePatient(row._id);
        setList([...list]);
    } else {
        // If user clicks Cancel, do nothing
        console.log("Deletion cancelled.");
    }
    

 
  };

  return (

    <TableContainer component={Paper}>

      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell align="center" key={column.value.toString()}>{column.label}</TableCell>
            ))}
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell align="center" key={column.value.toString()}>
                  {row[column.value]}
                </TableCell>
              ))}
              <TableCell align="center">
                <IconButton aria-label="View" onClick={() => displayPatient(row)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="View" onClick={() => displayVaccines(row)}>
                  <VaccinesIcon />
                </IconButton>


                <IconButton aria-label="Delete" onClick={() => deleteItem(row)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* {selectedPatient && (
        <PopUp mode="update" patientToUpdate={selectedPatient} />
      
      )} */}
      
      
    </TableContainer>


  );
};

export default TableComponent;
