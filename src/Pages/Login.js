import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const auth = getAuth();
  signInWithEmailAndPassword(auth, credentials.email, credentials.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  return (
    <div>
      <h1> Login</h1>

      <form onSubmit={signInWithEmailAndPassword}>
        <input placeholder="E-mail" value={credentials.email} />
        <input placeholder="Password" value={credentials.password} />
        <button type="submit" onSubmit={() => setCredentials()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
