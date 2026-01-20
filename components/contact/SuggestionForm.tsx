'use client';

import { useState } from 'react';

type SuggestionTopic = 'events' | 'projects' | 'community' | 'discord' | 'other';

interface FormData {
  name: string;
  email: string;
  topic: SuggestionTopic | '';
  suggestion: string;
}

export default function SuggestionForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    topic: '',
    suggestion: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="suggestion" className="relative bg-background py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-0 w-80 h-80 bg-lime/5 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: '2s' }}
          />
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-lime to-secondary flex items-center justify-center">
            <SparkleIcon />
          </div>
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
            Thanks for sharing your idea
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Thoughtful suggestions help us shape better events, projects, and support for Deakin students. We appreciate you taking the time.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', topic: '', suggestion: '' });
            }}
            className="mt-8 px-6 py-3 border border-foreground/20 text-foreground hover:bg-foreground/10 rounded-full font-semibold transition-all"
          >
            Share another idea
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="suggestion" className="relative bg-background py-16 md:py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-80 h-80 bg-lime/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '2s' }}
        />

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-[15%] text-5xl text-lime/10 font-mono animate-float">{'*'}</div>
        <div className="absolute bottom-32 left-[10%] text-6xl text-secondary/10 font-mono animate-float" style={{ animationDelay: '1s' }}>
          {'?'}
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-4 font-mono text-sm tracking-wider text-lime uppercase">Feedback & Ideas</p>
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4 max-w-2xl">
            Share an idea or suggestion
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Got feedback about an event, a workshop idea, a project you would love to see, or something we could do better? Use this simple suggestion box. You can include your name or stay anonymous.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form - takes more space */}
          <div className="lg:col-span-3 relative p-8 rounded-2xl border border-lime/20 bg-lime/5">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lime to-secondary flex items-center justify-center mb-6">
              <LightbulbIcon />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name field (optional) */}
                <div>
                  <label htmlFor="suggestion-name" className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="suggestion-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime transition-colors"
                  />
                </div>

                {/* Email field (optional) */}
                <div>
                  <label htmlFor="suggestion-email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-muted-foreground">(optional, if you want a reply)</span>
                  </label>
                  <input
                    type="email"
                    id="suggestion-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime transition-colors"
                  />
                </div>
              </div>

              {/* Topic field */}
              <div>
                <label htmlFor="suggestion-topic" className="block text-sm font-medium text-foreground mb-2">
                  Topic
                </label>
                <select
                  id="suggestion-topic"
                  name="topic"
                  required
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>What&apos;s this about?</option>
                  <option value="events">Events</option>
                  <option value="projects">Projects</option>
                  <option value="community">Community</option>
                  <option value="discord">Discord</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Suggestion field */}
              <div>
                <label htmlFor="suggestion" className="block text-sm font-medium text-foreground mb-2">
                  Your suggestion
                </label>
                <textarea
                  id="suggestion"
                  name="suggestion"
                  required
                  rows={5}
                  value={formData.suggestion}
                  onChange={handleChange}
                  placeholder="Share your idea, feedback, or suggestion..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-lime hover:bg-lime/90 text-lime-foreground rounded-xl font-semibold gap-2 flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner />
                    Submitting...
                  </>
                ) : (
                  <>
                    <SendIcon />
                    Submit suggestion
                  </>
                )}
              </button>
            </form>

            {/* Decorative corner */}
            <div className="absolute top-6 right-6">
              <svg width="60" height="60" viewBox="0 0 60 60" className="text-lime/10">
                <path d="M0 0 L60 0 L60 60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          {/* Side info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Encouragement box */}
            <div className="p-6 rounded-2xl bg-muted/30 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-lime/20 text-lime shrink-0">
                  <SparkleIcon small />
                </div>
                <div>
                  <p className="text-foreground font-medium mb-1">Every idea counts</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Thoughtful suggestions help us shape better events, projects, and support for Deakin students. Even a short idea can spark a new workshop or improve how we run things.
                  </p>
                </div>
              </div>
            </div>

            {/* Anonymous note */}
            <div className="p-6 rounded-2xl bg-muted/30 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-secondary/20 text-secondary shrink-0">
                  <EyeOffIcon />
                </div>
                <div>
                  <p className="text-foreground font-medium mb-1">Stay anonymous if you prefer</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Name and email are both optional. If you want a response, include your email. Otherwise, your suggestion will be completely anonymous.
                  </p>
                </div>
              </div>
            </div>

            {/* Examples */}
            <div className="p-6 rounded-2xl border border-secondary/20 bg-secondary/5">
              <h3 className="font-grotesk text-lg font-bold text-foreground mb-4">Ideas we&apos;d love to hear</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>Workshop topics you want to learn</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>Project ideas for the community</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>Ways to improve events or socials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>Discord server improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>Feedback on past events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Icons
function LightbulbIcon() {
  return (
    <svg className="w-7 h-7 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}

function SparkleIcon({ small }: { small?: boolean }) {
  const size = small ? 'w-5 h-5' : 'w-10 h-10';
  return (
    <svg className={`${size} ${small ? '' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  );
}

function LoadingSpinner() {
  return (
    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}
