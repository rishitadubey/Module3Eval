import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const users = [
  { role: "admin", email: "admin@gmail.com", password: "admin1234" },
  { role: "customer", email: "customer@gmail.com", password: "customer1234" }
];

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = () => {
    const found = users.find(
      u => u.email === form.email && u.password === form.password
    );

    if (!found) return alert("Invalid credentials");

    login(found);

    found.role === "admin"
      ? navigate("/admin/dashboard")
      : navigate("/customers/dashboard");
  };

  return (
    <div>
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}