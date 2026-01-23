'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AccessibilityPage() {
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
            <li><span className="text-foreground">Accessibility</span></li>
          </ol>
        </nav>

        <div className="mb-8">
          <h1 className="mb-4 font-grotesk text-4xl font-bold text-foreground md:text-5xl">
            DSEC Portal Accessibility Statement
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
            <a href="#commitment" className="text-sm text-primary hover:underline">Our Commitment to Accessibility</a>
            <a href="#standards" className="text-sm text-primary hover:underline">1. Accessibility Standards</a>
            <a href="#features" className="text-sm text-primary hover:underline">2. Accessibility Features</a>
            <a href="#limitations" className="text-sm text-primary hover:underline">3. Known Limitations</a>
            <a href="#compatibility" className="text-sm text-primary hover:underline">4. Compatibility</a>
            <a href="#testing" className="text-sm text-primary hover:underline">5. Testing and Validation</a>
            <a href="#by-section" className="text-sm text-primary hover:underline">6. Accessibility Features by Section</a>
            <a href="#how-to-use" className="text-sm text-primary hover:underline">7. How to Use Accessibility Features</a>
            <a href="#assistance" className="text-sm text-primary hover:underline">8. Request Accessibility Assistance</a>
            <a href="#feedback" className="text-sm text-primary hover:underline">9. Feedback and Continuous Improvement</a>
            <a href="#roadmap" className="text-sm text-primary hover:underline">10. Accessibility Roadmap</a>
            <a href="#deakin-resources" className="text-sm text-primary hover:underline">11. Deakin University Resources</a>
            <a href="#external-resources" className="text-sm text-primary hover:underline">12. External Accessibility Resources</a>
            <a href="#complaints" className="text-sm text-primary hover:underline">13. Compliance and Formal Complaints</a>
            <a href="#acknowledgment" className="text-sm text-primary hover:underline">14. Acknowledgment</a>
            <a href="#questions" className="text-sm text-primary hover:underline">15. Questions About This Statement</a>
          </nav>
        </div>

        <div className="prose prose-invert prose-neutral max-w-none space-y-8">
          <section id="commitment">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              Our Commitment to Accessibility
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The Deakin Software Engineering Club (DSEC) is committed to ensuring the DSEC Portal is accessible to all users, including those with disabilities. We believe technology should be inclusive, and we strive to provide an experience that works for everyone regardless of ability, technology, or circumstance.
            </p>
          </section>

          <section id="standards">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              1. Accessibility Standards
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  1.1. Conformance Goal
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  We aim to conform to Level AA of the Web Content Accessibility Guidelines (WCAG) 2.1, which is the international standard for web accessibility. These guidelines explain how to make web content more accessible for people with disabilities.
                </p>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  1.2. Applicable Standards
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  The Portal is designed to comply with:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>WCAG 2.1 Level AA:</strong> Web Content Accessibility Guidelines</li>
                  <li><strong>Australian Disability Discrimination Act 1992</strong></li>
                  <li><strong>Deakin University Accessibility Standards:</strong> As an affiliated DUSA club at Deakin University</li>
                  <li><strong>Section 508:</strong> U.S. accessibility standards (where applicable)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="features">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              2. Accessibility Features
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  2.1. Navigation and Structure
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Keyboard Navigation:</strong> All Portal features can be accessed using keyboard alone</li>
                  <li><strong>Skip Links:</strong> Quick navigation to main content areas</li>
                  <li><strong>Logical Reading Order:</strong> Content follows a meaningful sequence</li>
                  <li><strong>Clear Headings:</strong> Proper heading hierarchy for screen reader users</li>
                  <li><strong>Breadcrumbs:</strong> Clear indication of your location within the Portal</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  2.2. Visual Design
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Color Contrast:</strong> Text meets WCAG AA contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text)</li>
                  <li><strong>Color Independence:</strong> Information is not conveyed by color alone</li>
                  <li><strong>Resizable Text:</strong> Text can be resized up to 200% without loss of functionality</li>
                  <li><strong>Responsive Design:</strong> Portal adapts to different screen sizes and orientations</li>
                  <li><strong>Focus Indicators:</strong> Clear visual indicators for keyboard focus</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  2.3. Content and Media
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Alternative Text:</strong> Images include descriptive alt text for screen readers</li>
                  <li><strong>Captions and Transcripts:</strong> Video content includes captions; audio content includes transcripts (where applicable)</li>
                  <li><strong>Clear Language:</strong> Content written in clear, simple language</li>
                  <li><strong>Link Context:</strong> Link text describes destination or purpose</li>
                  <li><strong>Document Accessibility:</strong> PDFs and documents follow accessibility guidelines where possible</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  2.4. Forms and Interactive Elements
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Form Labels:</strong> All form inputs have clear, associated labels</li>
                  <li><strong>Error Identification:</strong> Errors are clearly identified and described</li>
                  <li><strong>Input Assistance:</strong> Helpful instructions and format requirements provided</li>
                  <li><strong>Focus Management:</strong> Logical tab order through interactive elements</li>
                  <li><strong>Button Labels:</strong> Buttons clearly describe their action</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  2.5. Assistive Technology Support
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  The Portal is tested with:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Screen Readers:</strong> JAWS, NVDA, VoiceOver</li>
                  <li><strong>Speech Recognition:</strong> Dragon NaturallySpeaking</li>
                  <li><strong>Screen Magnification:</strong> ZoomText, browser zoom</li>
                  <li><strong>Keyboard Navigation:</strong> Full functionality without a mouse</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="limitations">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              3. Known Limitations
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              While we strive for full accessibility, some areas may have limitations:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  3.1. Third-Party Content
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Social Login:</strong> OAuth screens (Google, GitHub) are controlled by third parties</li>
                  <li><strong>External Links:</strong> GitHub repositories and external sites may not meet our accessibility standards</li>
                  <li><strong>Embedded Content:</strong> Videos or content embedded from external sources</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  3.2. Dynamic Content
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Real-Time Updates:</strong> Some real-time notifications may require page refresh for full screen reader support</li>
                  <li><strong>Complex Animations:</strong> Motion can be reduced through browser or OS settings</li>
                  <li><strong>Charts and Visualizations:</strong> We provide text alternatives where possible</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  3.3. Legacy Content
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Older Documents:</strong> PDFs and files uploaded before recent updates may not be fully accessible</li>
                  <li><strong>Archived Material:</strong> Historical content may not meet current standards</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              We are actively working to address these limitations. If you encounter barriers, please contact us.
            </p>
          </section>

          <section id="compatibility">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              4. Compatibility
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              The Portal is designed to work with:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  4.1. Browsers
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Desktop:</strong> Chrome, Firefox, Safari, Edge (current and previous version)</li>
                  <li><strong>Mobile:</strong> Safari (iOS), Chrome (Android)</li>
                  <li><strong>Assistive Technology:</strong> JAWS, NVDA, VoiceOver, TalkBack</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  4.2. Operating Systems
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Windows 10 and above</li>
                  <li>macOS latest two versions</li>
                  <li>iOS latest two versions</li>
                  <li>Android latest two versions</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  4.3. Devices
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Desktop and laptop computers</li>
                  <li>Tablets (iPad, Android tablets)</li>
                  <li>Smartphones (iPhone, Android phones)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="testing">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              5. Testing and Validation
            </h2>
            <p className="mb-3 leading-relaxed text-muted-foreground">
              We regularly test the Portal using:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li><strong>Automated Testing:</strong> WAVE, axe DevTools, Lighthouse accessibility audits</li>
              <li><strong>Manual Testing:</strong> Keyboard navigation, screen reader testing</li>
              <li><strong>User Testing:</strong> Feedback from users with disabilities</li>
              <li><strong>Expert Reviews:</strong> Accessibility consultants and audits</li>
            </ul>
          </section>

          <section id="by-section">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              6. Accessibility Features by Section
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  6.1. Login and Registration
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Form fields clearly labeled</li>
                  <li>Password visibility toggle for users with difficulty reading</li>
                  <li>Clear error messages with suggestions</li>
                  <li>Social login options (alternative methods available)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  6.2. Dashboard
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Skip to main content link</li>
                  <li>Keyboard shortcuts for common actions</li>
                  <li>Clear heading structure</li>
                  <li>Notification announcements for screen readers</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  6.3. Events and Projects
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Event details in accessible format</li>
                  <li>Registration forms follow accessibility guidelines</li>
                  <li>Calendar views with keyboard navigation</li>
                  <li>Alternative text for event images</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  6.4. Profile and Settings
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Easy-to-use form controls</li>
                  <li>Settings organized logically</li>
                  <li>Confirmation messages for changes</li>
                  <li>Help text for complex settings</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="how-to-use">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              7. How to Use Accessibility Features
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  7.1. Keyboard Navigation
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Tab:</strong> Move forward through interactive elements</li>
                  <li><strong>Shift + Tab:</strong> Move backward through interactive elements</li>
                  <li><strong>Enter/Space:</strong> Activate buttons and links</li>
                  <li><strong>Esc:</strong> Close modals and overlays</li>
                  <li><strong>Arrow Keys:</strong> Navigate within menus and lists</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  7.2. Screen Reader Tips
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Use heading navigation to jump between sections</li>
                  <li>Use landmark regions (main, navigation, complementary)</li>
                  <li>Form fields announce labels and required status</li>
                  <li>Error messages are announced immediately</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  7.3. Text Resizing
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Use browser zoom (Ctrl/Cmd + and Ctrl/Cmd -)</li>
                  <li>Or change browser text size in settings</li>
                  <li>Portal layout adapts to larger text sizes</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  7.4. Reducing Motion
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  Enable "Reduce Motion" in your operating system:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Windows:</strong> Settings &gt; Ease of Access &gt; Display</li>
                  <li><strong>macOS:</strong> System Preferences &gt; Accessibility &gt; Display</li>
                  <li><strong>iOS:</strong> Settings &gt; Accessibility &gt; Motion</li>
                  <li><strong>Android:</strong> Settings &gt; Accessibility &gt; Remove animations</li>
                </ul>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Portal respects your motion preferences
                </p>
              </div>
            </div>
          </section>

          <section id="assistance">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              8. Request Accessibility Assistance
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              If you experience difficulty accessing any part of the Portal, please contact us:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  8.1. What to Include
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Description of the accessibility barrier</li>
                  <li>Page or feature affected</li>
                  <li>Assistive technology you're using (if applicable)</li>
                  <li>Browser and device information</li>
                  <li>Screenshot or recording (if helpful)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  8.2. Contact Methods
                </h3>
                <div className="rounded-lg border border-border bg-card p-6">
                  <p className="mb-2 leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Email:</strong> <a href="mailto:accessibility@dsec.club" className="text-primary hover:underline">accessibility@dsec.club</a>
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Subject:</strong> Accessibility Assistance Request
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Alternative Formats:</strong> If you need information in an alternative format (large print, audio, braille), please contact us and we will provide it in a timely manner.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  8.3. Response Time
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  We aim to respond to accessibility inquiries within 2 business days. Complex issues may take longer to resolve, but we will keep you informed of progress.
                </p>
              </div>
            </div>
          </section>

          <section id="feedback">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              9. Feedback and Continuous Improvement
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We welcome feedback on the accessibility of the DSEC Portal. Your feedback helps us identify areas for improvement and prioritize accessibility enhancements.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  9.1. How to Provide Feedback
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Email:</strong> <a href="mailto:contact@dsec.club" className="text-primary hover:underline">contact@dsec.club</a> with "Accessibility Feedback" in subject</li>
                  <li><strong>Suggestion Box:</strong> Use the Portal's built-in feedback form</li>
                  <li><strong>DSEC Events:</strong> Speak with executives at club events</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  9.2. What We Do With Feedback
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>All accessibility feedback is reviewed by the development team</li>
                  <li>Issues are prioritized based on severity and impact</li>
                  <li>We communicate improvements through changelog and newsletters</li>
                  <li>Frequent contributors may be invited to user testing sessions</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="roadmap">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              10. Accessibility Roadmap
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We are continuously working to improve accessibility:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  10.1. Current Initiatives
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Conducting comprehensive WCAG 2.1 Level AA audit</li>
                  <li>Implementing automated accessibility testing in development pipeline</li>
                  <li>Training development team on accessible coding practices</li>
                  <li>Creating accessible content creation guidelines for members</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  10.2. Future Goals
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Achieve full WCAG 2.1 Level AA conformance</li>
                  <li>Implement WCAG 2.2 guidelines as they become standardized</li>
                  <li>Develop accessibility testing program with users with disabilities</li>
                  <li>Create accessibility documentation for project contributors</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="deakin-resources">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              11. Deakin University Accessibility Resources
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              As a Deakin-affiliated club, we encourage members to access Deakin's accessibility services:
            </p>

            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">Deakin Disability Resources:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Disability Resource Centre (DRC)</li>
                  <li>Assistive Technology Lab</li>
                  <li>Academic accommodations and support</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <p className="mb-2 font-semibold text-foreground">Contact Deakin DRC:</p>
                <p><strong>Web:</strong> <a href="https://www.deakin.edu.au/students/study-support/disability-support" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">deakin.edu.au/students/study-support/disability-support</a></p>
                <p><strong>Email:</strong> <a href="mailto:disability@deakin.edu.au" className="text-primary hover:underline">disability@deakin.edu.au</a></p>
              </div>
            </div>
          </section>

          <section id="external-resources">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              12. External Accessibility Resources
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  12.1. Learn More About Accessibility
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>W3C Web Accessibility Initiative:</strong> <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">w3.org/WAI/</a></li>
                  <li><strong>WebAIM:</strong> <a href="https://webaim.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">webaim.org</a></li>
                  <li><strong>A11y Project:</strong> <a href="https://www.a11yproject.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">a11yproject.com</a></li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  12.2. Assistive Technology Resources
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Screen Readers:</strong> NVDA (free), JAWS, VoiceOver (built-in Mac/iOS)</li>
                  <li><strong>Browser Extensions:</strong> WAVE, axe DevTools, Accessibility Insights</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  12.3. Disability Support Organizations
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Australian Network on Disability:</strong> <a href="https://www.and.org.au/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">and.org.au</a></li>
                  <li><strong>Vision Australia:</strong> <a href="https://www.visionaustralia.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">visionaustralia.org</a></li>
                  <li><strong>Deaf Australia:</strong> <a href="https://deafaustralia.org.au/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">deafaustralia.org.au</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section id="complaints">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              13. Compliance and Formal Complaints
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              While we strive to maintain an accessible Portal, we recognize we may occasionally fall short. If you believe we are not meeting accessibility standards:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  13.1. Internal Process
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Contact DSEC accessibility team (details above)</li>
                  <li>Allow reasonable time for investigation and response</li>
                  <li>If unresolved, escalate to DSEC President or DUSA</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  13.2. External Complaint Options
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Deakin University:</strong> If accessibility relates to on-campus access</li>
                  <li><strong>Australian Human Rights Commission:</strong> For disability discrimination concerns</li>
                  <li><strong>Web Standards Compliance:</strong> Report WCAG violations to relevant authorities</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="acknowledgment">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              14. Acknowledgment
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              DSEC acknowledges that accessibility is an ongoing commitment, not a one-time achievement. We are dedicated to creating an inclusive environment where all students can learn, collaborate, and grow their software engineering skills regardless of ability.
            </p>
          </section>

          <section id="questions">
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              15. Questions About This Statement
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              For questions about this Accessibility Statement or DSEC's accessibility efforts:
            </p>

            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 font-semibold text-foreground">DSEC Contact:</p>
                    <p className="text-muted-foreground"><strong>Email:</strong> <a href="mailto:contact@dsec.club" className="text-primary hover:underline">contact@dsec.club</a></p>
                    <p className="text-muted-foreground"><strong>Web:</strong> <a href="https://dsec.club" className="text-primary hover:underline">dsec.club</a></p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="mb-2 font-semibold text-foreground">DUSA Contact:</p>
                    <p className="text-muted-foreground"><strong>Email:</strong> <a href="mailto:dusa-contact@deakin.edu.au" className="text-primary hover:underline">dusa-contact@deakin.edu.au</a></p>
                    <p className="text-muted-foreground"><strong>Web:</strong> <a href="http://www.dusa.org.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dusa.org.au</a></p>
                    <p className="text-muted-foreground"><strong>Phone:</strong> (03) 9244 6356</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DUSA Affiliation Footer */}
          <div className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              This Accessibility Statement is part of the DSEC Portal Terms of Service. For questions, contact <a href="mailto:contact@dsec.club" className="text-primary hover:underline">contact@dsec.club</a>
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
