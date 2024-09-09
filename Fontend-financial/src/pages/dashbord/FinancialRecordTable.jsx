import React from 'react'
import { useFinancialRecords } from "../../contexts/financial.comtext"
const FinancialRecordTable = () => {
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
        </tr>
      </thead>
      <tbody>
        {records &&
          records.map((record) => (
            <tr key={record.id} className="hover:bg-black">
              <td className="py-2 px-4 border-b">record.userID</td>
              <td className="py-2 px-4 border-b">{FormData(record.date)}</td>
              <td className="py-2 px-4 border-b">record.description</td>
              <td className="py-2 px-4 border-b">record.amount</td>
              <td className="py-2 px-4 border-b">record.category</td>
              <td className="py-2 px-4 border-b">record.paymentMethod</td>
              <td className="py-2 px-4 border-b">
                <button>Edit</button>
              </td>
              <td className="py-2 px-4 border-b">
                <button>Edit</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default FinancialRecordTable