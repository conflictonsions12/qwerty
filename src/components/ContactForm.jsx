"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    additional: "",
    inquiryType: "",
    updates: false, 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send to Formspree
    const response = await fetch("https://formspree.io/f/mnjbqekz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank you! Your inquiry has been submitted.");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        additional: "",
        inquiryType: "",
        updates: false,
      });
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <section className="min-h-screen py-16 md:py-24 px-5 sm:px-8 bg-gray-50/50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          bg-green-600
          rounded-2xl
          shadow-xl
          border border-green-700
          p-8 md:p-12
          w-full
          max-w-[75vw]
          mx-auto
        "
      >
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Get in Touch
          </h1>
          <p className="mt-3 text-black text-lg">
            We&apos;d love to hear from you. Fill out the form below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Your Name */}
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-800 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 bg-white py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-800 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 bg-white py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Phone (Optional) */}
          <div>
            <label htmlFor="phone" className="block text-base font-medium text-gray-800 mb-2">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 bg-white py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              placeholder="optional"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-base font-medium text-gray-800 mb-2">
              Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-5 py-3.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              placeholder="123 Farm Road"
            />
          </div>

          {/* Zip Code */}
          <div>
            <label htmlFor="zipCode" className="block text-base font-medium text-gray-800 mb-2">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full px-5 py-3.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              placeholder="100001"
            />
          </div>

          {/* Inquiry Type (Dropdown) */}
          <div>
            <label htmlFor="inquiryType" className="block text-base font-medium text-gray-800 mb-2">
            Get Service quote
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
              className="w-full px-5 bg-white py-3.5  border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            >
              <option value=""> select a service </option>
              <option value="soil-testing"> Soil Testing </option>
              <option value="crop-inspection">Crop Inspections</option>
              <option value="equipment-calibration">Equipment Calibration</option>
              <option value="fertilizer-advice">Fertilizer Advice</option>
              <option value="pest-control">Pest Control Advice</option>
              <option value="irrigation">Irrigation Scheduling</option>
              <option value="soil-moisture">Soil Moisture</option>
              <option value="moisture-determination">Moisture Determination</option>
              <option value="soil-sampling">Soil Sampling</option>
            </select>
          </div>

          {/* Additional Information */}
          <div>
            <label htmlFor="additional" className="block text-base font-medium text-gray-800 mb-2">
              Additional Information... (Optional)
            </label>
            <textarea
              id="additional"
              name="additional"
              rows={4}
              value={formData.additional}
              onChange={handleChange}
              className="w-full px-5 bg-white py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition resize-y"
              placeholder="Tell us more about your needs or questions..."
            />
          </div>

          {/* Checkbox */}
          {/* <div className="flex items-start pt-2">
            <input
              type="checkbox"
              id="updates"
              name="updates"
              checked={formData.updates}
              onChange={handleChange}
              className="mt-1.5 h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label htmlFor="updates" className="ml-3 text-base text-gray-700 cursor-pointer">
              Click here & Submit to receive updates & offers
            </label>
          </div> */}

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="
                w-full  text-black
                py-4 px-8 rounded-xl
                font-semibold text-lg
                bg-white
                focus:ring-4 focus:ring-green-300
                transition duration-300
                shadow-md hover:shadow-lg
              "
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
