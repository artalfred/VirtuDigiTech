import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xeoqpblp");
  if (state.succeeded) {
    return (
      <p className="text-center px-[1rem]">
        Thanks for reaching out! We&rsquo;re excited to connect with you and
        will respond as soon as possible!
      </p>
    );
  }
  return (
    <>
      <div className="bg-white lg:p-[2rem] md:p-[1.5rem] sm:p-[1rem] p-[1rem] shadow-md rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-[1rem]">
            <div className="grid lg:flex md:flex sm:grid gap-[2rem] w-full">
              <div className="grid gap-2 w-full">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="border rounded-xl px-4 py-2 outline-none lg:w-[15rem] md:w-[12rem] sm:w-[25rem] w-[20rem] form-size"
                />
                <ValidationError
                  prefix="name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="grid gap-2 w-full">
                <label htmlFor="last-name">Last Name</label>
                <input
                  id="last-name"
                  type="text"
                  name="lastName"
                  className="border rounded-xl px-4 py-2 outline-none lg:w-[15rem] md:w-[12rem] sm:w-[25rem] w-[20rem] form-size"
                />
                <ValidationError
                  prefix="Last Name"
                  field="lastName"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                className="border rounded-xl px-4 py-2 outline-none"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="border rounded-xl outline-none p-4"
                rows={5}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              className="dark-button p-3 rounded-xl mt-3"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
