import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NavBar from "./NavBar";
import StepSidebar from "./StepSidebar";
import YourInfoStep from "./YourInfoStep";
import PremiseTypeStep from "./PremiseTypeStep";
import AddressStep from "./AddressStep";
import ElectricityConsumptionStep from "./ElectricityConsumptionStep";
import SelectDateStep from "./SelectDateStep";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = ["Your Info", "Premise Type", "Address", "Electricity", "Date"];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    premiseType: "",
    premiseDetail: "",
    address: "",
    postalCode: "",
    city: "",
    electricityConsumption: "",
    date: null,
  };

  const validationSchema = [
    Yup.object({
      firstName: Yup.string()
        .min(2, "Must be at least 2 characters")
        .matches(/^[a-zA-Z ]+$/, "Only alphabets are allowed")
        .required("First Name is required"),
      lastName: Yup.string()
        .min(2, "Must be at least 2 characters")
        .matches(/^[a-zA-Z ]+$/, "Only alphabets are allowed")
        .required("Last Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      number: Yup.string()
        .matches(/^\+?[0-9]{10,15}$/, "Invalid phone number")
        .required("Phone number is required"),
    }),

    Yup.object({
      premiseType: Yup.string().required("Premise Type is required"),
      premiseDetail: Yup.string()
        .min(5, "Details must be at least 5 characters")
        .required("Details are required"),
    }),
    Yup.object({
      address: Yup.string()
        .required("Address is required")
        .min(8, "Address must be at least 8 characters long"),
      postalCode: Yup.string()
        .matches(/^\d{5}$/, "Zip Code must be 5 digits")
        .required("Zip Code is required"),
      city: Yup.string()
        .matches(/^[a-zA-Z ]+$/, "invalid city name")
        .required("City name is required"),
    }),
    Yup.object({
      electricityConsumption: Yup.number()
        .required("Electricity Consumption is required")
        .positive("Must be a positive number")
        .integer("Must be an integer"),
    }),
    Yup.object({
      date: Yup.date().required("Date is required"),
    }),
  ];

  const nextStep = () => setCurrentStep((prev) => prev + 1);

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const onSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      console.log("Form Submitted: ", values);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="thank-you-page">
        <h1>Thank You!</h1>
        <p>Your submission has been received. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="">
      <NavBar />
      <div className="form-container">
        <StepSidebar steps={steps} currentStep={currentStep} />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema[currentStep]}
          onSubmit={onSubmit}
        >
          {({ isValid, dirty,  values, errors, touched }) => (
            <Form>
              {currentStep === 0 && <YourInfoStep errors={errors} />}
              {currentStep === 1 && (
                <PremiseTypeStep
                  values={values}
                  errors={errors}
                  nextStep={nextStep}
                  currentStep={currentStep}
                />
              )}
              {currentStep === 2 && <AddressStep errors={errors} />}
              {currentStep === 3 && <ElectricityConsumptionStep />}
              {currentStep === 4 && <SelectDateStep />}

              <div className="form-navigation">
                {currentStep > 0 && (
                  <button
                    className="form-btn-back"
                    type="button"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                )}
                {currentStep < steps.length - 1 && (
                  <button
                    className="form-btn-next"
                    type="button"
                    onClick={nextStep}
                    disabled={!isValid || !dirty}
                  >
                    Next
                  </button>
                )}
                {currentStep === steps.length - 1 && (
                  <button className="form-btn-sub" type="submit">
                    Submit
                  </button>
                )}
              </div>
              {loading && <div className="loading">Submitting...</div>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MultiStepForm;
