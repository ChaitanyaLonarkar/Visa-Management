import { useState } from "react";
import React from "react";
import { GiSlashedShield } from "react-icons/gi";
export default function PaymentCard() {
  const [visaFeeOpen, setVisaFeeOpen] = useState(false);
  const [feesTaxesOpen, setFeesTaxesOpen] = useState(false);
  return (
    <>
      <div className="payment-card p-6 border-2 border-gray-200 rounded-xl">
        <h2 className="heading text-xl font-semibold border-b-2 border-gray-200 pb-3 mb-4">
          Payment details
        </h2>

        {/* Visa Fee Accordion */}
        <div className="mb-3">
          <div
            className="flex justify-between text-[15px] items-center cursor-pointer py-2"
            onClick={() => setVisaFeeOpen(!visaFeeOpen)}
          >
            <h3 className="font-medium text-gray-700">Visa Fee (1)</h3>
            <span className="text-gray-600">{visaFeeOpen ? "▲" : "▼"}</span>
            <p className="font-semibold text-gray-800">₹ 11,600</p>
          </div>
          {visaFeeOpen && (
            <div className=" flex justify-between text-gray-600 text-[15px] ">
              <p>Visa Price</p>
              <p>₹ 11,600</p>
            </div>
          )}
        </div>
        {/* Fees & Taxes Accordion */}
        <div>
          <div
            className="flex justify-between items-center text-[15px]  cursor-pointer py-2"
            onClick={() => setFeesTaxesOpen(!feesTaxesOpen)}
          >
            <h3 className="font-medium text-gray-700">Fees & Taxes</h3>
            <span className="text-gray-600">{feesTaxesOpen ? "▲" : "▼"}</span>
            <p className="font-semibold text-gray-800">₹ 1,180</p>
          </div>
          {feesTaxesOpen && (
            <div className=" flex flex-col gap-2 text-gray-600 text-[15px] ">
              <div className="flex justify-between ">
                <p>Service Fee</p>
                <p> ₹ 1,000</p>
              </div>
              <div className="flex justify-between">
                <p>GST</p>
                <p> ₹ 180</p>
              </div>
            </div>
          )}
        </div>

        <p className="text-xs  text-gray-500 mt-3">
          *Service fee is not inclusive of any courier, document handling fees.
        </p>

        <hr className="my-3" />

        <div className="flex justify-between items-center text-lg text-gray-800 font-semibold">
          <p className="text-blue-500">Grand total</p>
          <p className="text-blue-500">₹ 12,780</p>
        </div>

        <p className="text-[10px] text-gray-500 mt-2">
          <span className="mr-1">ℹ️</span>This is an estimated price for the
          order
        </p>

        <button className="w-full bg-blue-500 text-white font-semibold py-2 mt-4 rounded-lg  shadow-2xl hover:bg-blue-600">
          Apply for visa
        </button>

        <div className="flex gap-1 justify-center items-center mt-4 text-green-600">
            <GiSlashedShield className="text-xl" />
          <span className="text-sm font-semibold">
            BEST PRICE GUARANTEED
          </span>
        </div>
      </div>
    </>
  );
}
