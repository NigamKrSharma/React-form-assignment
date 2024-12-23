// import React from "react";

// const StepSidebar = ({ steps, currentStep }) => {
//   return (
//     <div className="sidebar">
//       <ul>
//         {steps.map((step, index) => (
//           <li key={index} className={index === currentStep ? "active" : ""}>
//             {step}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StepSidebar;

import React from "react";

const StepSidebar = ({ currentStep }) => {
  const steps = [
    { title: "Your Info", heading: "Personal Information" },
    { title: "Premise Type", heading: "Premise Details" },
    { title: "Address", heading: "Address Information" },
    { title: "Electricity Consumption", heading: "Consumption Details" },
    { title: "Select Date", heading: "Schedule Submission" },
  ];

  return (
    <div className="sidebar">
      {steps.map((step, index) => (
        <div className=" step-sec">
          <div className="steps-container">
            <div id='step' key={index} className={index === currentStep ? "active" : ""}>
              {index + 1}
            </div>
            <div className="step-heading">
              <h1>Step {index + 1}</h1>
              <h4>{step.heading}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepSidebar;
