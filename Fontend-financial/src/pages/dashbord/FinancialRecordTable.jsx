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
    <div className="overflow-x-auto p-4">
    <table className="table w-full border-collapse border-spacing-0">
      {/* Table Head */}
      <thead>
        <tr className="bg-neutral text-white">
          <th className="py-3 px-4 text-left">User ID</th>
          <th className="py-3 px-4 text-left">Date</th>
          <th className="py-3 px-4 text-left">Description</th>
          <th className="py-3 px-4 text-left">Amount</th>
          <th className="py-3 px-4 text-left">Category</th>
          <th className="py-3 px-4 text-left">Payment Method</th>
          <th className="py-3 px-4 text-left">Edit</th>
          <th className="py-3 px-4 text-left">Delete</th>
        </tr>
      </thead>
      {/* Table Body */}
      <tbody>
        {records &&
          records.map((record, index) => (
            <tr key={record.id} className={`hover:bg-neutral-100 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>
              <td className="py-3 px-4 border-b">{record.userID}</td>
              <td className="py-3 px-4 border-b">{ADate(record.date)}</td>
              <td className="py-3 px-4 border-b">{record.description}</td>
              <td className="py-3 px-4 border-b">{record.amount}</td>
              <td className="py-3 px-4 border-b">{record.category}</td>
              <td className="py-3 px-4 border-b">{record.paymentMethod}</td>
              <td className="py-3 px-4 border-b">
                <button
                  className="btn btn-sm btn-outline btn-info"
                  onClick={() => handleEdit(record)}
                >
                  Edit
                </button>
              </td>
              <td className="py-3 px-4 border-b">
                <button
                  className="btn btn-sm btn-outline btn-error"
                  onClick={() => handleDelete(record)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
  );
}

export default FinancialRecordTable