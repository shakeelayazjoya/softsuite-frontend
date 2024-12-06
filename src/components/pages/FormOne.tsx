import React from "react";

const FormOne = () => {
  return (
    <div className="mx-auto p-4">
      <div className="flex space-x-4">
        {/* First Name Field */}
        <div className="flex-1">
          <div className="mb-2">
            <label className="block text-sm font-medium text-cyan-600">
              Label 1
            </label>
          </div>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-900 mt-2"
            >
              First name
            </label>
          </div>
        </div>

        {/* Last Name Field */}
        <div className="flex-1">
          <div className="mb-2">
            <label className="block text-sm font-medium text-cyan-600">
              Label 2
            </label>
          </div>
          <div className="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-900 mt-2"
            >
              Last name
            </label>
          </div>
        </div>
      </div>

      {/* Second Row: Email and Phone Fields */}
      <div className="flex space-x-4 mt-4">
        {/* Email Field */}
        <div className="flex-1">
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 mt-2"
            >
              Email
            </label>
          </div>
        </div>

        {/* Phone Field */}
        <div className="flex-1">
          <div className="mt-2">
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900 mt-2"
            >
              Phone
            </label>
          </div>
        </div>
      </div>

      {/* Third Row: City and Country Fields */}
      <div className="flex space-x-4 mt-4">
        {/* City Field */}
        <div className="flex-1">
          <div className="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-900 mt-2"
            >
              City
            </label>
          </div>
        </div>

        {/* Country Field */}
        <div className="flex-1">
          <div className="mt-2">
            <input
              type="text"
              name="country"
              id="country"
              autoComplete="country"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-900 mt-2"
            >
              Country
            </label>
          </div>
        </div>
      </div>

      {/* Fourth Row: Address Field */}
      <div className="mt-4">
        <div>
          <div className="mt-2">
            <input
              type="text"
              name="address"
              id="address"
              autoComplete="address"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-900 mt-2"
            >
              Address
            </label>
          </div>
        </div>
      </div>

      {/* Fifth Row: Address Field (Duplicate for testing) */}
      <div className="mt-4">
        <div>
          <div className="mt-2">
            <input
              type="text"
              name="address"
              id="address"
              autoComplete="address"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
            />
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-900 mt-2"
            >
              Telephone
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOne;
