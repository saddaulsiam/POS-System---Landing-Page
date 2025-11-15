import Image from "next/image";
import Link from "next/link";
import VideoModal from "../client/VideoModal";
import AnimatedSection from "../ui/AnimatedSection";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute right-10 bottom-20 h-96 w-96 animate-pulse rounded-full bg-indigo-400 blur-3xl delay-1000"></div>
      </div>

      <div className="max-w-8xl relative mx-auto px-4 pt-32 pb-24 sm:px-6 lg:px-8 lg:pt-40 lg:pb-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Content */}
          <AnimatedSection
            animation="fade-up"
            className="text-center lg:text-left"
          >
            <div className="mb-6 inline-block rounded-full border border-blue-400/50 bg-blue-500/30 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-semibold">
                🎉 New: Multi-location support now available!
              </span>
            </div>

            <h1 className="mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-[3.6rem]">
              The Modern POS System
              <span className="mt-2 block bg-linear-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                That Grows With You
              </span>
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-blue-100 lg:text-xl">
              Streamline sales, track inventory, and delight customers with our
              powerful, easy-to-use point of sale system. Built for businesses
              that want more.
            </p>

            <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#pricing"
                className="group hover:shadow-3xl rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-2xl transition-all hover:scale-105 hover:bg-blue-50"
              >
                Start Free Trial
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <VideoModal />
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-100 lg:justify-start lg:gap-6">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 shrink-0 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 shrink-0 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">60-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 shrink-0 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Cancel anytime</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Image */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="relative hidden lg:block">
              {/* Image container */}
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 transition-all duration-500 hover:shadow-blue-500/20">
                <Image
                  src="/pos-screenshot.png"
                  alt="POS System Interface"
                  width={800}
                  height={600}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/30 via-transparent to-transparent"></div>
              </div>

              {/* Stats badges */}
              <Link
                href="https://pos-system-grocery.vercel.app"
                target="_blank"
                className="absolute -bottom-4 -left-4 cursor-pointer rounded-xl bg-white px-5 py-3 shadow-xl outline-none"
              >
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
                  <span className="text-sm font-bold text-gray-900">
                    Live Demo
                  </span>
                </div>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute right-0 bottom-0 left-0 h-[120px] leading-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
