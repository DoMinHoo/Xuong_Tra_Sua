import React from "react";
import Header from "../../../components/cient/header";
import Footer from "../../../components/cient/footer";

const Checkout: React.FC = () => {
  return (
    <div>
        <Header/>
        <div className="max-w-6xl mx-auto p-10 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Billing Details */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Billing details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">First Name</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Last Name</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Company Name (Optional)</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Country / Region</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500">
                <option>Sri Lanka</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Street address</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Town / City</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Province</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500">
                <option>Western Province</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">ZIP code</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Phone</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email address</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Additional information</label>
              <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"></textarea>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="border p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <span>Asgaard sofa x 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <hr />
            <div className="flex justify-between my-4">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span className="text-yellow-600">Rs. 250,000.00</span>
            </div>
            <hr className="my-4" />
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio text-yellow-600" />
                <span>Direct Bank Transfer</span>
              </label>
              <p className="text-sm text-gray-600">Make your payment directly into our bank account.</p>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio text-yellow-600" />
                <span>Cash On Delivery</span>
              </label>
            </div>
            <button className="w-full mt-4 bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default Checkout;
