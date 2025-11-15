"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export default function VideoModal() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsVideoModalOpen(true)}
        className="cursor-pointer rounded-xl border-2 border-white/30 bg-transparent px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-blue-800/50"
      >
        Watch Demo
      </button>

      {/* Video Modal rendered in portal */}
      {isVideoModalOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm duration-300"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <div
              className="animate-in zoom-in slide-in-from-bottom-4 relative w-full max-w-7xl duration-500"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="group absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:rotate-90 hover:bg-white/20"
                aria-label="Close video"
              >
                <svg
                  className="h-6 w-6 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Video container */}
              <div
                className="relative overflow-hidden rounded-2xl bg-black shadow-2xl ring-4 ring-white/10"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 h-full w-full"
                  src="https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1"
                  title="POS System Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
