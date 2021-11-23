import React from "react";
import { BrowserRouter } from "react-router-dom";
import Product from "./components/Product";
//function
function App() {
  return (
    <>
      <BrowserRouter>
        <Product />
      </BrowserRouter>
    </>
  );
}

export default App;
