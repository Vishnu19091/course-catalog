"use client";

import { useState } from "react";
// import { PlainButton } from "Components/Buttons/Buttons";

interface PlainButtonProp {
  name: string;
  onClick?: () => void;
  disabled?: boolean;
}

function PlainButton({ name, onClick, disabled }: PlainButtonProp) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full px-4 py-2 border-b-4 rounded-xl font-semibold transition-all ${
        disabled
          ? "bg-gray-200 text-gray-600 border-b-gray-400 cursor-not-allowed"
          : "bg-blue-500 text-white border-b-blue-800 hover:bg-blue-600 cursor-pointer"
      }`}
    >
      {name}
    </button>
  );
}

export function OptForm() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const showError = touched && !isValidEmail(email);
  const isEmailValid = isValidEmail(email);

  return (
    <div className="w-full mx-auto p-4 space-y-8 font-sans">
      <div className="relative group gap-4 flex flex-col">
        <label
          htmlFor="email"
          className={`absolute -top-2.5 left-4 px-1 mobile:bg-[#f7f3f3] lmobile:bg-white text-sm transition-all duration-300 ${
            showError
              ? "text-red-500"
              : "text-gray-400 group-focus-within:text-blue-500"
          }`}
        >
          EmailID
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          className={`w-full border bg-none rounded-xl px-4 pt-4 pb-2 text-black outline-none transition-all duration-300 ${
            showError
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />
        {showError && (
          <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
            ⚠️ Invalid Email. Please Check
          </p>
        )}

        <PlainButton
          name="Send OTP"
          disabled={!isEmailValid}
          onClick={() => alert("OTP Sent")}
        />
      </div>
    </div>
  );
}
