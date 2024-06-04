import React, { useState } from "react";
import axios from "axios";

function VenueRegister() {
  const [message,setmessage] = useState("");
  const [formData, setFormData] = useState({
    venue: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const venueData = {
        venueInfo: {
          name: formData.venue,
          address: {
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode
          },
          contact: {
            phoneNumber: formData.phoneNumber,
            email: formData.email
          }
        },
        accountDetails: {
          username: formData.username,
          password: formData.password
        }
      };
  
      const response = await axios.post("http://localhost:4000/registerVenue", venueData);
      setmessage(response.data.message);
    } catch (error) {
      console.error("Registration failed:", error); 
      setmessage(error.response.data.message);
    }
  };
  

  return (
    <div>
      <h2>Register as Venue Owner</h2>
      <form onSubmit={handleSubmit}>
      <input
  type="text"
  name="venue"
  placeholder="Venue Name"
  value={formData.venue}
  onChange={handleChange}
  required
/>

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="zipCode"
          placeholder="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      {message&&<p>{message}</p>}
    </div>
  );
}

export default VenueRegister;
