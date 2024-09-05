import React, { useState } from "react";


const AddFinanciallist = () => {
  const [formData, setFormData] = useState({
    userID: "",
    date: "",
    description: "",
    amount: "",
    category: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="items-center justify-center min-h-screen p-10"
    style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-neutral-950 shadow-md rounded-lg">
      <div className="mb-4">
        <h2 className="font-mono text-amber-500 text-2xl font-bold mb-2 items-center justify-center flex">Add Financial List</h2>
        <label className="block text-amber-200 text-sm font-bold mb-2" htmlFor="userID">
          User ID
        </label>
        <input
          type="text"
          id="userID"
          name="userID"
          value={formData.userID}
          onChange={handleChange}
          className="bg-neutral-400 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-amber-200 text-sm font-bold mb-2" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="bg-neutral-400 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-amber-200 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="bg-neutral-400 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-amber-200 text-sm font-bold mb-2" htmlFor="amount">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="bg-neutral-400 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-amber-200 text-sm font-bold mb-2" htmlFor="category">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="bg-neutral-400 w-full px-3 py-2 border text-back rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-amber-200 text-sm font-bold mb-2" htmlFor="paymentMethod">
          Payment Method
        </label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
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
}

export default AddFinanciallist;
