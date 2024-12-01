import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xeoqpblp");
  if (state.succeeded) {
    return (
      <p>
        Thanks for reaching out! We&rsquo;re excited to connect with you and
        will respond as soon as possible!
      </p>
    );
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-[1rem] my-[2rem]">
          <div className="flex gap-[2rem] w-full">
            <div className="grid gap-2 w-full">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="border rounded-xl px-4 py-2 outline-none"
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
                className="border rounded-xl px-4 py-2 outline-none"
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
            className="dark-button p-3 rounded-xl"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
