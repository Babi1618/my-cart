import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const { loading } = useGlobalContext() as any;
  if (loading) {
    return (
      <div className="loading">
        <h1>... Loading ... </h1>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
