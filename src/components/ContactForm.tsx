"use client";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subject, setSubject] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resMess, setResMess] = useState("");

  const handleSubjectChange = (event: any) => {
    setSubject(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSubmitting(true);
    const formData = new FormData(event.target);
    const reqOptions = {
      method: "POST",
      body: formData,
    };
    try {
      const req = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/contact-form-7/v1/contact-forms/415/feedback`,
        reqOptions
      );
      const response = await req.json();
      setResMess(response.message);
      if (response.status === "mail_sent") {
        setSuccess(true);
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
        }, 5000);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Col xs={12} sm={12} md={12} lg={12}>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-100 rounded-lg md:px-[50px] px-[20px] py-[30px]"
      >
        <Row>
          <Col
            xs={12}
            className="flex justify-start place-tems-center gap-4 mb-[30px] text-resilience text-base font-rsans font-normal tracking-tight"
          >
            <input
              title="General Inquiry"
              type="radio"
              name="your_subject"
              id="general"
              className="border-slate-100 ring-resilience default:border-slate-100 border-2 appearance-none ring-1 checked:ring-energy checked:bg-energy w-[18px] h-[18px] mt-[3px] rounded-full cursor-pointer"
              value="General Inquiry"
              checked={subject === "General Inquiry"}
              onChange={handleSubjectChange}
              required
            />{" "}
            General Inquiry
            <input
              title="Media Inquiry"
              type="radio"
              name="your_subject"
              id="media"
              className=" border-2 appearance-none ring-1 checked:ring-energy checked:bg-energy w-[18px] h-[18px] mt-[3px] rounded-full border-slate-100 ring-resilience default:border-slate-100 cursor-pointer"
              value="Media Inquiry"
              checked={subject === "Media Inquiry"}
              onChange={handleSubjectChange}
              required
            />{" "}
            Media Inquiry
          </Col>
          <Col xs={12} className="flex justify-evenly gap-x-[20px] mb-[20px]">
            <input
              type="text"
              name="your_name"
              id="your_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[45px] p-[20px] rounded-lg focus:outline-none ring-1 ring-neutral/5 hover:ring- focus:ring-resilience placeholder:text-neutral text-neutral text-base font-rsans font-normal tracking-tight"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="your_email"
              id="your_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[45px] p-[20px] rounded-lg focus:outline-none ring-1 ring-neutral/5 hover:ring- focus:ring-resilience placeholder:text-neutral text-neutral text-base font-rsans font-normal tracking-tight"
              placeholder="Your Email"
              required
            />
          </Col>
          <Col xs={12} className="mb-[20px]">
            <textarea
              name="your_message"
              id="your_message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-[150px] rounded-lg focus:outline-none ring-1 ring-neutral/5 hover:ring- focus:ring-resilience p-[20px] placeholder:text-neutral text-neutral text-base font-rsans font-normal tracking-tight"
              placeholder="Message"
              required
            ></textarea>
          </Col>
          <Col
            xs={12}
            className="flex flex-row justify-start place-items-center gap-3"
          >
            <input
              type="submit"
              value={submitting ? `Sending Message` : `Send Your Message`}
              disabled={submitting}
              className="bg-energy text-clarity hover:bg-resilience px-[40px] py-[15px] font-rsans font-bold tracking-tight rounded-lg"
            />
            {showSuccessMessage && <p className="text-growth">{resMess}</p>}
          </Col>
        </Row>
      </form>
    </Col>
  );
}

export default ContactForm;
