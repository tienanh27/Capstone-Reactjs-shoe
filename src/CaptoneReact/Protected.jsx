import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  const token = localStorage.getItem("token");
  // const user = useSelector((state) => state.auth.user);

  // check token get profile neu nhu token co
  // co thi giu nguyen trang
  // logout
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;
