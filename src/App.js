import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import PrivetRouter from "./components/PrivetRouter/PrivetRouter";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivetRouter>
                <Dashboard></Dashboard>
              </PrivetRouter>
            }
          >
            <Route path="/" element={<Products />} />
            <Route path="/dashboard/catalog" element={<h1> Catalog</h1>} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>not found page</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
