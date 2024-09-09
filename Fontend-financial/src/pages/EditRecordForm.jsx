import { useState, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import  Swal  from 'sweetalert2';
import { useFinancialRecords } from '../contexts/financial.context';

const EditRecordForm = () => {
  const { records, updateFinancialRecord } = useFinancialRecords();
  const { id } = useParams();
  const navigate = useNavigate();
const [financials, setFinancials] = useState({
  date: '',
  description: '',
  amount: '',
  category: '',
  paymentMethod: '',
});

useEffect(() => {
  const recordId =Number(id);
  const record = records.find((record) => record.id === recordId);
  if (record) {
    const formattedDate = new Date(record.date).toISOString().split('T')[0];
    setFinancials({
      ...record,
      date: formattedDate,
    });
  }
},[id,records]);

const handleChange = (e) => {
  setFinancials({ ...financials, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await updateFinancialRecord(id, financials);
    Swal.fire({
      title: "Record Updated",
      text: "Record has been updated successfully",
      icon: "success",
      timer: 4000,
    })
    navigate('/');
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: error?.message || "An error occurred while updating the record",
      icon: "error"
    });
  }
};

  return (
    <div className="items-center justify-center min-h-screen p-10 text-black"
    style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-neutral-950 shadow-md rounded-lg"
    >
      <div className="mb-4">
        <h2 className="font-mono text-amber-500 text-2xl font-bold mb-2 items-center justify-center flex">
          Add Financial List
        </h2>
      </div>
      <div className="mb-4">
        <label
          className="block text-amber-200 text-sm font-bold mb-2"
          htmlFor="date"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={financials.date}
          onChange={handleChange}
          className="bg-neutral-400 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-amber-200 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={financials.description}
          onChange={handleChange}
          className="bg-neutral-400 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-amber-200 text-sm font-bold mb-2"
          htmlFor="amount"
        >
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={financials.amount}
          onChange={handleChange}
          className="bg-neutral-400 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-amber-200 text-sm font-bold mb-2"
          htmlFor="category"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={financials.category}
          onChange={handleChange}
          className="bg-neutral-400 w-full px-3 py-2 border text-back rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-amber-200 text-sm font-bold mb-2"
          htmlFor="paymentMethod"
        >
          Payment Method
        </label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={financials.paymentMethod}
          onChange={handleChange}
          className="bg-neutral-400 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a method</option>
          <option value="cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="Blank transfer">Blank Transfer</option>
        </select>
      </div>
      <button
        type="submit"
        className="font-mono w-full bg-amber-500 text-stone-950 py-2 px-4 rounded hover:bg-yellow-300 transition duration-700"
      >
        Updated
      </button>
    </form>
  </div>
  )
}

export default EditRecordForm