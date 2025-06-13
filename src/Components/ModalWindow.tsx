"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { FilterCourseComp } from "./CourseFilters/FilterCourseComp";

const ModalFilterButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const FilterBoards = [
    { name: "CBSE" },
    { name: "ICSE" },
    { name: "State Board" },
  ];

  const FilterClasses = Array.from({ length: 12 }, (_, i) => ({
    name: `Class ${i + 1}`,
  }));

  return (
    <div>
      <button
        onClick={openModal}
        className="flex flex-row border-[2px] border-[#0088ff] gap-2 rounded-xl px-3 py-1.5 hover:cursor-pointer mobile:scale-[0.75] lmobile:scale-[0.8] tablet:scale-[1]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0088ff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M6 4v4" />
          <path d="M6 12v8" />
          <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M12 4v10" />
          <path d="M12 18v2" />
          <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M18 4v1" />
          <path d="M18 9v11" />
        </svg>
        <p className="text-lg font-[600] text-[#0088ff]">Filters</p>
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <FilterCourseComp title="Select Board" items={FilterBoards} />
        <FilterCourseComp title="Select Class" items={FilterClasses} />
      </Modal>
    </div>
  );
};

export default ModalFilterButton;
