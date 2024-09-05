"use client";

import { useRef } from "react";

export default function ContactForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const questionRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        // console.log(emailRef.current?.value, questionRef.current?.value);
        const response = await fetch("https://formspree.io/f/xblrbolz", {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current?.value,
            question: questionRef.current?.value,
          }),
          mode: "no-cors",
        });
        // console.log(response.status);
      }}
    >
      <input
        className="rounded-lg py-3 px-5 text-black"
        type="text"
        placeholder="Email..."
        required
        ref={emailRef}
      />
      <input
        className="rounded-lg py-8 px-5 text-black"
        type="textarea"
        placeholder="Question..."
        required
        ref={questionRef}
      />
      <button
        type="submit"
        className="px-5 py-2 rounded-lg text-xl bg-indigo-800"
      >
        Submit
      </button>
    </form>
  );
}
