import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../contexts/financial.context";
import AddRecordForm from "./AddRecordForm";
import FinancialRecordTable from "./FinancialRecordTable";
import { useMemo } from "react";

const Dashbord = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      const amount = Number(record.amount);
      totalAmount += amount;
    });
    return totalAmount;
  });
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="">Welcome <span className="text-yellow-400">{user?.firstName}</span>! Here is your financial record:</div>
      <AddRecordForm />
      <div>
        <span className="text-red-400">Total Monthly : </span> 
         {totalMonthly}
      </div>
      <FinancialRecordTable />
    </div>
  );
};

export default Dashbord;
