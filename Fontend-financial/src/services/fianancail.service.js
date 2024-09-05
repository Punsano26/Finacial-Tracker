import api from "./api";
const FINANCIAL_API_URL = import.meta.env.VITE_FINANCIAL_API_URL;

//get all financial record 
const getAllFinancialRecords = async (userID) => {
    return await api.get(`${FINANCIAL_API_URL}`);
};

//get all financial record by user id
const getFinancialRecordByuserID = async (userID) => {
    return await api.get(`${FINANCIAL_API_URL}?userID=${userID}`);
}


//get a finacial record by id
const getFinancialRecordById = async (id) => {
    return await api.get(`${FINANCIAL_API_URL}/${id}`);
}


//create a new record
const createFinancialRecord = async (record) => {
    return await api.post(`${FINANCIAL_API_URL}`, record);
}

//update a reccord
const updateFinancialRecord = async (record) => {
    return await api.put(`${FINANCIAL_API_URL}/${id}`, record);
}

//delete a record
const deleteFinancialRecord = async (record) => {
    return await api.delete(`${FINANCIAL_API_URL}/${id}`, record);
}


const FinancialService = {
    getAllFinancialRecords,
    getFinancialRecordByuserID,
    getFinancialRecordById,
    createFinancialRecord,
    updateFinancialRecord,
    deleteFinancialRecord,
}

export default FinancialService;
