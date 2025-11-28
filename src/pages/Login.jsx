import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // Simple dummy authentication
    if (username === "student" && password === "123") {
      localStorage.setItem("loggedIn", true);
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials! Use username: student, password: 123");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Student Portal Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
