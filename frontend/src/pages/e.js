import React, { useState } from "react";

const VenueDetails = () => {
  const [activeSection, setActiveSection] = useState(0);
  const imageData = [
    "https://image.wedmegood.com/resized/450X/uploads/member/24603963/1717159539_2023_09_01__1_.jpg?crop=6,72,1012,569",
    "https://image.wedmegood.com/resized/450X/uploads/member/24603963/1717159541_IMG_4746.JPG",
    "https://image.wedmegood.com/resized/450X/uploads/member/24603963/1717159540_20240224_192900.jpg",
    "https://image.wedmegood.com/resized/450X/uploads/member/24603963/1716982802_00ee38b6_0247_47d0_bc85_250690ff7e90.jpeg",
    "https://image.wedmegood.com/resized/450X/uploads/member/24603963/1717159542_2024_02_13__1_.jpg",
    "https://image.wedmegood.com/resized/450X/uploads/member/24603963/1717159540_2023_09_01.jpg",
    "https://image.wedmegood.com/resized/450X/uploads/member/24603963/1716982807_c01586ea_51e6_4096_9854_5a2e8a4772f8.jpeg",
    "https://image.wedmegood.com/resized/450X/uploads/member/24603963/1717159540_GP__5971.JPG",
    "https://image.wedmegood.com/resized/450X/uploads/member/24603963/1716983322_c01586ea_51e6_4096_9854_5a2e8a4772f8.jpeg",
    "https://image.wedmegood.com/resized/450X/uploads/member/24603963/1716982801_3e547c15_4cd9_482f_97dc_846010d1b4ae.jpeg",
    "https://image.wedmegood.com/resized/450X/uploads/member/24603963/1716982802_f2211366_18b4_49f9_b6df_ec3b966ddc7a.jpeg",
    "https://image.wedmegood.com/resized/450X/uploads/member/24603963/1717159541_2023_12_18.jpg",
  ];
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    functionDate: "",
    numberOfGuests: "",
    numberOfRooms: "",
    functionType: "Pre-Wedding",
    functionTime: "Evening",
    notifyOnWhatsapp: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <div className="flex space-x-*">
        <div className="container mx-auto    lg:p-10 w-1/2">
          <img
            alt="Venue image"
            className="w-full h-64 object-cover "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vl7JTcT_gToPMsWNDhBdjq6TsA6o9scv-h0oTgpsfw&s"
          />
          <div className="border rounded-sm">
            <div className="flex space-x-* px-7 py-4">
              <div>
                <h2 className="text-xl font-bold ">The Finer Side</h2>
                <p className=" mb-2">
                  <span role="img" aria-label="Location">
                    📍 Bangalore (View on Map)
                  </span>
                </p>
                <p className="text-gray-500 text-sm">
                  The Finer Side - A special Venue, Kanakapura Road,
                  Banashankari 6th Stage, ...
                </p>
                <span role="img" aria-label="Phone" className="text-green-600">
                  📞 Contact
                </span>
              </div>

              <div>
                <span
                  role="img"
                  aria-label="Star"
                  className="px-3 py-2 bg-green-600 text-white"
                >
                  ⭐5.0
                </span>
                <p className="text-gray-500 text-sm mt-2">11 reviews</p>
              </div>
            </div>

            <div className="flex justify-between mb-4 px-8 py-4">
              <button className="bg-white-500  text-black  py-2 px-4">
                🖼️22 Photos
              </button>
              <button className="bg-white-500  text-black  py-2 px-4">
                ❤️Shortlist
              </button>

              <button className="bg-white-500  text-black  py-2 px-4">
                🖊️Write a Review
              </button>

              <button className="bg-white-500  text-black  py-2 px-4">
                Share
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-1 my-10 ">
            <div className="flex justify-around border-gray-200 border">
              <button
                onClick={() => setActiveSection(0)}
                className={`px-4 py-2 w-64 text-blue-500 ${
                  activeSection === 0
                    ? "border-b-4 border-blue-700"
                    : "bg-white"
                }`}
              >
                Albums
              </button>

              <button
                onClick={() => setActiveSection(1)}
                className={`px-4 py-2 w-64 text-blue-500 ${
                  activeSection === 1
                    ? "border-b-4 border-blue-700"
                    : "bg-white"
                }`}
              >
                Videos
              </button>
            </div>

            <div className="p-4 border-gray-200 border">
              {activeSection === 0 && (
                <div className="flex flex-wrap">
                  {imageData.map((image, index) => (
                    <div
                      key={index}
                      className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-1 pointer"
                    >
                      <img
                        src={image}
                        alt={`portfolio-pic-${index}`}
                        className="w-full object-cover p-2 h-40"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {activeSection === 1 && (
              <div className="p-4">
                <h1>Section 2</h1>
                <p>Content for Section 2</p>
              </div>
            )}
          </div>
        </div>

        <div className="container mx-auto  lg:p-10 w-1/2">
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Full name*
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Phone number*
                <div className="flex items-center">
                  <span className="inline-block p-2 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    +91
                  </span>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="flex-1 p-2 border border-gray-300 rounded-r-md"
                  />
                </div>
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email address
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Function date*
                <input
                  type="date"
                  name="functionDate"
                  value={formData.functionDate}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                No of guests* (min 50)
                <input
                  type="number"
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  min="50"
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                No of rooms
                <input
                  type="number"
                  name="numberOfRooms"
                  value={formData.numberOfRooms}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <span className="block text-gray-700 font-bold mb-2">
                Function Type
              </span>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="functionType"
                  value="Pre-Wedding"
                  checked={formData.functionType === "Pre-Wedding"}
                  onChange={handleChange}
                  className="form-radio text-pink-600"
                />
                <span className="ml-2">Pre-Wedding</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="functionType"
                  value="Wedding"
                  checked={formData.functionType === "Wedding"}
                  onChange={handleChange}
                  className="form-radio text-pink-600"
                />
                <span className="ml-2">Wedding</span>
              </label>
            </div>
            <div className="mb-4">
              <span className="block text-gray-700 font-bold mb-2">
                Function Time
              </span>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="functionTime"
                  value="Evening"
                  checked={formData.functionTime === "Evening"}
                  onChange={handleChange}
                  className="form-radio text-pink-600"
                />
                <span className="ml-2">Evening</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="functionTime"
                  value="Day"
                  checked={formData.functionTime === "Day"}
                  onChange={handleChange}
                  className="form-radio text-pink-600"
                />
                <span className="ml-2">Day</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="notifyOnWhatsapp"
                  checked={formData.notifyOnWhatsapp}
                  onChange={handleChange}
                  className="form-checkbox text-pink-600"
                />
                <span className="ml-2">Notify me on Whatsapp</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-pink-600 text-white font-bold rounded-md hover:bg-pink-700"
            >
              Check Availability & Prices
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
