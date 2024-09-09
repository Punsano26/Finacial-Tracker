import { createContext, useContext, useEffect, useState } from "react";
import FinancialService from "../services/financial.service"; 
import { useUser } from "@clerk/clerk-react";

export const FinancialRecordContext = createContext();

export const FinancialRecordProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const { user } = useUser();

    // ฟังก์ชันสำหรับดึงข้อมูลจาก backend
  const fetchRecords = async () => {
    if (!user) return;
    try {
      const response = await FinancialService.getAllFinancialRecords(
        user.id
      );
      if (response.status === 200) {
        setRecords(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRecords();
  }, [user]);

  const addRecoord = async (record) => {
    try {
      const response = await FinancialService.addRecoeord(record);
      if (response.status === 200) {
        setRecords((prev) => [...prev, response.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateRecord = async (id, newRecord) => {
    try {
      const response = await FinancialService.updateRecord(
        id, 
        newRecord
      );
      if (response.status === 200) {
       setRecords((prev) =>
      prev.map((record) => (record.id === id? newRecord : record))
      );
    }
  } catch (error) {
      console.log(error);
    }
};

const deleteRecord = async (id) => {
  try {
    const response = await FinancialService.deleteRecord(id);
    if (response.status === 200) {
      setRecords((prev) => prev.filter((record) => record.id !== id));
    }
  } catch (error) {
    console.log(error);
  }
};

return (
  <FinancialRecordContext.Provider
    value={{
      records,
      addRecoord,
      updateRecord,
      deleteRecord,
    }}
  >
    {children}
  </FinancialRecordContext.Provider>
);
};
export const useFinancialRecords = () => useContext(FinancialRecordContext);
