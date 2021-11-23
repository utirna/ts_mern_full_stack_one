import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import FormControl from "./form/FormControl";
import axios from "axios";
import { useSelector } from "react-redux";

const base_url = "http://localhost:3051/api/";
function EditProduct({ match, history }) {
  let productList = useSelector((state) => state.allProduct.products);
  let forArray = [
    {
      type: "text",
      name: "product_name",
      label: "Product Name",
    },
    {
      type: "number",
      name: "product_price",
      label: "Product Price",
    },
  ];
  let [editProduct, setEditProduct] = useState({
    product_name: "",
    product_price: "",
    _id: "",
  });

  let onSubmit = (values, onSubmitProps) => {
    console.log(values);
  };

  let getEditData = () => {
    let id = match.params.id;
    let _editProduct = productList.filter((product) => product._id === id);
    if (_editProduct.length === 0) {
      alert("product not found");
      history.push("/");
    } else {
      _editProduct = _editProduct[0];
      setEditProduct(_editProduct);
    }
  };
  useEffect(() => {
    getEditData();
  }, []);
  return (
    <>
      <button onClick={() => history.push("/")}>View Product List</button>
      <h4>Edit A product</h4>
      <Formik
        initialValues={editProduct}
        onSubmit={onSubmit}
        enableReinitialize
      >
        <Form>
          {forArray.map((field, index) => {
            return <FormControl key={index} {...field} />;
          })}
          <button type="submit">Save Product</button>
        </Form>
      </Formik>
    </>
  );
}

export default EditProduct;
