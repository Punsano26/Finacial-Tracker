import React from 'react'
import { useFinancialRecords } from "../../contexts/financial.context"
import { useNavigate } from 'react-router-dom';

const FinancialRecordTable = () => {
  //Remove Record
  const {records, deleteRecord} = useFinancialRecords();
  const navigate = useNavigate
  
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
              <td className="py-2 px-4 border-b">{record.date}</td>
              <td className="py-2 px-4 border-b">{record.description}</td>
              <td className="py-2 px-4 border-b">{record.amount}</td>
              <td className="py-2 px-4 border-b">{record.category}</td>
              <td className="py-2 px-4 border-b">{record.paymentMethod}</td>
              <td className="py-2 px-4 border-b">
                <button>Edit</button>
              </td>
              <td className="py-2 px-4 border-b">
                <button>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default FinancialRecordTable