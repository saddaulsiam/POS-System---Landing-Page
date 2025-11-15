import TestimonialCarousel from "../client/TestimonialCarousel";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Owner, Fresh Market Grocery",
      image: "SJ",
      content:
        "Switching to SmartPOS was the best decision for our store. Checkout is 3x faster and our customers love it. The inventory tracking alone saved us thousands!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Manager, Downtown Cafe",
      image: "MC",
      content:
        "Finally, a POS system that just works! Setup took 10 minutes and our staff learned it in one day. The reporting features are incredible.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Owner, Fashion Boutique",
      image: "ER",
      content:
        "The variant management is perfect for our clothing store. We can track sizes and colors effortlessly. Customer support is also top-notch!",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-linear-to-b from-white to-gray-50 py-20"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-indigo-100/20 blur-3xl"></div>

      <div className="max-w-8xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Testimonials
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Loved by Business Owners Everywhere
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            See what our customers have to say about SmartPOS
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden grid-cols-1 gap-8 md:grid md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              <div className="mt-4 mb-6 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-8 leading-relaxed text-gray-700">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-md">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <TestimonialCarousel testimonials={testimonials} />

        {/* Trust badges */}
        <div className="mt-20 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">500+</div>
              <div className="text-sm font-medium text-gray-600">
                Active Users
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">50K+</div>
              <div className="text-sm font-medium text-gray-600">
                Transactions/Day
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">4.9/5</div>
              <div className="text-sm font-medium text-gray-600">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">24/7</div>
              <div className="text-sm font-medium text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
