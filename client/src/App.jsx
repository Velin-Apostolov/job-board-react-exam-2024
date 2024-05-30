import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import CreateOffer from "./components/create-offer/CreateOffer";
import MyProfile from "./components/my-profile/MyProfile";
import Offers from "./components/offers/Offers";
import Logout from "./components/logout/Logout";

function App() {

  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/create" element={<CreateOffer />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  )
}

export default App;