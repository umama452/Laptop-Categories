// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import ProductListing from './pages/ProductListing';
// import ProductDetail from './pages/ProductDetail';
// import Cart from './pages/Cart';
// import Navbar from './components/Navbar';
// import { CartProvider } from './context/CartContext';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// function App() {
//   return (
//     <CartProvider>
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
        
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/products" element={<ProductListing />} />
//         <Route path="/products/:id" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   </CartProvider>
// );
// }


// export default App;


 import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
 import Home from "./pages/Home";
 import Login from "./pages/Login";
 import Signup from "./pages/Signup";
 import ProductListing from "./pages/ProductListing";
 import ProductDetail from "./pages/ProductDetail";
 import Cart from "./pages/Cart";
import LaptopCategories from './pages/LaptopCategories';
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import CategoryProducts from './pages/CategoryProducts';
function AppWrapper() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductListing />
            </PrivateRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <PrivateRoute>
              <ProductDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
     
       <Route
        path="/categories"
        element={
    <PrivateRoute>
      <LaptopCategories />
    </PrivateRoute>
  }
/>
<Route
  path="/categories/:category"
  element={
    <PrivateRoute>
      <CategoryProducts />
    </PrivateRoute>
  }
/>
 </Routes>
  </>
   );
 }

 export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppWrapper />
          </Router>
   </AuthProvider>
  );
} 


