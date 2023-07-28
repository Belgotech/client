import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from ".";

import Footer from "./Footer";


const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Home = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);


  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="min-h-screen  gradient-bg-welcome ">
      <div className="contact  justify-center items-center">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient text-center contact-h2 ">
          Contact Us
        </h1>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-center items-center blue-glassmorphism">
          <Link to="facebook.com" className="text-white contact-link" >Facebook</Link>
        </div>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-center items-center blue-glassmorphism">
          <Link to="facebook.com" className="text-white" >Whatsapp</Link>
        </div>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-center items-center blue-glassmorphism">
          <Link to="facebook.com" className="text-white" >twitter</Link>
        </div>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-center items-center blue-glassmorphism">
          <Link to="facebook.com" className="text-white" >Instagram</Link>
        </div>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-center items-center blue-glassmorphism">
          <Input placeholder="Name" name="addressTo" type="text" handleChange={handleChange} />
          <Input placeholder="email" name="amount" type="email" handleChange={handleChange} />
          <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

          <div className="h-[1px] w-full bg-gray-400 my-2" />

          {isLoading
            ? <Loader />
            : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
        </div>
      </div>

      <Footer />
    </div>
  )
};

export default Home;