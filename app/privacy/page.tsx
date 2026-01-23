import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | DSEC Portal - How We Protect Your Data',
  description: 'Learn how the Deakin Software Engineering Club (DSEC) collects, uses, and protects your personal information in compliance with Australian privacy laws and DUSA policies.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 py-24 md:px-12">
        <div className="mb-8">
          <h1 className="mb-4 font-grotesk text-4xl font-bold text-foreground md:text-5xl">
            DSEC Portal Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: January 23, 2026
          </p>
        </div>

        <div className="prose prose-invert prose-neutral max-w-none space-y-8">
          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              Introduction
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The Deakin Software Engineering Club (DSEC) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use the DSEC Portal. We operate in accordance with Australian Privacy Principles, DUSA Privacy Policy, and applicable privacy legislation.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              1. Information We Collect
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  1.1. Personal Information You Provide
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  When you create an account or use the Portal, we may collect:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Identity Information:</strong> First name, last name, preferred name</li>
                  <li><strong>Contact Information:</strong> Email address, phone number (optional)</li>
                  <li><strong>Account Credentials:</strong> Username, password (encrypted)</li>
                  <li><strong>Profile Information:</strong> Biography, skills, interests, graduation year, campus affiliation</li>
                  <li><strong>Student Status:</strong> Whether you're a Deakin student, your student ID (if applicable)</li>
                  <li><strong>DUSA Membership:</strong> DUSA membership status and membership email (if linking accounts)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  1.2. Information Collected Automatically
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  When you use the Portal, we automatically collect:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Usage Data:</strong> Pages visited, features used, time spent, click patterns</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Cookies and Similar Technologies:</strong> Session cookies, preference cookies, analytics cookies</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  1.3. Information From Third Parties
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  If you sign up using social login (Google or GitHub):
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>OAuth Information:</strong> Email address, name, profile photo</li>
                  <li><strong>GitHub Data:</strong> Public repositories, contributions (if you consent to linking)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  1.4. Information From Events and Activities
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  When you participate in DSEC events:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Registration Data:</strong> Event sign-ups, attendance records</li>
                  <li><strong>Project Contributions:</strong> Code contributions, project involvement, GitHub activity</li>
                  <li><strong>Photos and Videos:</strong> Images or recordings from events (with consent)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              2. How We Use Your Information
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  2.1. Core Portal Functions
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Provide access to Portal features and services</li>
                  <li>Authenticate your identity and manage your account</li>
                  <li>Facilitate communication between members</li>
                  <li>Organize and manage events, workshops, and projects</li>
                  <li>Process event registrations and track attendance</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  2.2. Club Operations
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Maintain membership records in accordance with DUSA requirements</li>
                  <li>Coordinate projects and team collaborations</li>
                  <li>Send newsletters and updates about club activities</li>
                  <li>Administer grants, sponsorships, and financial matters</li>
                  <li>Comply with DUSA reporting obligations</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  2.3. Improvement and Analytics
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Analyze Portal usage to improve functionality</li>
                  <li>Understand member preferences and interests</li>
                  <li>Develop new features and services</li>
                  <li>Monitor Portal security and prevent fraud</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  2.4. Communication
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Send important account and security notifications</li>
                  <li>Provide event reminders and updates</li>
                  <li>Share newsletter content (if you opt in)</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Announce opportunities, workshops, and hackathons</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              3. Legal Basis for Processing
            </h2>
            <p className="mb-3 leading-relaxed text-muted-foreground">
              We process your personal information based on:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li><strong>Consent:</strong> You've given permission (e.g., newsletter sign-up, event photos)</li>
              <li><strong>Contract:</strong> Processing is necessary to fulfill our obligations to you as a member</li>
              <li><strong>Legal Obligation:</strong> Compliance with DUSA requirements and Australian law</li>
              <li><strong>Legitimate Interests:</strong> Club operations, security, and improvement of services</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              4. How We Share Your Information
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  4.1. Within DSEC
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Your profile information is visible to other Portal members (you can control visibility in settings)</li>
                  <li>Event attendance may be shared with event organizers and DSEC executives</li>
                  <li>Project contributions may be visible to project team members</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  4.2. With DUSA
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  We share necessary information with DUSA for:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Membership verification and validation</li>
                  <li>Financial reporting and grant administration</li>
                  <li>Compliance with DUSA Club Manual requirements</li>
                  <li>Event approval and risk assessments</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  4.3. With Deakin University
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  We may share information with Deakin University for:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Campus event coordination</li>
                  <li>Facility bookings and room reservations</li>
                  <li>Student misconduct investigations (if required)</li>
                  <li>Academic integrity matters (if applicable)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  4.4. With Third-Party Service Providers
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  We use trusted service providers for:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Email Services:</strong> Newsletter distribution and transactional emails</li>
                  <li><strong>Cloud Hosting:</strong> Portal infrastructure and data storage</li>
                  <li><strong>Analytics:</strong> Understanding Portal usage (anonymized where possible)</li>
                  <li><strong>OAuth Providers:</strong> Google and GitHub for social login</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  4.5. We Do NOT Share With
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Sponsors or Recruiters:</strong> Member lists are never sold or shared with external companies</li>
                  <li><strong>Other Clubs:</strong> Your information stays within DSEC unless you explicitly consent</li>
                  <li><strong>Marketing Companies:</strong> We do not provide data to third parties for marketing purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  4.6. Legal Requirements
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  We may disclose information if required by:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Court orders or legal processes</li>
                  <li>Deakin University student misconduct procedures</li>
                  <li>Law enforcement requests (with proper authority)</li>
                  <li>Protection of rights, safety, or property</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              5. Privacy Protection Measures
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  5.1. Data Security
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  We implement industry-standard security measures:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Encryption:</strong> Passwords are hashed and encrypted; HTTPS for all Portal communications</li>
                  <li><strong>Access Controls:</strong> Limited access to personal data; role-based permissions</li>
                  <li><strong>Regular Audits:</strong> Security reviews and vulnerability assessments</li>
                  <li><strong>Secure Storage:</strong> Data stored in compliant cloud infrastructure</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  5.2. Privacy by Design
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>BCC Email Lists:</strong> All group emails use BCC to protect recipient privacy</li>
                  <li><strong>No Public Member Lists:</strong> Member details are not posted publicly</li>
                  <li><strong>Visibility Controls:</strong> You can control what information is visible to others</li>
                  <li><strong>Data Minimization:</strong> We only collect information necessary for Portal functions</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  5.3. DUSA Compliance
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  We follow strict DUSA guidelines regarding:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Collection and use of member information</li>
                  <li>Storage of personal data</li>
                  <li>Restrictions on sharing with third parties</li>
                  <li>Compliance with state and federal privacy laws</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              6. Your Rights and Choices
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  6.1. Access and Correction
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  You have the right to:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Access your personal information held by DSEC</li>
                  <li>Request correction of inaccurate or incomplete data</li>
                  <li>Update your profile information at any time through Portal settings</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  6.2. Communication Preferences
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  You can:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Opt out of promotional emails while still receiving essential notifications</li>
                  <li>Unsubscribe from newsletters at any time</li>
                  <li>Manage notification preferences in your account settings</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  6.3. Account Deletion
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  You may request account deletion by contacting us. Note:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Some information may be retained for legal or compliance purposes</li>
                  <li>Deletion does not affect DUSA membership records</li>
                  <li>Event attendance records may be retained for club archives</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  6.4. Restrict or Object to Processing
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  You may request that we:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Stop processing your data for certain purposes</li>
                  <li>Limit how we use your information</li>
                  <li>Object to processing based on legitimate interests</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  6.5. Data Portability
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  You can request a copy of your data in a structured, machine-readable format.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              7. Cookies and Tracking Technologies
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  7.1. Types of Cookies We Use
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Essential Cookies:</strong> Required for Portal login and core functionality</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand Portal usage (anonymized)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  7.2. Managing Cookies
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  You can control cookies through your browser settings. Note that disabling essential cookies may affect Portal functionality.
                </p>
              </div>

              <div>
                <h3 className="mb-3 font-grotesk text-xl font-semibold text-foreground">
                  7.3. Third-Party Tracking
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  We do not allow third-party advertising tracking on the Portal.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              8. Data Retention
            </h2>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li><strong>Active Accounts:</strong> We retain your data while your account is active</li>
              <li><strong>Inactive Accounts:</strong> Accounts inactive for extended periods may be archived or deleted</li>
              <li><strong>Financial Records:</strong> Retained in accordance with DUSA requirements (typically 7 years)</li>
              <li><strong>Event Records:</strong> Attendance records retained for historical purposes and alumni relations</li>
              <li><strong>Legal Holds:</strong> Data subject to legal requirements retained as necessary</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              9. Children's Privacy
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The Portal is not intended for children under 13. If you are under 18, you should have parental or guardian consent to use the Portal. We do not knowingly collect information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              10. International Users
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The Portal is hosted in Australia. If you access the Portal from outside Australia, your information will be transferred to, stored, and processed in Australia in accordance with Australian privacy laws.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              11. Changes to This Privacy Policy
            </h2>
            <p className="mb-3 leading-relaxed text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of material changes via:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Email notification to registered members</li>
              <li>Prominent notice on the Portal</li>
              <li>Updated "Last Updated" date at the top of this policy</li>
            </ul>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Your continued use after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              12. Third-Party Links
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The Portal may contain links to external websites, repositories, or services (e.g., GitHub projects). We are not responsible for the privacy practices of third-party sites. Review their privacy policies before providing information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              13. Contact Us About Privacy
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>For privacy-related questions, concerns, or requests:</p>

              <div className="rounded-lg border border-border bg-card p-6">
                <p className="mb-2 font-semibold text-foreground">DSEC Privacy Contact:</p>
                <p>Email: <a href="mailto:privacy@dsec.club" className="text-primary hover:underline">privacy@dsec.club</a></p>
                <p>Subject: Privacy Inquiry</p>

                <div className="my-4 border-t border-border" />

                <p className="mb-2 font-semibold text-foreground">DUSA Privacy Policy:</p>
                <p><a href="http://www.dusa.org.au/Privacy-Policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.dusa.org.au/Privacy-Policy</a></p>

                <div className="my-4 border-t border-border" />

                <p className="mb-2 font-semibold text-foreground">DUSA Contact:</p>
                <p>Email: <a href="mailto:dusa-contact@deakin.edu.au" className="text-primary hover:underline">dusa-contact@deakin.edu.au</a></p>
                <p>Phone: (03) 9244 6356</p>

                <div className="my-4 border-t border-border" />

                <p className="mb-2 font-semibold text-foreground">Complaints:</p>
                <p>If you believe we have breached privacy laws, you may lodge a complaint with:</p>
                <ul className="ml-6 mt-2 list-disc space-y-1">
                  <li>DSEC executives (in the first instance)</li>
                  <li>DUSA management</li>
                  <li>Office of the Australian Information Commissioner (OAIC): <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.oaic.gov.au</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground">
              14. Consent
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              By using the DSEC Portal, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. You may withdraw consent at any time by contacting us, though this may affect your ability to use certain Portal features.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
