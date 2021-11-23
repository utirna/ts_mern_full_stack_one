import axios from "axios";
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  addProductListAction,
  removeProductAction,
} from "../redux/actions/productAction";
const base_url = "http://localhost:3051/api/";
function ProductList({ history }) {
  let productList = useSelector((state) => state.allProduct.products);
  let isLoaded = useSelector((state) => state.allProduct.isDefaultLoaded);
  let dispatch = useDispatch();

  let removeProduct = async (index, id) => {
    let url = base_url + "remove-product";
    let sendData = {
      id: id,
    };
    try {
      let { data } = await axios.delete(url, { data: sendData });
      if (data.result === 1) {
        dispatch(removeProductAction(index));
      } else {
        alert("Unable to delete product");
      }
    } catch (error) {
      console.log(error);
    }
  };
  let editProduct = (index, id) => {
    history.push("/edit-product/" + id);
  };

  let getProductList = async () => {
    let url = base_url + "product-list";
    try {
      let { data } = await axios.get(url);
      let newListData = {
        products: data.list,
        isDefaultLoaded: 1,
      };
      dispatch(addProductListAction(newListData));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoaded === 0) getProductList();
  }, []);

  return (
    <>
      <button onClick={() => history.push("/add-product")}>
        Add New Product
      </button>
      <section className="product">
        {productList.length > 0 ? (
          productList.map((product, index) => {
            return (
              <div className="product-card" key={index}>
                <p>{product.product_name}</p>
                <span>{product.product_price}</span>
                <button onClick={() => removeProduct(index, product._id)}>
                  DELETE
                </button>
                <button onClick={() => editProduct(index, product._id)}>
                  EDIT
                </button>
              </div>
            );
          })
        ) : (
          <div>Not Product List Found</div>
        )}
      </section>
    </>
  );
}

export default ProductList;
