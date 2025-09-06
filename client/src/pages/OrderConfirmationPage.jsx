import React from 'react';

const checkout = {
  _id: "12323",
  createdAt: new Date("2024-12-13"), // use specific date to match screenshot
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/seed/jacket/60",
    },
    {
      productId: "2",
      name: "T-shirt",
      color: "black",
      size: "M",
      price: 120,
      quantity: 2,
      image: "https://picsum.photos/seed/tshirt/60",
    },
  ],
  shippingAddress: {
    address: "123 Fashion Street",
    city: "New York",
    country: "USA"
  },
  paymentMethod: "PayPal"
};

const OrderConfirmationPage = () => {
  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString("en-GB"); // DD/MM/YYYY
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You for Your Order!
      </h1>

      {/* Card Container */}
      <div className="max-w-3xl mx-auto border border-gray-200 rounded-md p-6 space-y-6">
        {/* Order info header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-md font-semibold text-gray-800">Order ID: {checkout._id}</h2>
            <p className="text-sm text-gray-500">
              Order date: {new Date(checkout.createdAt).toLocaleDateString("en-GB")}
            </p>
          </div>
          <p className="text-sm font-medium text-emerald-700">
            Estimated Delivery: {calculateEstimatedDelivery(checkout.createdAt)}
          </p>
        </div>

        {/* Items */}
        <div className="space-y-4">
          {checkout.checkoutItems.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover" />
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-800">${item.price}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment and Delivery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-1">Payment</h3>
            <p className="text-sm text-gray-600">{checkout.paymentMethod}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-1">Delivery</h3>
            <p className="text-sm text-gray-600">
              {checkout.shippingAddress.address},<br />
              {checkout.shippingAddress.city}, {checkout.shippingAddress.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
