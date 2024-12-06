import React from "react";

const MultiFormThree = () => {
  return (
    <div className="p-4 w-full">
      <div className="flex items-center space-x-4 w-full">
        {/* Label and Input 1 */}
        <div className="flex items-center space-x-2 w-full">
          <label className="text-sm font-medium text-gray-900 flex-shrink-0">
            Sonstiges Zubehör
          </label>
          <input
            type="text"
            placeholder="Enter text"
            className="w-full block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
          />
        </div>
      </div>
      <div className="pt-2">
        <p className="text-sm text-gray-800">
          Wird zur unentgeltlichen Nutzung überlassen. Die Wohnfläche beträgt
          ca.
          <input
            type="text"
            placeholder="text"
            className="py-1 px-4 text-black border w-20 rounded-md ml-2 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          Diese Angabe ist unverbindlich und dient nicht zur Festlegung des
          Mietgegenstandes. Der räumliche Umfang des Mietgegenstandes ergibt
          sich aus der Anzahl der vermieteten Räume.
        </p>
      </div>

      <div className="p-2 flex items-center space-x-2">
        {/* Checkbox */}
        <input
          type="checkbox"
          className="p-2 transform scale-125 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
        />

        {/* Text */}
        <p className="text-sm text-gray-800">
          Es handelt sich um eine Eigentumswohnung
        </p>
      </div>
    </div>
  );
};

export default MultiFormThree;
