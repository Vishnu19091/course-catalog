"use client";
import { useEffect, useRef, useState } from "react";

interface MobileDragModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export function MobileDragModal({ children, onClose }: MobileDragModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [dragY, setDragY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only show modal drag version on small screens
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Touch Handlers
  const startYRef = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaY = e.touches[0].clientY - startYRef.current;
    if (deltaY > 0) setDragY(deltaY);
  };

  const handleTouchEnd = () => {
    if (dragY > 150) {
      onClose(); // Dismiss modal
    }
    setDragY(0); // Reset
  };

  if (!isMobile)
    return (
      <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-[2px] flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-xl tablet:w-[50%]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Course Filters</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
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
          <div className="grid grid-cols-2 gap-x-5 mt-6">
            <button className="bg-red-500 text-white py-2 rounded-xl">
              Clear
            </button>
            <button className="bg-blue-500 text-white py-2 rounded-xl">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    );

  // Below one Only render in mobile view
  return (
    <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-[2px] flex items-end justify-center">
      <div
        ref={modalRef}
        style={{ transform: `translateY(${dragY}px)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="bg-white rounded-t-2xl shadow-xl w-full p-6 transition-transform duration-200 ease-out"
      >
        <div className="w-20 h-1.5 bg-gray-300 rounded-full mx-auto -mt-4 mb-4" />
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Course Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
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
        <div className="grid grid-cols-2 gap-x-5 mt-6">
          <button className="bg-red-500 text-white py-2 rounded-xl">
            Clear
          </button>
          <button className="bg-blue-500 text-white py-2 rounded-xl">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
