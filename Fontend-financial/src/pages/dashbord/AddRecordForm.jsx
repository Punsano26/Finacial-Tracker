import React, { useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import Swal from "sweetalert2";

const AddRecordForm = () => {
  const { user } = useUser();

  const [financials, setFiancials] = useState({
    date: new Date().toISOString().split("T")[0],
    description: "",
    amount: "",
    category: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setFiancials({ ...financials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://finacial-tracker.onrender.com/api/v1/financial/", 
        {...financials, userID: user.id,
      });
      if (response.status === 200) {
        Swal.fire({
          title: "Add financial list successfully",
          icon: "success",
          text: "Add financial list OK!",
          timer: 5000
        }).then(() => {
          window.location.reload();
        });
        setFiancials({
          date: new Date().toISOString().split("T")[0],
          description: "",
          amount: "",
          category: "",
          paymentMethod: "",
        });
      }
    } catch (error) {
      Swal.fire({
        text: "Add financial list failed",
        icon: "error",
        title: error?.response?.data?.message || error.message,
      });
    }

    
  };
  return (
    <div className="font-serif text-black">
      add record page
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
            required
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
            required
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
            required
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
            required
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
            required
            value={financials.paymentMethod}
            onChange={handleChange}
            className="bg-neutral-400 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a method</option>
            <option value="cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>
        <button
          type="submit"
          className="font-mono w-full bg-amber-500 text-stone-950 py-2 px-4 rounded hover:bg-yellow-300 transition duration-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecordForm
