import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../pages/styles/Contact.css";

// Contact Form - Setup EmailJS
// Const start empty form data and error states
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Form Change - Update Form Data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate Form - Check if form is valid
  const validateForm = () => {
    let isValid = true;
    let newErrors = {
      name: "",
      email: "",
      message: "",
    };

    // Check if name is empty and add error if it is
    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    // Check if email is empty and add error if it is
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Your email is invalid";
      isValid = false;
    }
    // Check if message is empty and add error if it is
    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setError(newErrors); // Update error state with new errors

    return isValid;
  };

  // Handle Form Submit - Send email if form is valid
  const handleSubmit = (e) => {
    // Prevent form from submitting
    e.preventDefault();

    // Validate form and send email if form is valid
    if (validateForm()) {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        email: formData.email,
      };

      // Send email with emailjs
      // The service and template IDs are provided by EmailJS
      // The data includes Service ID, Template ID, Template Parameters,
      // and User ID where you can find on dashboard, Account, API keys > Public Key

      emailjs
        .send(
          "service_1epk0l9",
          "template_nyno3ya",
          templateParams,
          "x_tuJk1pH1Xeo8nf7"
        )

        // Handle success and error
        .then(
          () => {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setError({ name: "", email: "", message: "" }); 
          },
          (err) => {
            alert("Failed to send message. Please try again later.");
            console.error("Error sending email:", err); 
          }
        );
    }
  };

  return (
    // Contact Form
    // Form with name, email, message fields and submit button
    <section className="contact">
      {/* Contact Title */}
      <h2>Contact</h2>
      <p>Feel free to reach out to me!</p>

      <form onSubmit={handleSubmit}>
        <div>
          {/* Name Input */}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {error.name && <span className="error">{error.name}</span>}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <span className="error">{error.email}</span>}
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {error.message && <span className="error">{error.message}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
