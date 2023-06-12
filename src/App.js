import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./CaptoneReact/Register";
import Login from "./CaptoneReact/Login";
import Profile from "./CaptoneReact/Profile";
import Protected from "./CaptoneReact/Protected";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/info"
          element={
            <Protected >
              <Profile />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
