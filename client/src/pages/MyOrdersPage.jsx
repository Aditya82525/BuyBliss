import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            { name: "Product 1", image: "https://picsum.photos/500/500?random=1" },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "34567",
          createdAt: new Date(),
          shippingAddress: { city: "San Francisco", country: "USA" },
          orderItems: [
            { name: "Product 2", image: "https://picsum.photos/500/500?random=2" },
          ],
          totalPrice: 120,
          isPaid: true,
        },
      ];
      setOrders(mockOrders);
    }, 1000);
  }, []);
  const handleRowClick=(orderId)=>{
        navigate(`/order/${orderId}`)
  }
  return (
  <div className="max-w-7xl mx-auto px-4 mb-4">
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">My Orders</h2>
      <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200 bg-white">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Shipping</th>
              <th className="px-6 py-3">Items</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id} onClick={()=>handleRowClick(order._id)} className="border-t hover:bg-gray-50 transition cursor-pointer">
                  <td className="px-6 py-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-12 h-12 rounded object-cover shadow-sm"
                    />
                  </td>
                  <td className="px-6 py-4 font-mono">#{order._id}</td>
                  <td className="px-6 py-4">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    {order.shippingAddress.city}, {order.shippingAddress.country}
                  </td>
                  <td className="px-6 py-4">
                    {order.orderItems.map((item) => item.name).join(', ')}
                  </td>
                  <td className="px-6 py-4">${order.totalPrice}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      order.isPaid ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.isPaid ? 'Paid' : 'Pending'}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center px-6 py-8 text-gray-400">
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

};

export default MyOrdersPage;
