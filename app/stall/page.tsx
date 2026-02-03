import StallHero from '@/components/stall/StallHero';
import WhatYoullFindSection from '@/components/stall/WhatYoullFindSection';
import CoinSystemSection from '@/components/stall/CoinSystemSection';
import LiveDemosSection from '@/components/stall/LiveDemosSection';
import WhoCanJoinSection from '@/components/stall/WhoCanJoinSection';
import AfterYouJoinSection from '@/components/stall/AfterYouJoinSection';
import FollowUsSection from '@/components/stall/FollowUsSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DSEC T1 Market Day 2026 | Deakin Software Engineering Club Burwood',
  description: 'Join Deakin Software Engineering Club at T1 Market Day Feb 23-24. Free giveaways, limited merch, $5 membership. Open to all students. Burwood Sports Hall 11:30am-2:30pm.',
  keywords: [
    'Deakin Software Engineering Club',
    'Coding clubs Melbourne',
    'Deakin tech clubs',
    'Student developer groups Burwood',
    'DSEC market day',
    'software engineering societies',
    'Melbourne hackathons and workshops',
  ],
  openGraph: {
    title: 'DSEC T1 Market Day 2026 | Deakin Software Engineering Club Burwood',
    description: 'Join Deakin Software Engineering Club at T1 Market Day Feb 23-24. Free giveaways, limited merch, $5 membership. Open to all students.',
    type: 'website',
  },
};

export default function StallPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <StallHero />
      <WhatYoullFindSection />
      <CoinSystemSection />
      <LiveDemosSection />
      <WhoCanJoinSection />
      <AfterYouJoinSection />
      <FollowUsSection />
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "DSEC T1 Market Day 2026",
            "description": "Meet the Deakin Software Engineering Club at Trimester 1 Market Day. Free giveaways, limited merch, membership sign-ups, and live project demos.",
            "startDate": "2026-02-23T11:30:00+11:00",
            "endDate": "2026-02-24T14:30:00+11:00",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "Sports Hall, Deakin University Burwood Campus",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "221 Burwood Highway",
                "addressLocality": "Burwood",
                "addressRegion": "VIC",
                "postalCode": "3125",
                "addressCountry": "AU"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Deakin Software Engineering Club",
              "url": "https://dsec.club"
            },
            "offers": {
              "@type": "Offer",
              "price": "5.00",
              "priceCurrency": "AUD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-02-23T11:30:00+11:00"
            }
          })
        }}
      />
    </main>
  );
}
