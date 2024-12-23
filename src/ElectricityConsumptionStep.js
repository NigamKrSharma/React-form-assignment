import React from "react";
import { Field, ErrorMessage } from "formik";

const ElectricityConsumptionStep = () => (
  <div>
    <h2>Electricity Consumption</h2>
    <div className="form-group">
      <label htmlFor="electricityConsumption">Average (1 Year) Electricity Unit Consumption</label>
      <Field
        id="electricityConsumption"
        name="electricityConsumption"
        className="form-cons"
        type="digit"
      />
      <ErrorMessage
        name="electricityConsumption"
        component="div"
        className="error"
      />
    </div>
  </div>
);

export default ElectricityConsumptionStep;
