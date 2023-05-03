import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Policy from "./pages/Policy.js";
import PageNotFound from "./pages/PageNotFound.js";
import Register from "./pages/auth/Register.js";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/Routes/PrivateRoute";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserDashboard from "./pages/user/UserDashboard";
import AdminRoute from "./components/Routes/AdminRoute";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import UserProfile from "./pages/user/UserProfile";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/policy" element={<Policy/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="user" element={<UserDashboard />} />
        <Route path="user/profile" element={<UserProfile />} />
        <Route path="user/orders" element={<Orders />} />
      </Route> 
      <Route path="/dashboard" element={<AdminRoute />}>
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/create-category" element={<CreateCategory />} />
        <Route path="admin/create-product" element={<CreateProduct />} />
        <Route path="admin/users" element={<Users />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    
    </>
  );
}

export default App;
