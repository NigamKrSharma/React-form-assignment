import React from "react";
import { Field, ErrorMessage } from "formik";

const PremiseTypeStep = ({ setFieldValue, values }) => {
  const handlePremiseTypeSelect = (type) => {
    setFieldValue("premiseType", type);
  };

  return (
    <div className="premise-type-step">
      <h2>Premise Type</h2>
      <div className="premise-options">
        <button
          id="opt-btn"
          type="button"
          onClick={() => handlePremiseTypeSelect("Residential")}
          className={values.premiseType === "Residential" ? "active" : ""}
        >
          Residential Society
        </button>
        <button
          id="opt-btn"
          type="button"
          onClick={() => handlePremiseTypeSelect("Commercial")}
          className={values.premiseType === "Commercial" ? "active" : ""}
        >
          Apartments
        </button>
        <button
          id="opt-btn"
          type="button"
          onClick={() => handlePremiseTypeSelect("Industrial")}
          className={values.premiseType === "Industrial" ? "active" : ""}
        >
          Rural Homes
        </button>
      </div>

      {values.premiseType && (
        <div className="premise-details">
          <div className="form-group">
            <label htmlFor="premiseDetail">Premise Details</label>
            <Field
              type="text"
              id="premiseDetail"
              name="premiseDetail"
              placeholder="Enter details about the premise"
            />
            <ErrorMessage
              name="premiseDetail"
              component="div"
              className="error"
            />
          </div>
          <h2>Please Enter Your Premises Address</h2>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <Field type="text" id="city" name="city" placeholder="Enter city" />
            <ErrorMessage name="city" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="postalCode">Postal Code</label>
            <Field
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder="Enter postal code"
            />
            <ErrorMessage name="postalCode" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <Field
              type="text"
              id="address"
              name="address"
              placeholder="Enter address"
            />
            <ErrorMessage name="address" component="div" className="error" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiseTypeStep;
