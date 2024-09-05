import React from 'react'

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
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  );
}

export default FinancialRecordTable