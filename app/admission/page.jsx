"use client"
import { useState } from "react";

const Admission = () => {

    const [formData, setFormData] = useState({
        name: "",
        cnic: "",
        gender: "",
        dateOfBirth: "",
        postalAddress: "",
        domacileDistrict: "",
        email: "",
        contactNo: "",
        photo: "",
        marksheetPhoto: "",
        cnicPhoto: "",
        domacilePhoto: ""
    
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        console.log(formData);
    
      }

  return (
    <div className="w-100% bg-slate-100">
      <div className="container mx-auto p-8 ">
        <h2 className="text-3xl font-bold mb-6">Admission</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-6">
            
          <label className="mr-2" >Select Course:</label>
          <select className="p-2 border border-gray-300 rounded">
            <option value="course1">Hssc 1</option>
            <option value="course2">Hssc 2</option>
            <option value="course3">Ada</option>
          </select>
        </div>
        <div className="flex mb-6">
          <div className="w-1/2 mr-4">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="cnic">CNIC:</label>
            <input
              type="text"
              name="cnic"
              id="cnic"
              value={formData.cnic}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex mb-6">
          <div className="w-1/2 mr-4">
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="text"
              name="dateOfBirth"
              id="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="postalAddress">Postal Address:</label>
          <input
            type="text"
            name="postalAddress"
            id="postalAddress"
            value={formData.postalAddress}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="domacileDistrict">District of Domicile:</label>
          <input
            type="text"
            name="domacileDistrict"
            id="domacileDistrict"
            value={formData.domacileDistrict}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="contactNo">Contact Number:</label>
          <input
            type="text"
            name="contactNo"
            id="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex mb-6">
          <div className="w-1/2 mr-4">
            <label htmlFor="photo">Upload Passport Size Photo:</label>
            <input
              type="file"
              name="photo"
              id="photo"
              value={formData.photo}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="marksheetPhoto">Matric Marksheet:</label>
            <input
              type="file"
              name="marksheetPhoto"
              id="marksheetPhoto"
              value={formData.marksheetPhoto}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex mb-6">
          <div className="w-1/2 mr-4">
            <label htmlFor="cnicPhoto">Upload CNIC:</label>
            <input
              type="file"
              name="cnicPhoto"
              id="cnicPhoto"
              value={formData.cnicPhoto}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="domacilePhoto">Domicile:</label>
            <input
              type="file"
              name="domacilePhoto"
              id="domacilePhoto"
              value={formData.domacilePhoto}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
        </form>
      </div>
    </div>
  );
};

export default Admission;
