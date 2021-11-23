import { Formik, Form } from "formik";
import React from "react";
import FormControl from "./form/FormControl";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNewProductAction } from "./../redux/actions/productAction";

const base_url = "http://localhost:3051/api/";
function AddProduct(props) {
  let dispatch = useDispatch();
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
  let initialValues = {
    product_name: "",
    product_price: "",
  };

  let saveNewProduct = async (values) => {
    const url = base_url + "add-new-product";
    console.log(url);
    try {
      let result = await axios.post(url, values);
      dispatch(addNewProductAction(result.data.result));
    } catch (error) {
      console.log(error);
    }
  };
  let onSubmit = (values, onSubmitProps) => {
    saveNewProduct(values);
  };

  return (
    <>
      <button onClick={() => props.history.push("/")}>View Product List</button>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
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

export default AddProduct;
