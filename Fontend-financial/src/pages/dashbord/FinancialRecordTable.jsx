import React from 'react'
import { useFinancialRecords } from "../../contexts/financial.context"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FinancialRecordTable = () => {
  //Remove Record
  const {records, deleteFinancialRecord} = useFinancialRecords();
  const navigate = useNavigate();
  
  const handleDelete = (record) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You won't be able to revert this! whith ID: ${record.id}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFinancialRecord(record.id);
        Swal.fire(
          'Deleted!',
          `Record with ID: ${record.id} has been deleted.`,
          'success'
        );
      }
    });
  }

const handleEdit = (record) => {
  navigate(`/editRecordForm/${record.id}`);
}

  const ADate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }
  return (
    <table class="table-auto">
      <thead>
        <tr>
          <th>userID</th>
          <th>date</th>
          <th>description</th>
          <th>amount</th>
          <th>category</th>
          <th>paymentMethod</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {records &&
          records.map((record) => (
            <tr key={record.id} className="hover:bg-white">
              <td className="py-2 px-4 border-b">{record.userID}</td>
              <td className="py-2 px-4 border-b">{ADate(record.date)}</td>
              <td className="py-2 px-4 border-b">{record.description}</td>
              <td className="py-2 px-4 border-b">{record.amount}</td>
              <td className="py-2 px-4 border-b">{record.category}</td>
              <td className="py-2 px-4 border-b">{record.paymentMethod}</td>
              <td className="py-2 px-4 border-b">
                <button className='hover:text-blue-500'
                onClick={() => handleEdit(record)}>Edit</button>
              </td>
              <td className="py-2 px-4 border-b">
                <button className= 'hover:text-red-500'
                onClick={() => handleDelete(record)}>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default FinancialRecordTable