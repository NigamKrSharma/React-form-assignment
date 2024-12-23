import React from "react";
import { Field, ErrorMessage } from "formik";

const AddressStep = () => (
  <div className="address-form">
    <h2>Please Enter Your Premises Address</h2>
    <div className="form-group">
      <label htmlFor="address">Address</label>
      <Field id="address" name="address" className="form-add" />
      <ErrorMessage name="address" component="div" className="error" />
    </div>
    <div className="ct-cod-grp">
      <div className="form-group">
        <label htmlFor="city">City</label>
        <Field id="city" name="city" className="form-add" />
        <ErrorMessage name="city" component="div" className="error" />
      </div>
      <div className="form-group">
        <label htmlFor="postalCode">Postal Code</label>
        <Field
          className="form-add"
          type="text"
          id="postalCode"
          name="postalCode"
          placeholder="Enter postal code"
        />
        <ErrorMessage name="postalCode" component="div" className="error" />
      </div>
    </div>
  </div>
);

export default AddressStep;
