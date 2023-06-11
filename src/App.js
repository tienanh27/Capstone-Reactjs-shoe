import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./CaptoneReact/Register";
import Login from "./CaptoneReact/Login";
import Profile from "./CaptoneReact/Profile";
import Protected from "./CaptoneReact/Protected";

function App() {
  return (
    <div className="App">
      <Routes>
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
