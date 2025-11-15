interface FeatureDemoModalProps {
  feature: {
    title: string;
    demoUrl: string;
    description: string;
  } | null;
  onClose: () => void;
}

export default function FeatureDemoModal({
  feature,
  onClose,
}: FeatureDemoModalProps) {
  if (!feature) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-4xl rounded-xl bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center text-gray-500 transition-all hover:rotate-90 hover:text-gray-700"
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
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          {feature.title} Demo
        </h2>
        <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
          <iframe
            src={feature.demoUrl}
            title={feature.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>
        <p className="text-gray-700">{feature.description}</p>
      </div>
    </div>
  );
}
