import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("loggedIn");
    navigate("/");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Welcome to Student Dashboard</h1>
      <p>You are successfully logged in!</p>
      
      <button onClick={logout}>Logout</button>
    </div>
  );
}
