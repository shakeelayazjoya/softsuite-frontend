import React from "react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThird from "./FormThird";
import FormFourth from "./FormFourth";
import Mian_input from "../multi_input_page/Mian_input";

const MultiStepForm = () => {
  return (
    <>
      <div className="p-5 m-5">
        <h1 className="text-3xl font-bold text-center text-cyan-600">
          Wohnraummietvertrag{" "}
        </h1>
        <FormOne />
        <FormTwo />
        <FormThird />
        <FormFourth />
        <Mian_input />
      </div>
    </>
  );
};

export default MultiStepForm;
