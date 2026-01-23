'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TermsPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 py-24 md:px-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="hover:text-foreground">Home</a></li>
            <li>/</li>
            <li><span className="text-foreground">Terms and Conditions</span></li>
          </ol>
        </nav>

        <div className="mb-8">
          <h1 className="mb-4 font-grotesk text-4xl font-bold text-foreground md:text-5xl">
            DSEC Portal Terms and Conditions
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: January 23, 2026
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 rounded-lg border border-border bg-card p-6">
          <h2 className="mb-4 font-grotesk text-xl font-bold text-foreground">
            Table of Contents
          </h2>
          <nav className="grid gap-2 md:grid-cols-2">
            <a href="#introduction" className="text-sm text-primary hover:underline">Introduction</a>
            <a href="#acceptance" className="text-sm text-primary hover:underline">1. Acceptance of Terms</a>
            <a href="#dusa-affiliation" className="text-sm text-primary hover:underline">2. DUSA Affiliation and Governance</a>
            <a href="#eligibility" className="text-sm text-primary hover:underline">3. Eligibility and Account Registration</a>
            <a href="#portal-usage" className="text-sm text-primary hover:underline">4. Portal Usage</a>
            <a href="#privacy" className="text-sm text-primary hover:underline">5. Member Data and Privacy</a>
            <a href="#intellectual-property" className="text-sm text-primary hover:underline">6. Intellectual Property</a>
            <a href="#events" className="text-sm text-primary hover:underline">7. Events and Activities</a>
            <a href="#financial" className="text-sm text-primary hover:underline">8. Financial Matters</a>
            <a href="#termination" className="text-sm text-primary hover:underline">9. Termination and Suspension</a>
            <a href="#disclaimers" className="text-sm text-primary hover:underline">10. Disclaimers</a>
            <a href="#liability" className="text-sm text-primary hover:underline">11. Limitation of Liability</a>
            <a href="#changes" className="text-sm text-primary hover:underline">12. Changes to Terms</a>
            <a href="#governing-law" className="text-sm text-primary hover:underline">13. Governing Law</a>
            <a href="#general" className="text-sm text-primary hover:underline">14. General Provisions</a>
            <a href="#contact" className="text-sm text-primary hover:underline">15. Contact Information</a>
          </nav>
        </div>

        <div className="prose prose-invert prose-neutral max-w-none space-y-8">
          <section id="introduction">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              Introduction
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Welcome to the Deakin Software Engineering Club (DSEC) portal ("Portal"). By accessing or using this Portal, you agree to be bound by these Terms and Conditions. The Portal is operated by DSEC, a student-led club affiliated with the Deakin University Student Association (DUSA) at Deakin University's Burwood campus.
            </p>
          </section>

          <section id="acceptance">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              By creating an account, accessing, or using the DSEC Portal, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, along with our Privacy Policy. If you do not agree to these terms, you must not use the Portal.
            </p>
          </section>

          <section id="dusa-affiliation">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              2. DUSA Affiliation and Governance
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong>2.1.</strong> DSEC is affiliated with DUSA and operates in accordance with:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>The DUSA Clubs Charter</li>
                <li>The DUSA Club Manual</li>
                <li>DUSA Rules and Regulations</li>
                <li>DUSA Club Membership Terms & Conditions</li>
                <li>The DSEC Constitution</li>
              </ul>
              <p>
                <strong>2.2.</strong> All Portal users must comply with DUSA policies, Deakin University policies, and applicable Australian laws.
              </p>
              <p>
                <strong>2.3.</strong> DUSA may suspend, change, or cancel club benefits and Portal access at any time in accordance with DUSA governing documents.
              </p>
            </div>
          </section>

          <section id="eligibility">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              3. Eligibility and Account Registration
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong>3.1. Who Can Join:</strong> The Portal is open to all individuals interested in software engineering and technology. While DSEC is based at Deakin University Burwood, membership is not restricted to Deakin students.
              </p>
              <p>
                <strong>3.2. DUSA Membership:</strong> If you are a Deakin student and have purchased DUSA membership through DUSA, you may be eligible for member benefits. Use your DUSA-registered email when creating your Portal account to link your membership, or you can connect it later in your account settings.
              </p>
              <p>
                <strong>3.3. Account Creation:</strong> You must provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials.
              </p>
              <p>
                <strong>3.4. Age Requirement:</strong> You must be at least 13 years old to use this Portal. Users under 18 should have parental or guardian consent.
              </p>
              <p>
                <strong>3.5. Account Security:</strong> You are responsible for all activity that occurs under your account. Notify us immediately of any unauthorized use.
              </p>
            </div>
          </section>

          <section id="portal-usage">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              4. Portal Usage
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong>4.1. Permitted Use:</strong> The Portal is designed to facilitate:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Access to DSEC events, workshops, and projects</li>
                <li>Collaboration with other members</li>
                <li>Communication about club activities</li>
                <li>Portfolio building and skill development</li>
              </ul>
              <p>
                <strong>4.2. Prohibited Activities:</strong> You must not:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Upload malicious code, viruses, or harmful content</li>
                <li>Harass, abuse, or harm other members</li>
                <li>Impersonate others or misrepresent your affiliation</li>
                <li>Use the Portal for commercial purposes without authorization</li>
                <li>Share your account credentials with others</li>
                <li>Attempt to gain unauthorized access to Portal systems</li>
                <li>Distribute member information to external parties</li>
                <li>Engage in conduct that brings DSEC or DUSA into disrepute</li>
              </ul>
              <p>
                <strong>4.3. Content Standards:</strong> All content you post must be respectful, appropriate, and comply with Deakin University's Student Misconduct policies.
              </p>
            </div>
          </section>

          <section id="privacy">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              5. Member Data and Privacy
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong>5.1.</strong> Your use of the Portal is governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.
              </p>
              <p>
                <strong>5.2. Privacy Compliance:</strong> DSEC follows strict privacy guidelines in accordance with:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Australian Privacy Principles</li>
                <li>DUSA Privacy Policy (available at <a href="http://www.dusa.org.au/Privacy-Policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.dusa.org.au/Privacy-Policy</a>)</li>
                <li>Victorian and Commonwealth privacy laws</li>
              </ul>
              <p>
                <strong>5.3. Data Protection:</strong> Member information is private and will not be shared with third parties, including sponsors, without your explicit consent.
              </p>
              <p>
                <strong>5.4. Email Communications:</strong> When DSEC sends group emails, recipient addresses are always BCC'd to protect member privacy.
              </p>
            </div>
          </section>

          <section id="intellectual-property">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              6. Intellectual Property
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong>6.1. Portal Content:</strong> All content, features, and functionality on the Portal (including text, graphics, logos, and software) are owned by DSEC, DUSA, or licensed content providers and are protected by intellectual property laws.
              </p>
              <p>
                <strong>6.2. User Content:</strong> You retain ownership of content you create and post on the Portal. By posting content, you grant DSEC a non-exclusive, royalty-free license to use, display, and distribute your content for club purposes.
              </p>
              <p>
                <strong>6.3. Project Code:</strong> Code and projects shared through the Portal may be subject to open-source licenses. Check individual project licenses before using or contributing.
              </p>
            </div>
          </section>

          <section id="events">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              7. Events and Activities
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong>7.1. Event Participation:</strong> Portal access does not automatically grant attendance rights to all DSEC events. Some events may require separate registration or DUSA membership.
              </p>
              <p>
                <strong>7.2. Risk and Liability:</strong> When participating in DSEC events and activities, you acknowledge:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>You participate at your own risk</li>
                <li>DSEC and DUSA are not responsible for personal injury or property damage</li>
                <li>High-risk activities require appropriate insurance</li>
                <li>You must follow all safety guidelines and event rules</li>
              </ul>
              <p>
                <strong>7.3. Code of Conduct:</strong> All members must act responsibly and with proper regard to the health and safety of other members and third parties.
              </p>
            </div>
          </section>

          <section id="financial">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              8. Financial Matters
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong>8.1. Membership Fees:</strong> If applicable membership fees are required, they are payable through DUSA's membership system. Fees are non-refundable unless required by law.
              </p>
              <p>
                <strong>8.2. No Bank Accounts:</strong> DSEC does not maintain its own bank account. All funds are managed through DUSA Club Accounts.
              </p>
              <p>
                <strong>8.3. Sponsorship:</strong> Members cannot enter into sponsorship arrangements on behalf of DSEC without DUSA approval.
              </p>
            </div>
          </section>

          <section id="termination">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              9. Termination and Suspension
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong>9.1. Your Rights:</strong> You may close your account at any time by contacting us at <a href="mailto:contact@dsec.club" className="text-primary hover:underline">contact@dsec.club</a>.
              </p>
              <p>
                <strong>9.2. Our Rights:</strong> We reserve the right to suspend or terminate your access to the Portal if you:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Violate these Terms and Conditions</li>
                <li>Breach DUSA policies or Deakin University policies</li>
                <li>Engage in conduct detrimental to DSEC or DUSA</li>
                <li>Fail to remedy a breach within 14 days of notice</li>
              </ul>
              <p>
                <strong>9.3. Effect of Termination:</strong> Upon termination, your right to use the Portal ceases immediately. We may retain certain data as required by law or for legitimate purposes.
              </p>
            </div>
          </section>

          <section id="disclaimers">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              10. Disclaimers
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong>10.1.</strong> The Portal is provided "as is" and "as available" without warranties of any kind, either express or implied.
              </p>
              <p>
                <strong>10.2.</strong> DSEC does not guarantee:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Uninterrupted or error-free Portal operation</li>
                <li>Accuracy or reliability of Portal content</li>
                <li>That the Portal will meet your specific requirements</li>
                <li>That defects will be corrected</li>
              </ul>
              <p>
                <strong>10.3.</strong> DSEC is not responsible for content posted by members or third-party links.
              </p>
            </div>
          </section>

          <section id="liability">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              11. Limitation of Liability
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong>11.1.</strong> To the maximum extent permitted by law, DSEC, DUSA, and their officers, members, and affiliates shall not be liable for:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Indirect, incidental, special, or consequential damages</li>
                <li>Loss of profits, data, or opportunities</li>
                <li>Damages arising from Portal use or inability to use the Portal</li>
              </ul>
              <p>
                <strong>11.2.</strong> This limitation applies regardless of the legal theory (contract, tort, negligence, or otherwise) and even if we've been advised of the possibility of such damages.
              </p>
            </div>
          </section>

          <section id="changes">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              12. Changes to Terms
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong>12.1.</strong> We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the Portal.
              </p>
              <p>
                <strong>12.2.</strong> Your continued use of the Portal after changes constitutes acceptance of the modified terms.
              </p>
              <p>
                <strong>12.3.</strong> We will notify members of material changes via email or Portal notification.
              </p>
            </div>
          </section>

          <section id="governing-law">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              13. Governing Law
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong>13.1.</strong> These Terms and Conditions are governed by the laws of Victoria, Australia.
              </p>
              <p>
                <strong>13.2.</strong> Any disputes must first be notified in writing to DSEC management. The parties will attempt informal resolution for at least 14 days before pursuing formal action.
              </p>
              <p>
                <strong>13.3.</strong> Disputes between members are handled in accordance with DSEC Constitution procedures.
              </p>
            </div>
          </section>

          <section id="general">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              14. General Provisions
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong>14.1. Entire Agreement:</strong> These Terms and Conditions, together with our Privacy Policy, constitute the entire agreement between you and DSEC.
              </p>
              <p>
                <strong>14.2. Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in full effect.
              </p>
              <p>
                <strong>14.3. Waiver:</strong> Our failure to enforce any right or provision does not constitute a waiver of that right or provision.
              </p>
              <p>
                <strong>14.4. Assignment:</strong> You may not assign these terms. We may assign our rights and obligations to DUSA or another entity.
              </p>
            </div>
          </section>

          <section id="contact">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              15. Contact Information
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>For questions about these Terms and Conditions, contact:</p>
              <div className="rounded-lg border border-border bg-card p-6">
                <p className="font-semibold text-foreground">Deakin Software Engineering Club (DSEC)</p>
                <p>Email: <a href="mailto:contact@dsec.club" className="text-primary hover:underline">contact@dsec.club</a></p>
                <p>Affiliated with: Deakin University Student Association (DUSA)</p>
                <p>Address: Deakin University, Burwood Campus, VIC</p>

                <div className="mt-4 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">DUSA Contact:</p>
                  <p>Web: <a href="http://www.dusa.org.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.dusa.org.au</a></p>
                  <p>Email: <a href="mailto:dusa-contact@deakin.edu.au" className="text-primary hover:underline">dusa-contact@deakin.edu.au</a></p>
                  <p>Phone: (03) 9244 6356</p>
                </div>
              </div>
            </div>
          </section>

          {/* DUSA Affiliation Footer */}
          <div className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              These Terms and Conditions are part of the DSEC Portal Terms of Service. For questions, contact <a href="mailto:contact@dsec.club" className="text-primary hover:underline">contact@dsec.club</a>
            </p>
            <div className="mt-4 border-t border-primary/20 pt-4">
              <p className="text-sm text-muted-foreground">
                DSEC is affiliated with DUSA | Deakin University Student Association
              </p>
              <p className="text-xs text-muted-foreground">
                ABN 95 022 653 791 | Reg. No. A0040625Y
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 print:hidden"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <Footer />
    </main>
  );
}
