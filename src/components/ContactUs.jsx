import Footer from "./Footer";
import Navbar from "./Nav";
import { useState } from "react";
import Swal from "sweetalert2";
const ContactUs = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactUs = (e) => {
    e.preventDefault();
    console.log(fullname);
    console.log(email);
    console.log(message);

    Swal.fire({
      title: "Success",
      text: "Thank You! We will get back to you.",
      icon: "success",
      confirmButtonText: "Close",
    });
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          padding: "50px 25px",
          // background: "red"
        }}
      >
        <img src="./images/contact-us.svg" alt="contact-us" width="50%" />
        <div
          style={{
            width: "50%",
            // background: "red",
          }}
        >
          <form
            onSubmit={contactUs}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              margin: "50px 25px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <label
                htmlFor=""
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                Fullname
              </label>
              <input
                type="text"
                placeholder="Enter you name here"
                name="Fullname"
                required
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "13px",
                }}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <label
                htmlFor=""
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                type="email"
                placeholder="Enter you email here"
                name="email"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "13px",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <label
                htmlFor=""
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                Message
              </label>
              <textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
                placeholder="Enter you message here"
                name="message"
                rows={10}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "13px",
                }}
              />
            </div>

            <button
              style={{
                width: "fit-content",
                border: "none",
                fontSize: "14px",
                textTransform: "uppercase",
                padding: "7px 15px",
                borderRadius: "4px",
                color: "#fff",
                background: "#00BFA6",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
