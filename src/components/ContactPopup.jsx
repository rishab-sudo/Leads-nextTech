import React, { useState, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import Swal from "sweetalert2";
import "./ContactPopup.css";

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    query: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryRef = useRef(null);

  /* -----------------------------------------
     INPUT CHANGE
  ----------------------------------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (name === "query" && queryRef.current) {
      const el = queryRef.current;
      el.style.height = "auto";

      const maxHeight = 200;

      if (el.scrollHeight > maxHeight) {
        el.style.height = maxHeight + "px";
        el.style.overflowY = "auto";
      } else {
        el.style.height = el.scrollHeight + "px";
        el.style.overflowY = "hidden";
      }
    }
  };

  /* -----------------------------------------
     MOBILE CHANGE
  ----------------------------------------- */
  const handleMobileChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 10);

    setFormData((prev) => ({
      ...prev,
      mobile: value,
    }));

    if (errors.mobile) {
      setErrors((prev) => ({
        ...prev,
        mobile: "",
      }));
    }
  };

  /* -----------------------------------------
     VALIDATION
  ----------------------------------------- */
  const validateForm = () => {
    const newErrors = {};

    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const mobile = formData.mobile.trim();
    const query = formData.query.trim();

    /* Full Name */
    if (!fullName) {
      newErrors.fullName = "Full name is required";
    } else if (
      !/^[a-zA-Z\s.'-]{2,60}$/.test(fullName)
    ) {
      newErrors.fullName = "Please enter a valid full name";
    }

    /* Email */
    if (!email) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    /* Mobile */
    if (!mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(mobile)) {
      newErrors.mobile =
        "Please enter a valid 10-digit mobile number";
    }

    /* Query */
    if (!query) {
      newErrors.query = "Please enter your query";
    } else if (query.length < 10) {
      newErrors.query =
        "Query should contain at least 10 characters";
    } else if (query.length > 1000) {
      newErrors.query =
        "Query cannot exceed 1000 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* -----------------------------------------
     SUBMIT
  ----------------------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: "warning",
        title: "Please check your details",
        text: "Fill all fields correctly before submitting.",
        confirmButtonColor: "#111111",
      });

      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Thank You!",
          text:
            result.message ||
            "Your query has been submitted successfully.",
          confirmButtonColor: "#111111",
        });

        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          query: "",
        });

        setErrors({});

        if (queryRef.current) {
          queryRef.current.style.height = "auto";
          queryRef.current.style.overflowY = "hidden";
        }

        onClose();
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text:
            result.message ||
            "Something went wrong. Please try again.",
          confirmButtonColor: "#111111",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);

      Swal.fire({
        icon: "error",
        title: "Server Error",
        text:
          "Unable to submit your query right now. Please try again later.",
        confirmButtonColor: "#111111",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* -----------------------------------------
     CLOSE
  ----------------------------------------- */
  const handleClose = () => {
    if (isSubmitting) return;

    setErrors({});
    onClose();
  };

  /* -----------------------------------------
     DON'T RENDER
  ----------------------------------------- */
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="contact-popup-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="contact-popup">

        {/* HEADER */}
        <div className="contact-popup-header">
          <div>
            <span className="contact-popup-eyebrow">
              GET IN TOUCH
            </span>

            <h2>Let&apos;s Start a Conversation</h2>
          </div>

          <button
            type="button"
            className="contact-popup-close"
            onClick={handleClose}
            disabled={isSubmitting}
            aria-label="Close contact form"
          >
            <X size={21} />
          </button>
        </div>

        {/* FORM */}
        <form
          className="contact-popup-form"
          onSubmit={handleSubmit}
          noValidate
        >

          {/* FULL NAME */}
          <div className="contact-popup-field">
            <label htmlFor="contact-fullName">
              Full Name <span>*</span>
            </label>

            <input
              id="contact-fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              maxLength={60}
              autoComplete="name"
            />

            {errors.fullName && (
              <small>{errors.fullName}</small>
            )}
          </div>

          {/* EMAIL */}
          <div className="contact-popup-field">
            <label htmlFor="contact-email">
              Email Address <span>*</span>
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              maxLength={100}
              autoComplete="email"
            />

            {errors.email && (
              <small>{errors.email}</small>
            )}
          </div>

          {/* MOBILE */}
          <div className="contact-popup-field">
            <label htmlFor="contact-mobile">
              Mobile Number <span>*</span>
            </label>

            <input
              id="contact-mobile"
              name="mobile"
              type="tel"
              inputMode="numeric"
              placeholder="Enter 10-digit mobile number"
              value={formData.mobile}
              onChange={handleMobileChange}
              maxLength={10}
              autoComplete="tel"
            />

            {errors.mobile && (
              <small>{errors.mobile}</small>
            )}
          </div>

          {/* QUERY */}
          <div className="contact-popup-field">
            <label htmlFor="contact-query">
              Your Query <span>*</span>
            </label>

            <textarea
              id="contact-query"
              name="query"
              ref={queryRef}
              placeholder="Tell us how we can help you..."
              value={formData.query}
              onChange={handleChange}
              maxLength={1000}
              rows={3}
            />

            <div className="contact-query-bottom">
              {errors.query ? (
                <small>{errors.query}</small>
              ) : (
                <span></span>
              )}

              <span>
                {formData.query.length}/1000
              </span>
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="contact-popup-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="contact-submit-spinner"></span>
                SENDING...
              </>
            ) : (
              <>
                SUBMIT
                <ArrowUpRight size={17} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;