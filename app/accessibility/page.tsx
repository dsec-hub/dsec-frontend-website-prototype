import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | DSEC Portal - Inclusive Technology for All',
  description: 'DSEC is committed to making the Portal accessible to all users. Learn about our accessibility features, standards compliance, and how to request assistance.',
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 py-24 md:px-12">
        <div className="mb-8">
          <h1 className="mb-4 font-grotesk text-4xl font-bold text-foreground md:text-5xl">
            DSEC Portal Accessibility Statement
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: January 23, 2026
          </p>
        </div>

        <div className="prose prose-invert prose-neutral max-w-none space-y-8">
          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              Our Commitment to Accessibility
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The Deakin Software Engineering Club (DSEC) is committed to ensuring digital accessibility for all people, including those with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all of our users.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              We believe that technology should be inclusive and accessible to everyone, regardless of their abilities or the assistive technologies they use. This commitment extends to all aspects of our Portal, events, and club activities.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              1. Conformance Status
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The DSEC Portal aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
            </p>
            <div className="mt-4 rounded-lg border border-border bg-card p-6">
              <p className="font-semibold text-foreground">Current Status:</p>
              <p className="mt-2 text-muted-foreground">
                We are actively working to achieve full WCAG 2.1 Level AA conformance. Some areas may not yet fully conform, and we are committed to ongoing improvements.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              2. Accessibility Features
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>The DSEC Portal includes the following accessibility features:</p>

              <div>
                <h3 className="mb-2 font-grotesk text-lg font-semibold text-foreground">
                  2.1. Keyboard Navigation
                </h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Full keyboard navigation support for all interactive elements</li>
                  <li>Logical tab order throughout the Portal</li>
                  <li>Skip links to bypass repetitive navigation</li>
                  <li>Focus indicators for keyboard users</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-grotesk text-lg font-semibold text-foreground">
                  2.2. Screen Reader Compatibility
                </h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Semantic HTML markup for proper content structure</li>
                  <li>ARIA labels and roles where appropriate</li>
                  <li>Alternative text for images and graphics</li>
                  <li>Descriptive link text and button labels</li>
                  <li>Proper heading hierarchy for easy navigation</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-grotesk text-lg font-semibold text-foreground">
                  2.3. Visual Design
                </h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Sufficient color contrast ratios (minimum 4.5:1 for normal text)</li>
                  <li>Text resizable up to 200% without loss of functionality</li>
                  <li>Clear visual focus indicators</li>
                  <li>Information not conveyed by color alone</li>
                  <li>Consistent and predictable navigation</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-grotesk text-lg font-semibold text-foreground">
                  2.4. Content and Readability
                </h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Clear and simple language where possible</li>
                  <li>Readable fonts and appropriate text sizing</li>
                  <li>Sufficient line spacing and paragraph breaks</li>
                  <li>Content organized with descriptive headings</li>
                  <li>Forms with clear labels and error messages</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-grotesk text-lg font-semibold text-foreground">
                  2.5. Multimedia
                </h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Captions and transcripts for video content (where applicable)</li>
                  <li>Audio descriptions for important visual information</li>
                  <li>Controls for pausing, stopping, and adjusting volume</li>
                  <li>No auto-playing media with audio</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              3. Assistive Technologies
            </h2>
            <p className="mb-3 leading-relaxed text-muted-foreground">
              The DSEC Portal is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
              <li>Screen magnification software</li>
              <li>Voice recognition software</li>
              <li>Alternative input devices</li>
              <li>Browser accessibility features</li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We test our Portal with various assistive technologies to ensure compatibility, but if you experience any issues, please contact us.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              4. Browser and Device Compatibility
            </h2>
            <p className="mb-3 leading-relaxed text-muted-foreground">
              The DSEC Portal is designed to work with modern web browsers and operating systems:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Latest versions of Chrome, Firefox, Safari, and Edge</li>
              <li>Mobile browsers on iOS and Android</li>
              <li>Responsive design for various screen sizes</li>
              <li>Progressive enhancement for older browsers</li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              For the best experience, we recommend keeping your browser up to date and enabling JavaScript.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              5. Physical Event Accessibility
            </h2>
            <p className="mb-3 leading-relaxed text-muted-foreground">
              DSEC is committed to making our physical events accessible to all members:
            </p>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="mb-2 font-grotesk text-lg font-semibold text-foreground">
                  5.1. Venue Accessibility
                </h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Events held in wheelchair-accessible venues where possible</li>
                  <li>Accessible parking and public transport information provided</li>
                  <li>Accessible restrooms available at event locations</li>
                  <li>Clear signage and wayfinding</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-grotesk text-lg font-semibold text-foreground">
                  5.2. Event Support
                </h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Captioning or sign language interpretation (upon request)</li>
                  <li>Assistance for attendees with mobility requirements</li>
                  <li>Quiet spaces available at larger events</li>
                  <li>Dietary accommodations for food at events</li>
                  <li>Materials available in alternative formats upon request</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-grotesk text-lg font-semibold text-foreground">
                  5.3. Virtual Options
                </h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Hybrid or virtual attendance options when feasible</li>
                  <li>Recorded sessions available for later viewing</li>
                  <li>Online collaboration tools with accessibility features</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              6. Known Limitations
            </h2>
            <p className="mb-3 leading-relaxed text-muted-foreground">
              While we strive for full accessibility, we acknowledge the following known limitations:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Some third-party integrations (GitHub, Google OAuth) may have their own accessibility limitations</li>
              <li>User-generated content may not always meet accessibility standards</li>
              <li>Legacy content from previous Portal versions may require updates</li>
              <li>Some advanced interactive features are still being optimized for screen readers</li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We are actively working to address these limitations and welcome your feedback.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              7. Third-Party Content
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The Portal may link to or embed content from third-party services (such as GitHub repositories, Google services, or Discord). While we strive to choose accessible platforms, we cannot guarantee the accessibility of third-party content. If you encounter accessibility issues with third-party content, please contact us and we will work to provide alternative access methods.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              8. Ongoing Improvements
            </h2>
            <p className="mb-3 leading-relaxed text-muted-foreground">
              Accessibility is an ongoing commitment. Our efforts include:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Regular accessibility audits and testing</li>
              <li>User testing with people who use assistive technologies</li>
              <li>Training for DSEC team members on accessibility best practices</li>
              <li>Incorporating accessibility into our development workflow</li>
              <li>Monitoring and implementing new accessibility standards</li>
              <li>Gathering and acting on user feedback</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              9. Deakin University Resources
            </h2>
            <p className="mb-3 leading-relaxed text-muted-foreground">
              As a Deakin-affiliated club, we encourage members to take advantage of university accessibility resources:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Deakin Disability Resource Centre (DRC)</li>
              <li>Assistive technology available through the library</li>
              <li>Accessibility support services on campus</li>
              <li>Student wellbeing services</li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Visit <a href="https://www.deakin.edu.au/students/health-wellbeing-safety/disability-support" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Deakin's Disability Support page</a> for more information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              10. Feedback and Assistance
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                We welcome your feedback on the accessibility of the DSEC Portal. If you encounter accessibility barriers, need assistance, or have suggestions for improvement, please contact us:
              </p>

              <div className="rounded-lg border border-border bg-card p-6">
                <p className="mb-4 font-semibold text-foreground">Accessibility Contact:</p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">Email:</p>
                    <p><a href="mailto:accessibility@dsec.club" className="text-primary hover:underline">accessibility@dsec.club</a></p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">General Contact:</p>
                    <p><a href="mailto:contact@dsec.club" className="text-primary hover:underline">contact@dsec.club</a></p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Discord:</p>
                    <p><a href="https://discord.gg/dsec" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://discord.gg/dsec</a></p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="mb-2 font-semibold text-foreground">When Requesting Assistance:</p>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>Describe the accessibility barrier you encountered</li>
                      <li>Include the URL or page where the issue occurred</li>
                      <li>Let us know what assistive technology you're using (if applicable)</li>
                      <li>Suggest how we might improve the experience</li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="mb-2 font-semibold text-foreground">Response Time:</p>
                    <p>We aim to respond to accessibility inquiries within 3 business days. For urgent accessibility needs related to events, please indicate the urgency in your message.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              11. Formal Complaints
            </h2>
            <p className="mb-3 leading-relaxed text-muted-foreground">
              If you are not satisfied with our response to your accessibility concern, you may escalate your complaint to:
            </p>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">DUSA (Deakin University Student Association):</p>
                <p>Email: <a href="mailto:dusa-contact@deakin.edu.au" className="text-primary hover:underline">dusa-contact@deakin.edu.au</a></p>
                <p>Phone: (03) 9244 6356</p>
              </div>

              <div>
                <p className="font-semibold text-foreground">Australian Human Rights Commission:</p>
                <p>Web: <a href="https://www.humanrights.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.humanrights.gov.au</a></p>
                <p>Complaint information: <a href="https://www.humanrights.gov.au/complaints" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.humanrights.gov.au/complaints</a></p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              12. Accessibility Standards and References
            </h2>
            <p className="mb-3 leading-relaxed text-muted-foreground">
              Our accessibility efforts are guided by:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li><strong>WCAG 2.1 Level AA:</strong> Web Content Accessibility Guidelines</li>
              <li><strong>Disability Discrimination Act 1992:</strong> Australian legislation</li>
              <li><strong>Australian Government Digital Service Standard:</strong> Accessibility requirements</li>
              <li><strong>Deakin University Accessibility Guidelines:</strong> University policies and standards</li>
              <li><strong>ARIA Authoring Practices Guide:</strong> For rich internet applications</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              13. Updates to This Statement
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We review and update this Accessibility Statement regularly to reflect improvements and changes to the Portal. The "Last Updated" date at the top of this page indicates when the statement was most recently revised.
            </p>
          </section>

          <section className="rounded-lg border border-primary/20 bg-primary/5 p-6">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              Our Promise
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              At DSEC, we believe that everyone deserves equal access to technology and learning opportunities. We are committed to creating an inclusive environment where all members can participate fully in our community, regardless of ability. Accessibility is not just a compliance requirement for us—it's a core value that shapes how we build our Portal, plan our events, and support our members.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Thank you for helping us build a more accessible and inclusive community.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
