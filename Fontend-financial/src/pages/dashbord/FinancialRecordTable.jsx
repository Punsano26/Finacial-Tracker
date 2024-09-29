import React from "react";
import { useFinancialRecords } from "../../contexts/financial.context";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const FinancialRecordTable = () => {
  //Remove 
  const { records, deleteFinancialRecord } = useFinancialRecords();
  const navigate = useNavigate();

  const handleDelete = (record) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this! whith ID: ${record.id}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFinancialRecord(record.id);
        Swal.fire(
          "Deleted!",
          `Record with ID: ${record.id} has been deleted.`,
          "success"
        );
      }
    });
  };

  const handleEdit = (record) => {
    navigate(`/editRecordForm/${record.id}`);
  };

  const ADate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
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
              <tr
                key={record.id}
                className={`hover:bg-neutral-100 ${
                  index % 2 === 0 ? "bg-white" : "bg-neutral-50"
                }`}
              >
                <td className="py-3 px-4 border-b">{record.userID}</td>
                <td className="py-3 px-4 border-b">{ADate(record.date)}</td>
                <td className="py-3 px-4 border-b">{record.description}</td>
                <td className="py-3 px-4 border-b">{record.amount}</td>
                <td className="py-3 px-4 border-b">{record.category}</td>
                <td className="py-3 px-4 border-b">{record.paymentMethod}</td>

                <td className="py-3 px-4 border-b">
                  <svg
                    class="h-8 w-8 text-slate-500 hover:text-blue-500"
                    onClick={() => handleEdit(record)}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </td>

                <td className="py-3 px-4 border-b">
                  <svg
                    class="h-8 w-8 text-gray-500 hover:text-red-500"
                    onClick={() => handleDelete(record)}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <polyline points="3 6 5 6 21 6" />{" "}
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
                    <line x1="10" y1="11" x2="10" y2="17" />{" "}
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialRecordTable;
