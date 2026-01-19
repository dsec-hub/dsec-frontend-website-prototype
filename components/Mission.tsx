'use client';

export default function Mission() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl mb-4">
            More Than a{' '}
            <span className="bg-gradient-to-r from-creative-violet to-action-pink bg-clip-text text-transparent">
              Coding Club
            </span>
          </h2>
          <p className="text-xl text-clarity-white/70 max-w-3xl mx-auto">
            We empower members to design, code, and ship hackathon-level projects through hands-on workshops, 
            resources, and a supportive builder-driven community.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: For Students */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-signal-lime/20 rounded-full blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-clarity-white/5 to-clarity-white/[0.02] border border-clarity-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="inline-block px-4 py-2 bg-signal-lime/20 rounded-full mb-6">
                <span className="font-mono text-sm text-signal-lime">01</span>
              </div>
              <h3 className="font-grotesk text-3xl font-bold mb-4">For Students</h3>
              <p className="text-clarity-white/70 mb-6 leading-relaxed">
                Build portfolio-ready software projects. Not just course assignments, but real products you can 
                showcase to recruiters. Go from "I'm learning to code" to "I ship working software."
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-signal-lime flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-clarity-white/80">Hands-on workshops that build real skills</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-signal-lime flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-clarity-white/80">Hackathons to test and ship projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-signal-lime flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-clarity-white/80">Supportive community of builders</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: For Industry */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-action-pink/20 rounded-full blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-clarity-white/5 to-clarity-white/[0.02] border border-clarity-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="inline-block px-4 py-2 bg-action-pink/20 rounded-full mb-6">
                <span className="font-mono text-sm text-action-pink">02</span>
              </div>
              <h3 className="font-grotesk text-3xl font-bold mb-4">For Industry & Deakin Staff</h3>
              <p className="text-clarity-white/70 mb-6 leading-relaxed">
                Meet student developers who ship projects, not just pass exams. Connect with motivated builders 
                actively creating their portfolios and preparing for real-world software careers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-action-pink flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-clarity-white/80">Access to ambitious student developers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-action-pink flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-clarity-white/80">Partnership opportunities through events</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-action-pink flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-clarity-white/80">Early access to emerging tech talent</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brand Values */}
        <div className="mt-32">
          <h3 className="font-grotesk text-3xl font-bold text-center mb-16">Our Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-action-pink to-creative-violet rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="font-grotesk font-bold text-lg mb-2">Build With Purpose</h4>
              <p className="text-clarity-white/60 text-sm">Create real projects that solve real problems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-signal-lime to-tech-glow-cyan rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-grotesk font-bold text-lg mb-2">Learn Boldly</h4>
              <p className="text-clarity-white/60 text-sm">Experiment, explore, and push creative limits</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-creative-violet to-action-pink rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-grotesk font-bold text-lg mb-2">Community First</h4>
              <p className="text-clarity-white/60 text-sm">Collaborate, support, and grow together</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-energy-coral to-action-pink rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-grotesk font-bold text-lg mb-2">Future-Ready</h4>
              <p className="text-clarity-white/60 text-sm">Prepare for internships and impactful careers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}