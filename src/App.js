import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./CaptoneReact/Register";
import Login from "./CaptoneReact/Login";
import Profile from "./CaptoneReact/Profile";
import Protected from "./CaptoneReact/Protected";
import Home from "./Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateUserInfo } from "./store/authSlice";
import userApi from "./services/userApi";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const getInfo = async () => {
      try {
        const res = await userApi.getInfo();
        console.log(res.content);
        dispatch(updateUserInfo(res.content));
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/info"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
