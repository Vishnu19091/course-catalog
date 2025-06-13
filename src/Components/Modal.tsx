"use client";

import React, { useState } from "react";
import { RedButton, BlueButton } from "./Buttons/Buttons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
      <div className="bg-white p-6 rounded-lg shadow-xl desktop:w-[40%]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Course Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none hover:cursor-pointer"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-4">{children}</div>
        <div className="flex justify-end">
          <div className="grid grid-cols-2 gap-x-5 justify-around w-full">
            <RedButton name="Clear" />
            <BlueButton name="Apply Filters" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
