import { createContext, useContext, useEffect, useState } from "react";
import FinancialService from "../services/fianancail.service";
import { useUser } from "@clerk/clerk-react";

export const FinancialRecordContext = createContext();

export const FinancialRecordProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const { user } = useUser();
  const fetChRecords = async () => {
    if (!user) return;
    try {
      const response = await FinancialService.getFinancialRecordByuserID(
        user.id
      );
      if (response.status === 200) {
        setRecords(response.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetChRecords();
  }, [user]);

  const addRecoeord = async (record) => {
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
      const response = await FinancialService.updateRecord(id, newRecord);
      if (response.status === 200) {
        (prev) =>
          prev.map((record) => {
            if (record.id === id) {
              return newRecord;
            } else {
              return record;
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
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
  return (
    <FinancialRecordContext.Provider
      value={{
        records,
        addRecoeord,
        updateRecord,
        deleteRecord,
      }}
    >
      {children}
    </FinancialRecordContext.Provider>
  );
};

export const useFinancialRecords = () => useContext(FinancialRecordContext);
