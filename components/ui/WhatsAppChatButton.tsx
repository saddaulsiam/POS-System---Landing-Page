"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const CUSTOMER_IMAGES = [
  "/WhatsApp-Image1.jpg",
  "/WhatsApp-Image2.jpg",
  "/WhatsApp-Image3.jpg",
];

function Toast({
  onClose,
  showAvatar,
}: {
  onClose: () => void;
  showAvatar: boolean;
}) {
  return (
    <div className="animate-fade-in relative mr-4 flex max-w-[220px] items-center rounded-lg border-2 border-green-500 bg-white px-4 py-2 shadow-lg">
      <button
        onClick={onClose}
        className="ext-gray-400 absolute -top-3 -left-3 cursor-pointer rounded-full bg-white p-1 text-gray-400 hover:text-gray-700 focus:outline-none"
        aria-label="Close toast"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path
            d="M6 6l8 8M6 14L14 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <span className="font-medium text-green-700">
        {showAvatar
          ? "স্যার, কিভাবে সহযোগিতা করতে পারি?"
          : "Live chat on WhatsApp"}
      </span>

      {/* FIXED ARROW (Right Side, Perfectly Centered) */}
      <span className="absolute top-1/2 -right-3 -translate-y-1/2">
        <span className="block h-0 w-0 border-t-[10px] border-b-[10px] border-l-[12px] border-transparent border-l-green-500"></span>
      </span>
    </div>
  );
}

function WhatsAppChatButton() {
  const phone = "8801311333277";
  const message = encodeURIComponent(
    "Hello! I have a question about your POS system.",
  );

  const [showAvatar, setShowAvatar] = useState(false);
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAvatar(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showAvatar) return;

    const interval = setInterval(() => {
      setAvatarIndex((prev) => (prev + 1) % CUSTOMER_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [showAvatar]);

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-row items-center">
      {showToast && (
        <Toast onClose={() => setShowToast(false)} showAvatar={showAvatar} />
      )}

      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 ${
          !showAvatar && "bg-green-500 hover:bg-green-600"
        } `}
      >
        {!showAvatar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="h-8 w-8"
          >
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.646.86 5.09 2.33 7.09L4 29l7.18-2.28A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.84-.58-5.4-1.58l-.38-.24-4.28 1.36 1.4-4.16-.25-.4A9.93 9.93 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.18.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.2 0-.52.07-.8.36-.28.28-1.06 1.04-1.06 2.54 0 1.5 1.09 2.95 1.24 3.16.15.21 2.14 3.28 5.19 4.47.73.31 1.3.5 1.75.64.74.24 1.41.21 1.94.13.59-.09 1.81-.74 2.07-1.46.26-.72.26-1.34.18-1.46-.08-.12-.26-.19-.54-.33z" />
          </svg>
        ) : (
          <span className="relative block h-full w-full">
            <Image
              src={CUSTOMER_IMAGES[avatarIndex]}
              alt="Customer Care"
              fill
              className="rounded-full border-2 border-white object-cover shadow ring-3 ring-green-500"
              priority
            />
          </span>
        )}
      </a>
    </div>
  );
}

export default WhatsAppChatButton;
