import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PayPalButton from './PayPalButton';
const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneakers",
      size: "42",
      color: "White",
      price: 75,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 195,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: ""
  });

  const handleCreateCheckOut = (e) => {
    e.preventDefault();
    // You can add validation here if needed
    setCheckoutId(123); // Simulate creating a checkout session
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment Successful!", details);
    navigate('/order-confirmation');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tight">
      {/* Left Section - Form */}
      <div className="bg-white rounded-lg p-6 shadow">
        <h2 className="text-2xl font-semibold uppercase mb-6 text-gray-800">Checkout</h2>
        <form onSubmit={handleCreateCheckOut} className="space-y-6">
          
          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Contact Details</h3>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded bg-gray-100 text-gray-600 cursor-not-allowed"
              disabled
            />
          </div>

          {/* Delivery Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Delivery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  value={shippingAddress.firstName}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  value={shippingAddress.lastName}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm text-gray-700 mb-1">Address</label>
              <input
                type="text"
                value={shippingAddress.address}
                onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  value={shippingAddress.city}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Postal Code</label>
                <input
                  type="text"
                  value={shippingAddress.postalCode}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm text-gray-700 mb-1">Country</label>
              <input
                type="text"
                value={shippingAddress.country}
                onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                value={shippingAddress.phone}
                onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                required
              />
            </div>
          </div>

          {/* Payment Section */}
          <div className="pt-4">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition duration-300"
              >
                Continue to Payment
              </button>
            ) : (
              <div className="text-center space-y-4">
                <h3 className="text-md font-semibold text-green-600">Pay with PayPal Enabled</h3>
                <PayPalButton
  amount={cart.totalPrice.toString()}
  onSuccess={handlePaymentSuccess}
  onError={() => alert("Payment Failed! Try again later.")}
/>

              </div>
            )}
          </div>
        </form>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg">
  <h3 className="text-lg mb-4">Order Summary</h3>
  <div className="border-t py-4 mb-4">
    {cart.products.map((product, index) => (
      <div
        key={index}
        className="flex items-start justify-between py-2 border-b"
      >
        <div className="flex items-start">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-24 object-cover mr-4"
          />
          <div>
            <h3 className="text-md">{product.name}</h3>
            <p className="text-gray-500">Size: {product.size}</p>
            <p className="text-gray-500">Color : {product.color}</p>
          </div>
        </div>
        <p className="text-xl">${product.price?.toLocaleString()}</p>
      </div>
    ))}
  </div>
  <div className="flex justify-between items-center text-lg mb-4">
  <p>Subtotal</p>
  <p>${cart.totalPrice?.toLocaleString()}</p>
</div>

<div className="flex justify-between items-center text-lg">
  <p>Shipping</p>
  <p>Free</p>
</div>
<div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
  <p>Total</p>
  <p>${cart.totalPrice?.toLocaleString()}</p>
</div>

</div>

    </div>
  );
};

export default Checkout;
