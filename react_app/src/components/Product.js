import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import EditProduct from "./EditProduct";
//function
function Product() {
  //   let [productList, setProductList] = useState();

  //   let saveNewProduct = (values) => {
  //     let _pi = [...productList];
  //     _pi.push(values);
  //     setProductList(_pi);
  //   };

  //   let removeProduct = (id) => {
  //     let _pi = [...productList];
  //     _pi.splice(id, 1);
  //     setProductList(_pi);
  //   };

  return (
    <>
      <Switch>
        <Route
          path="/edit-product/:id"
          render={(props) => <EditProduct {...props} />}
        />
        <Route
          path="/add-product"
          render={(props) => <AddProduct {...props} />}
        />
        <Route path="/" exact render={(props) => <ProductList {...props} />} />
      </Switch>
    </>
  );
}

export default Product;
