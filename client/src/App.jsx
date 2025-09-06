import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Toaster } from 'sonner';

import Userlayout from './component/layout/Userlayout';
import Homes from './pages/Homes';
import UiLogin from './pages/UiLogin';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetail from './component/product/ProductDetail';
import Checkout from './component/cart/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AdminLayout from './component/admin/AdminLayout';
import AdminHomePage from './pages/AdminHomePage';
import UserManagement from './component/admin/UserManagement';
import ProductManagement from './component/admin/ProductManagement';
import EditProductPage from './component/admin/EditProductPage';
import OrderManagement from './component/admin/OrderManagement';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route element={<Userlayout />} path="/*">
          <Route index element={<Homes />} />
          <Route path="login" element={<UiLogin />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collections/:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="order/:id" element={<OrderDetailsPage />} />
          <Route path="my-orders" element={<MyOrdersPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
           <Route index element={<AdminHomePage />} />
           <Route path="users" element={<UserManagement />} />
           <Route path="products" element={<ProductManagement />} />
            <Route path="products/:id/edit" element={<EditProductPage />} />
            <Route path="orders" element={<OrderManagement/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
