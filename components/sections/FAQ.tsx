import FAQList from "../client/FAQList";

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-gray-50 py-20">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-indigo-50/30"></div>
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl"></div>

      <div className="max-w-8xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              FAQ
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Everything you need to know about SmartPOS. Can&apos;t find the
            answer you&apos;re looking for? Feel free to contact us.
          </p>
        </div>

        <FAQList />

        <div className="mt-16 text-center">
          <p className="mb-4 text-lg text-gray-600">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
