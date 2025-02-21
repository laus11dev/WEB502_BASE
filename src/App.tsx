import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
 
import LayoutClient from "./pages/layouts/LayoutClient";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LayoutAdmin from "./pages/layouts/LayoutAdmin";
import { Toaster } from "react-hot-toast";
import ClubListClient from "./pages/ClubListClient";
import ClubList from "./pages/school/ClubList";
import AddClub from "./pages/school/AddClub";
import EditClub from "./pages/school/EditClub";
// import 'antd/dist/antd.css';

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<Home />} />
          <Route path="clubs" element={<ClubListClient />} />         
          <Route path="register" element={<Register />} />        
          <Route path="login" element={<Login />} />               
        </Route>

        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="clubs" element={<ClubList />} />         
          <Route path="clubs/add" element={<AddClub />} />      
          <Route path="clubs/edit/:id" element={<EditClub />} /> 
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
