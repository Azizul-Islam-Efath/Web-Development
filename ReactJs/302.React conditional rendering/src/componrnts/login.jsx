import react from "react";
import Input from "./input";

function Login() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
