import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/theme/Layout';
import UserManagement from "./pages/UserManagement/UserManagement";
import AddUser from "./pages/UserManagement/AddUser";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import UserDetail from "./pages/UserManagement/UserDetail";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./routes/PrivateRoute";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute component={Layout} />} >
            <Route path="/user-management" element={<PrivateRoute component={UserManagement}/>} />
            <Route path="/user-management/add" element={<PrivateRoute component={AddUser}/>} />
            <Route path="/user-management/detail/:userId" element={<PrivateRoute component={UserDetail}/>} />
            <Route path="/faq" element={<PrivateRoute component={Faq}/>} />
            <Route path="/contact" element={<PrivateRoute component={Contact}/>} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
