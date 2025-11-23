"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type OS = "mac" | "windows" | "other";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [os, setOs] = useState<OS>("other");

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Show button after scrolling 100px
    };

    // Basic OS detection
    const detectOS = () => {
      const platform = window.navigator.platform.toLowerCase();
      const userAgent = window.navigator.userAgent.toLowerCase();

      if (platform.includes("mac") || userAgent.includes("mac os x")) {
        setOs("mac");
      } else if (platform.includes("win") || userAgent.includes("windows")) {
        setOs("windows");
      } else {
        setOs("other");
      }
    };

    detectOS();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen text-white bg-[linear-gradient(to_bottom_left,rgba(210,255,130,0.85)_0%,rgba(185,255,90,0.9)_45%,rgba(0,255,120,0.95)_100%)] overflow-hidden">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,180,0.55),transparent_55%)]" />

      {/* Floating Glassy Download Button */}
      <button 
        className={`fixed top-6 right-6 z-50 h-10 px-4 rounded-lg font-semibold text-white inline-flex items-center justify-center gap-2 text-sm transition-all duration-300 bg-gradient-to-br from-[#3FA3FF] to-[#2B8CFF] border border-white/30 shadow-[0_8px_32px_rgba(59,130,246,0.5)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.6)] hover:scale-105 ${
          isScrolled 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* OS-specific icon */}
        {os === "mac" && (
          <span
            aria-hidden="true"
            className="text-lg leading-none"
          >
            
          </span>
        )}

        {os === "windows" && (
          <svg 
            className="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="white"
            aria-hidden="true"
          >
            {/* Windows 11-style four-pane logo */}
            <path d="M3 3l8-1.5v9H3V3zm10 0l8-1.5v10h-8V3zM3 13h8v9L3 20.5V13zm10 0h8v10l-8-1.5V13z" />
          </svg>
        )}

        {/* You can add a generic icon here for 'other' OS if you want */}
        {/* {os === "other" && (...)} */}

        <span>Download</span>
      </button>

      {/* Outer page wrapper */}
      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <div className="flex min-h-screen flex-col">

          {/* Navbar */}
          <header className="mb-12 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/Claritron logo-white.png"
                alt="Claritron logo"
                width={180}
                height={48}
                className="object-contain transition-transform hover:scale-105"
                priority
              />
            </div>

            <nav className="hidden gap-8 text-sm text-white/85 md:flex">
              <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
              <a href="#how-it-works" className="hover:text-white transition-colors duration-200">How it works</a>
              <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
            </nav>

            {/* Original button removed from navbar */}
            <div className="w-32"></div> {/* Spacer to maintain layout */}
          </header>

          {/* HERO SECTION */}
          <div className="grid flex-1 items-center gap-16 md:grid-cols-2">
            {/* Left Content */}
            <section className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white">
                Your digital second brain • Always on • Always with you
              </p>

              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
                The intelligence that learns{" "}
                <span className="bg-gradient-to-r from-[#A06BFF] to-[#3FA3FF] bg-clip-text text-transparent">
                  you
                </span>
                .
              </h1>

              <p className="text-lg text-white font-medium leading-relaxed">
                Claritron sits quietly on top of your screen—reading, analyzing, and
                tailoring everything to how <span className="font-bold">you</span> think and learn.
                Not just another app. A personal AI overlay that actually knows and understands you.
                Like having your favorite tutor with you 24/7 - a digital external cortex. 
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-gradient-to-r from-[#A06BFF] to-[#3FA3FF] px-8 py-3 font-semibold text-white hover:opacity-90 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#A06BFF]/30">
                  Get early access
                </button>

                <button className="rounded-full border border-[#c9ffdd]/40 px-8 py-3 font-medium text-white/90 bg-[rgba(0,255,120,0.20)] backdrop-blur-md hover:bg-[rgba(0,255,120,0.28)] transition-all duration-200 hover:scale-105">
                  Watch it in action
                </button>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  "🧠 Learns your cognitive patterns",
                  "🔍 Extracts meaningful insights", 
                  "💻 Built for students & professionals",
                  "🚀 Always adapting to you"
                ].map((text, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-[#c9ffdd]/35 bg-[rgba(0,255,120,0.18)] px-4 py-2 text-sm backdrop-blur-md text-white/90 transition-all duration-200 hover:scale-105"
                  >
                    {text}
                  </span>
                ))}
              </div>
            </section>

            {/* Right: Interactive Demo Card */}
            <section className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,255,120,0.55),transparent_60%)]" />

              <div className="w-full max-w-md rounded-3xl border border-[#00ff66]/45 bg-[rgba(10,15,12,0.45)] backdrop-blur-2xl p-6 shadow-[0_0_55px_rgba(0,255,120,0.28)] hover:shadow-[0_0_65px_rgba(0,255,120,0.35)] transition-all duration-500">
                
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full border border-[#00ff66]/80 bg-gradient-to-br from-[#00ff66]/85 to-[#00ff99]/55 shadow-[0_0_28px_rgba(0,255,120,1)] animate-pulse" />
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-white">
                        Claritron Overlay
                      </p>
                      <p className="text-xs text-white/85">Active on this page</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-[#00ff66]/60 bg-[#00ff66]/20 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm animate-pulse">
                    Live
                  </span>
                </div>

                {/* Content Panel */}
                <div className="space-y-4 rounded-2xl border border-[#00ff6a]/40 bg-[rgba(5,20,10,0.5)] p-4 backdrop-blur-2xl shadow-[0_0_18px_rgba(0,0,0,0.25),0_0_22px_rgba(0,255,120,0.32),inset_0_0_40px_rgba(0,255,120,0.2)]">
                  <p className="text-sm font-semibold text-white">Learning Insights</p>
                  <ul className="space-y-2 text-sm text-white/90">
                    {[
                      "Analyzes content patterns in real time",
                      "Adapts explanations to your learning style",
                      "Connects new concepts with your existing knowledge",
                      "Provides personalized learning frameworks"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#00ff66] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between text-sm text-white/88">
                  <span>
                    Profile: <span className="text-white">College student • CS</span>
                  </span>
                  <span>
                    Mode: <span className="text-[#b0ffcf]">Exam prep</span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <section id="features" className="my-32">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Knowledge processing -{" "}
              <span className="text-[#00ff4d] bg-gradient-to-r from-[#A06BFF] to-[#3FA3FF] bg-clip-text text-transparent">
                Evolved
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Claritron transforms how you interact with information—creating personalized learning pathways that adapt to your unique cognitive patterns.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Contextual Analysis",
                description: "Understands content in real time",
                details: "As you engage with material, Claritron identifies key patterns and structures information according to your learning preferences.",
                icon: "⚡",
                large: true
              },
              {
                title: "Personalized Frameworks", 
                description: "Creates learning structures for you",
                details: "Builds customized mental models and organizational frameworks that match how you process information.",
                icon: "🎯"
              },
              {
                title: "Knowledge Integration",
                description: "Connects concepts across contexts", 
                details: "Helps you see relationships between ideas and builds upon your existing understanding.",
                icon: "🧩"
              },
              {
                title: "Pattern Recognition",
                description: "Identifies what matters to you",
                details: "Focuses on meaningful concepts and insights relevant to your learning objectives.",
                icon: "📊"
              },
              {
                title: "Cross-Platform Learning",
                description: "Works across all your content",
                details: "Integrates with browsers, documents, and videos to create unified learning experiences.",
                icon: "💫"
              },
              {
                title: "Privacy First",
                description: "Your insights remain yours",
                details: "All processing prioritizes your privacy. We focus on transformative learning, not content replication.",
                icon: "🔒"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`rounded-3xl border border-[#00ff6a]/40 bg-[rgba(30,55,40,0.36)] backdrop-blur-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00ff66]/20 ${
                  feature.large ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-4 text-2xl">{feature.icon}</div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  {feature.title}</p>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.description}
                </h3>
                <p className="text-sm text-white/88 leading-relaxed">
                  {feature.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section id="how-it-works" className="my-32">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              How Claritron Transforms Learning
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Claritron adapts your digital world to align with your learning style and mental models.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Observes & Analyzes",
                description: "Claritron helps you spot what's important as you browse and learn, and filters out what you don't care about",
                icon: "👁️"
              },
              {
                step: "02", 
                title: "Creates Frameworks",
                description: "Digital information is presented in ways that make sense to you - personally.",
                icon: "🔄"
              },
              {
                step: "03",
                title: "Adapts & Evolves", 
                description: "The more you use it the more it understands you, and the better it gets at helping you learn.",
                icon: "📈"
              }
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[#00ff6a]/40 bg-[rgba(30,55,40,0.36)] backdrop-blur-2xl p-8 text-center transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-2xl font-bold text-[#00ff66] mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text:white mb-4">{step.title}</h3>
                <p className="text-white/88 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="my-32 text-center">
          <div className="rounded-3xl border border-[#00ff6a]/40 bg-[rgba(30,55,40,0.36)] backdrop-blur-2xl p-12">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-6">
              Ready to transform how you learn?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Join the beta and experience personalized learning that adapts to you, not the other way around.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-gradient-to-r from-[#A06BFF] to-[#3FA3FF] px-8 py-3 font-semibold text-white hover:opacity-90 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#A06BFF]/30">
                Get early access
              </button>
              <button className="rounded-full border border-[#c9ffdd]/40 px-8 py-3 font-medium text-white/90 bg-[rgba(0,255,120,0.20)] backdrop-blur-md hover:bg-[rgba(0,255,120,0.28)] transition-all duration-200 hover:scale-105">
                Schedule a demo
              </button>
            </div>
          </div>
        </section>

        {/* Footer - Now seamlessly integrated */}
        <footer className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="flex items-center gap-3">
                <span className="text-sm text-white/70">Claritron © 2024</span>
              </div>
              <nav className="flex gap-6 text-sm text-white/70">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </nav>
            </div>
            <div className="mt-8 text-center text-xs text-white/50">
              Claritron creates transformative learning experiences through personalized cognitive frameworks. 
              We do not store, reproduce, or distribute copyrighted content.
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
