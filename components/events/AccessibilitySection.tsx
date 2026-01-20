'use client';

export default function AccessibilitySection() {
  return (
    <section className="relative bg-card py-16 md:py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-4 font-mono text-sm tracking-wider text-secondary uppercase">Accessibility and Catering</p>
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4 max-w-2xl">
            Accessibility and event details
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Accessibility card */}
          <div className="relative p-8 rounded-2xl border border-secondary/20 bg-secondary/5">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-lime flex items-center justify-center mb-6">
              <AccessibilityIcon />
            </div>

            <h3 className="font-grotesk text-xl font-bold text-foreground mb-4">Accessible events through Humanitix</h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                DSEC uses Humanitix for event registrations because it supports accessible events and provides space for clear accessibility information. On each Humanitix event page you will find details such as:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-secondary/20 text-secondary shrink-0 mt-0.5">
                    <CheckIcon />
                  </div>
                  <span>Whether the venue has step free or wheelchair access</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-secondary/20 text-secondary shrink-0 mt-0.5">
                    <CheckIcon />
                  </div>
                  <span>How to request accessibility support or ask questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-secondary/20 text-secondary shrink-0 mt-0.5">
                    <CheckIcon />
                  </div>
                  <span>Any specific accessibility features for that event</span>
                </li>
              </ul>

              <p className="text-sm">
                Accessibility information is collected and displayed through Humanitix, who are working to make ticketing and events more accessible and screen reader friendly.
              </p>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-6 right-6">
              <svg width="60" height="60" viewBox="0 0 60 60" className="text-secondary/10">
                <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          {/* Catering card */}
          <div className="relative p-8 rounded-2xl border border-lime/20 bg-lime/5">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lime to-secondary flex items-center justify-center mb-6">
              <CateringIcon />
            </div>

            <h3 className="font-grotesk text-xl font-bold text-foreground mb-4">Catering and dietary information</h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Where catering is provided—like pizza nights or snacks at workshops—we follow DUSA and Deakin event guidelines and aim to offer vegetarian options and clearly label common allergens.
              </p>

              <p>
                Full catering details and any dietary questions will be listed on the Humanitix event page for each specific event.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1.5 bg-lime/20 text-lime text-xs font-medium rounded-full">Vegetarian options</span>
                <span className="px-3 py-1.5 bg-lime/20 text-lime text-xs font-medium rounded-full">Allergen labels</span>
                <span className="px-3 py-1.5 bg-lime/20 text-lime text-xs font-medium rounded-full">DUSA guidelines</span>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-6 right-6">
              <svg width="60" height="60" viewBox="0 0 60 60" className="text-lime/10">
                <path d="M0 0 L60 0 L60 60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Contact note */}
        <div className="mt-8 p-6 rounded-2xl bg-muted/30 border border-border">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/20 text-primary shrink-0">
              <MessageIcon />
            </div>
            <div>
              <p className="text-foreground font-medium mb-1">Have questions about a specific event?</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                If you have questions about accessibility or catering for a specific event, use the contact details on the Humanitix listing or message the DSEC exec team before the event so we can help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Icons
function AccessibilityIcon() {
  return (
    <svg className="w-7 h-7 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function CateringIcon() {
  return (
    <svg className="w-7 h-7 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
