import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../store/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  console.log(authCtx);

  const auth = getAuth();
  const handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => navigate("/account"))
      .catch((error) => {
        setErrorMessage(error.message.slice(22, -2));
      });
  };
  return (
    <div>
      <h1> Login</h1>
      <p>{errorMessage}</p>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
