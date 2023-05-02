import React, { useState } from "react";
import HomeButton from "./Homebutton";
function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
      } else {
        setFormError(true);
      }
    } catch (error) {
      console.error(error);
      setFormError(true);
    }
  };

  if (formSubmitted) {
    return <p>Thank you for your message!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
         <div>
      <h1>Hello, world!</h1>
      <HomeButton />
    </div>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      {formError && <p>An error occurred. Please try again later.</p>}
      <button type="submit">Send</button>
    </form>
  );
}

export default EmailForm;
