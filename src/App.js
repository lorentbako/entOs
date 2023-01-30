import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./Auth/Auth";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import SearchList from "./Pages/SearchList";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {authCtx.currentUser && <Route index element={<SearchList />} />}
            {!authCtx.currentUser && <Route path="login" element={<Login />} />}
            <Route path="*" element={<SearchList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
