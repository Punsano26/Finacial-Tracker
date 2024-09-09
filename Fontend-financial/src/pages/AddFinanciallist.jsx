import React, { useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import Swal from "sweetalert2";

const AddFinanciallist = () => {
  const { user } = useUser();

  const [financials, setFiancials] = useState({
    userID: "",
    date: "",
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
        "http://localhost:9999/api/v1/financial/", 
        {...financials, userID: user.id,
      });
      if (response.status === 200) {
        Swal.fire({
          title: "Add financial list successfully",
          icon: "success",
          text: "Add financial list OK!",
        }).then(() => {
          window.location.reload();
        });
        setFiancials({
          userID: "",
          date: "",
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
    <div className="items-center justify-center min-h-screen p-10">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-neutral-950 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <h2 className="font-mono text-amber-500 text-2xl font-bold mb-2 items-center justify-center flex">
            Add Financial List
          </h2>
          <label
            className="block text-amber-200 text-sm font-bold mb-2"
            htmlFor="userID"
          >
            User ID
          </label>
          <input
            type="text"
            id="userID"
            name="userID"
            required
            value={financials.userID}
            onChange={handleChange}
            className="bg-neutral-400 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
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
};

export default AddFinanciallist;
