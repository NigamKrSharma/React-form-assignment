import React from "react";
import { Field, ErrorMessage } from "formik";

const SelectDateStep = () => (
  <div>
    <h2>Select Date</h2>
    <div className="form-group">
      <label htmlFor="date">Date</label>
      <Field id="date" name="date" type="date" className="form-control" />
      <ErrorMessage name="date" component="div" className="error" />
    </div>
  </div>
);

export default SelectDateStep;
