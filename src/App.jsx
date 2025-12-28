import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout"
import AdminLayout from './layouts/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashBoard from './pages/admin/AdminDashBoard';
import BlogDetails from './pages/BlogDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element = {<BlogDetails />} />

        </Route>

        <Route element={<AdminLayout />}>

          <Route path="/admin/login/" element={<AdminLogin/>} />
          <Route path="/admin/dashBoard/" element={<AdminDashBoard/>} />

        </Route>



      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App
