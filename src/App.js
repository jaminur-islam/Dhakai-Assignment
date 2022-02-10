import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import PrivetRouter from "./components/PrivetRouter/PrivetRouter";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivetRouter>
                <Dashboard handleInputValue={handleInputValue}></Dashboard>
              </PrivetRouter>
            }
          >
            <Route path="/" element={<Products inputValue={inputValue} />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>not found page</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
