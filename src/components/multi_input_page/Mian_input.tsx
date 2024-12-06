import React from "react";
import MultiFormOne from "./MultiFormOne";
import MultiFormTwo from "./MultiFormTwo";
import MultiFormThree from "./MultiFormThree";

const Mian_input = () => {
  return (
    <div className="pt-8 mb-3">
      <h1 className="text-3xl font-bold text-center text-cyan-600 p-4">
        § 1 Mietgegenstand
      </h1>
      <MultiFormOne />
      <MultiFormTwo />
      <MultiFormThree />
    </div>
  );
};

export default Mian_input;
