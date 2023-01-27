import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Account from "./Pages/Account";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import SearchList from "./Pages/SearchList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SearchList />} />
            <Route path="login" element={<Login />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
