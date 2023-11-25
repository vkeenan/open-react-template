"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import profilePlaceholder from "@/public/images/blank-100x100.png";
import { toast } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { putUser } from "@/services/user/put-user";
import { logger } from "@/lib/logger";

export const EnrollmentForm = ({ initialValues }) => {
  logger.debug(`👉EnrollmentForm - email: ${initialValues?.Email}`);
  const [formValues, setFormValues] = useState(initialValues);
  const [formVisible, setFormVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef(null);
  const hasFormChanged = () => {
    return JSON.stringify(initialValues) !== JSON.stringify(formValues);
  };
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" || type === "radio" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);

    // Create an object with only the changed fields
    const changedFields = {};
    for (const key in formValues) {
      if (formValues[key] !== initialValues[key]) {
        changedFields[key] = formValues[key];
      }
    }

    // Add the user ID to the changedFields object
    changedFields.ID = formValues.ID;

    // Check if there are any changes, ignoring the ID field
    const hasChanges = Object.keys(changedFields).some((key) => key !== "ID");
    const loadingToastId = toast.loading("Saving user...");

    if (hasChanges) {
      try {
        await putUser(changedFields);
        setFormVisible(false); // Hide the form
        initialValues = formValues; // Update the initial values
        toast.success("User Saved", { id: loadingToastId });
      } catch (error) {
        logger.error(error);
        toast.error(`Error: ${error.message}`, { id: loadingToastId });
      }
    } else {
      setFormVisible(false); // Hide the form
      toast.success("No changes to save", { id: loadingToastId });
    }
  };

  return (
    <div className="flex w-full bg-azure_radiance-200">
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="flex items-center justify-center min-h-screen">
          <div className="p-6 bg-white rounded shadow-md w-80">
            <Dialog.Title className="mb-4 text-lg font-medium">
              Save Changes?
            </Dialog.Title>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 font-semibold text-white rounded-none bg-azure_radiance-200 hover:bg-azure_radiance-300"
                onClick={() => {
                  setIsModalOpen(false);
                  if (formRef.current) formRef.current.submit();
                  setFormVisible(false);
                }}
              >
                Save
              </button>
              <button
                className="px-4 py-2 font-semibold text-white rounded-none bg-azure_radiance-200 hover:bg-azure_radiance-300"
                onClick={() => {
                  setIsModalOpen(false);
                  setFormVisible(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Dialog>
      <button
        type="button"
        onClick={() => {
          if (formVisible && hasFormChanged()) {
            setIsModalOpen(true);
          } else {
            setFormVisible(!formVisible);
          }
        }}
        className="absolute z-10 p-2 hover:bg-azure_radiance-300 focus:outline-none"
      >
        <FaEdit />
      </button>
      <div className="p-8 rounded-none shadow-md bg-azure_radiance-100">
        {formVisible && (
          <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              id="userID"
              name="ID"
              value={formValues.ID}
              onChange={handleChange}
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex items-center mb-4">
                <Image src={profilePlaceholder} alt="Profile Placeholder" />
                <button
                  type="button"
                  onClick={() => {
                    /* Implement the edit photo functionality here */
                  }}
                  className="px-4 py-2 ml-4 font-semibold text-white rounded-none bg-azure_radiance-200"
                >
                  Edit
                </button>
              </div>
              <div className="mb-4">
                <label htmlFor="Email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="Email"
                  value={formValues.Email}
                  onChange={handleChange}
                  className="block w-full mt-1 border-gray-300 rounded-none focus:border-azure_radiance-200 focus:ring-azure_radiance-200"
                />
              </div>
              <div className="mb-4">
                <div>
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="FirstName"
                    value={formValues.FirstName}
                    onChange={handleChange}
                    className="block w-full mt-1 border-gray-300 rounded-none focus:border-azure_radiance-200 focus:ring-azure_radiance-200"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="LastName" className="block text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="LastName"
                  value={formValues.LastName}
                  onChange={handleChange}
                  className="block w-full mt-1 border-gray-300 rounded-none focus:border-azure_radiance-200 focus:ring-azure_radiance-200"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="CompanyName"
                  value={formValues.CompanyName}
                  onChange={handleChange}
                  className="block w-full mt-1 border-gray-300 rounded-none focus:border-azure_radiance-200 focus:ring-azure_radiance-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="LinkedIn" className="block text-sm font-medium">
                  LinkedIn
                </label>
                <input
                  type="text"
                  id="linkedin"
                  name="LinkedIn"
                  value={formValues.LinkedIn}
                  onChange={handleChange}
                  className="block w-full mt-1 border-gray-300 rounded-none focus:border-azure_radiance-200 focus:ring-azure_radiance-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Twitter" className="block text-sm font-medium">
                  Twitter
                </label>
                <input
                  type="text"
                  id="twitter"
                  name="Twitter"
                  value={formValues.Twitter}
                  onChange={handleChange}
                  className="block w-full mt-1 border-gray-300 rounded-none focus:border-azure_radiance-200 focus:ring-azure_radiance-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="GitHub" className="block text-sm font-medium">
                  GitHub
                </label>
                <input
                  type="text"
                  id="github"
                  name="GitHub"
                  value={formValues.GitHub}
                  onChange={handleChange}
                  className="block w-full mt-1 border-gray-300 rounded-none focus:border-azure_radiance-200 focus:ring-azure_radiance-200"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="biography"
                  className="block text-sm font-medium"
                >
                  Full Biography
                </label>
                <textarea
                  id="biography"
                  name="biography"
                  value={formValues.Biography}
                  onChange={handleChange}
                  className="block w-full mt-1 border-gray-300 rounded-none focus:border-azure_radiance-200 focus:ring-azure_radiance-200"
                  rows="4"
                />
              </div>
            </div>
            <div className="flex justify-between mt-4 space-x-4">
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white rounded-none md:w-2/3 bg-apple-400 hover:bg-apple-800"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormValues(initialValues);
                  setFormVisible(false);
                }}
                className="w-full px-4 py-2 font-semibold text-white bg-red-500 rounded-none md:w-1/3 hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
        {!formVisible && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center mb-4">
              <Image src={profilePlaceholder} alt="Profile Placeholder" />
            </div>
            <div>
              <p className="block text-sm font-medium">Email:</p>
              <p>{formValues.Email}</p>
            </div>
            <div>
              <p className="block text-sm font-medium">First Name:</p>
              <p>{formValues.FirstName}</p>
            </div>
            <div>
              <p className="block text-sm font-medium">Last Name:</p>
              <p>{formValues.LastName}</p>
            </div>
            <div>
              <p className="block text-sm font-medium">Company Name:</p>
              <p>{formValues.CompanyName}</p>
            </div>
            <div>
              <p className="block text-sm font-medium">LinkedIn:</p>
              <p>{formValues.LinkedIn}</p>
            </div>
            <div>
              <p className="block text-sm font-medium">Twitter:</p>
              <p>{formValues.Twitter}</p>
            </div>
            <div>
              <p className="block text-sm font-medium">GitHub:</p>
              <p>{formValues.GitHub}</p>
            </div>
            <div className="col-span-full">
              <p className="block text-sm font-medium">Full Biography:</p>
              <p>{formValues.Biography}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
