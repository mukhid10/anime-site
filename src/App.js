import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar";
import Profile from "./components/Profile";
import Register from "./components/Register";

function App() {
  // const dataRegister = JSON.parse(window.localStorage.getItem("register"));
  // console.log(dataRegister);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<Login />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
