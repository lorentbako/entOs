import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/Auth";
import { useNavigate } from "react-router-dom";
import styles from "./../Styles/Login.module.css";

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
      <form onSubmit={handleLogin}>
        <div className={styles.container}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.inputAreas}
              name="email"
              type="email"
              placeholder="your@email.com"
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              className={styles.inputAreas}
              name="password"
              type="password"
              placeholder="********"
            />
          </div>
          <button className={styles.loginButton} type="submit">
            Log in
          </button>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;
