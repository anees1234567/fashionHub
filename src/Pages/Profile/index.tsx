import { useState } from "react";
import {  FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake } from "react-icons/fa";

import { useAuth } from "../../Auth/useAuth";

export default function ProfileSection() {
  const [open, setOpen] = useState(false);

const{userData}=useAuth()


 
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10 relative">
      <div className="flex items-center space-x-6">
        <img
          src="https://www.sheridanbowles.co.uk/wp-content/uploads/2023/04/avatar-1.jpg"
          alt="profile"
          className="w-24 h-24 rounded-full border-4 border-blue-100 shadow-md object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800"></h2>
          <p className="text-gray-500">Welcome! {userData?.name} 👋 </p>
          <div className="mt-3 space-y-2 text-gray-600">
            <p className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-600" />
              <span>{userData?.email}</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaPhone className="text-blue-600" />
              <span>{userData?.mobile}</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaBirthdayCake className="text-blue-600" />
              <span>{userData?.dob}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="bg-blue-50 p-4 rounded-xl">
          <p className="text-lg font-bold text-blue-700">25</p>
          <p className="text-gray-500 text-sm">Orders</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl">
          <p className="text-lg font-bold text-blue-700">₹12,350</p>
          <p className="text-gray-500 text-sm">Spent</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl">
          <p className="text-lg font-bold text-blue-700">3</p>
          <p className="text-gray-500 text-sm">Wishlist</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl">
          <p className="text-lg font-bold text-blue-700">Gold</p>
          <p className="text-gray-500 text-sm">Membership</p>
        </div>
      </div>


    </div>
  );
}