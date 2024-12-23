import React from "react";
import { Field, ErrorMessage } from "formik";

const YourInfoStep = () => (
  <div className="form-control">
    <div className="form-heading">
      <h2>Personel Info</h2>
      <p>We take privacy seriously. No spam!</p>
    </div>
    <div className="form-element">
      <div className="form-field">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <Field
            id="firstName"
            name="firstName"
            className="form-input"
            placeholder="e.g: Ravi"
          />
          <ErrorMessage name="firstName" component="div" className="error" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <Field
            id="lastName"
            name="lastName"
            className="form-input"
            placeholder="e.g: Sharma"
          />
          <ErrorMessage name="lastName" component="div" className="error" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="e.g:xyz@gmail.com"
        />
        <ErrorMessage name="email" component="div" className="error" />
      </div>

      <div className="form-group">
        <label htmlFor="number">Phone Number</label>
        <Field
          type="text"
          id="number"
          name="number"
          className="form-input"
          placeholder="e.g:+91888888"
        />
        <ErrorMessage name="number" component="div" className="error" />
      </div>
    </div>
  </div>
);

export default YourInfoStep;
