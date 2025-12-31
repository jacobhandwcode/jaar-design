'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#121212] text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#121212]/90 backdrop-blur-md py-4 border-b border-white/10">
                <div className="container mx-auto px-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-white/60">Effective Date: November 21, 2024</p>
                </div>

                <div className="prose prose-invert prose-headings:text-white prose-p:text-white/80 prose-a:text-[#00a5e0] prose-strong:text-white prose-li:text-white/80 max-w-none space-y-8">

                    <section>
                        <p className="text-lg">
                            JAARDESIGN LLC ("we", "our", or "us") is committed to protecting your privacy.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your
                            information when you visit our website or use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#00a5e0] mt-8 mb-4">1. Information We Collect</h2>

                        <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
                        <p>When you use our contact form or communicate with us, we may collect:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number (if provided)</li>
                            <li>Subject and message content</li>
                            <li>Any other information you choose to provide</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-3">Usage Data</h3>
                        <p>We automatically collect certain information when you visit our website:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Device information</li>
                            <li>Pages visited and time spent</li>
                            <li>Referring website</li>
                            <li>Geographic location (approximate)</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-3">Cookies and Tracking Technologies</h3>
                        <p>
                            We use Google Analytics to analyze website traffic and improve user experience.
                            This service uses cookies to collect anonymous information about your visit.
                            For more details, please see our Cookie Policy section below.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#00a5e0] mt-8 mb-4">2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Respond to your inquiries and support requests</li>
                            <li>Provide and deliver our services</li>
                            <li>Improve our website functionality and user experience</li>
                            <li>Analyze website traffic and usage patterns</li>
                            <li>Send you service-related communications</li>
                            <li>Detect and prevent fraud or abuse</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#00a5e0] mt-8 mb-4">3. How We Share Your Information</h2>
                        <p>
                            We do not sell, rent, or trade your personal information to third parties.
                            We may share your information in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Service Providers:</strong> We may share information with trusted third-party
                                service providers who assist us in operating our website and delivering services
                                (e.g., Google Analytics, hosting providers)
                            </li>
                            <li>
                                <strong>Legal Requirements:</strong> We may disclose information if required by law,
                                court order, or government request
                            </li>
                            <li>
                                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or
                                sale of assets, your information may be transferred
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#00a5e0] mt-8 mb-4">4. Google Analytics</h2>
                        <p>
                            We use Google Analytics to help us understand how visitors use our website.
                            Google Analytics collects information anonymously and reports website trends
                            without identifying individual visitors. Google Analytics uses cookies to track
                            visitor interactions.
                        </p>
                        <p>
                            You can opt out of Google Analytics tracking by installing the{' '}
                            <a
                                href="https://tools.google.com/dlpage/gaoptout"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#00a5e0] hover:text-[#00a5e0]/80 underline"
                            >
                                Google Analytics Opt-out Browser Add-on
                            </a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#00a5e0] mt-8 mb-4">5. Data Security</h2>
                        <p>
                            We implement reasonable technical and organizational security measures to protect
                            your personal information from unauthorized access, disclosure, alteration, or
                            destruction. However, no method of transmission over the internet or electronic
                            storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#00a5e0] mt-8 mb-4">6. Data Retention</h2>
                        <p>
                            We retain your personal information only for as long as necessary to fulfill the
                            purposes outlined in this Privacy Policy, unless a longer retention period is
                            required or permitted by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#00a5e0] mt-8 mb-4">7. Your Rights</h2>
                        <p>Depending on your location, you may have the following rights:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Access:</strong> Request access to your personal information</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                            <li><strong>Objection:</strong> Object to processing of your information</li>
                            <li><strong>Restriction:</strong> Request restriction of processing</li>
                            <li><strong>Portability:</strong> Request transfer of your data</li>
                            <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
                        </ul>
                        <p>
                            To exercise these rights, please contact us at{' '}
                            <a href="mailto:info@jaardesign.com" className="text-[#00a5e0] hover:text-[#00a5e0]/80">
                                info@jaardesign.com
                            </a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#00a5e0] mt-8 mb-4">8. Cookie Policy</h2>

                        <h3 className="text-xl font-semibold mt-6 mb-3">What Are Cookies?</h3>
                        <p>
                            Cookies are small text files that are placed on your device when you visit a website.
                            They help websites remember your preferences and improve your browsing experience.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">Types of Cookies We Use</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Essential Cookies:</strong> Necessary for the website to function properly
                            </li>
                            <li>
                                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with
                                our website (Google Analytics)
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-3">Managing Cookies</h3>
                        <p>
                            You can control and manage cookies through your browser settings. Most browsers
                            allow you to refuse or delete cookies. However, disabling cookies may affect the
                            functionality of our website.
                        </p>
                        <p>Learn how to manage cookies in popular browsers:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <a
                                    href="https://support.google.com/chrome/answer/95647"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#00a5e0] hover:text-[#00a5e0]/80"
                                >
                                    Google Chrome
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#00a5e0] hover:text-[#00a5e0]/80"
                                >
                                    Mozilla Firefox
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#00a5e0] hover:text-[#00a5e0]/80"
                                >
                                    Safari
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#00a5e0] mt-8 mb-4">9. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites. We are not responsible for
                            the privacy practices or content of these external sites. We encourage you to review
                            the privacy policies of any third-party sites you visit.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#00a5e0] mt-8 mb-4">10. Children's Privacy</h2>
                        <p>
                            Our services are not directed to individuals under the age of 18. We do not knowingly
                            collect personal information from children. If you believe we have collected information
                            from a child, please contact us immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#00a5e0] mt-8 mb-4">11. International Data Transfers</h2>
                        <p>
                            Your information may be transferred to and processed in countries other than your country
                            of residence. These countries may have different data protection laws. By using our services,
                            you consent to such transfers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#00a5e0] mt-8 mb-4">12. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in our practices
                            or legal requirements. We will post the updated policy on this page with a revised
                            effective date. We encourage you to review this policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#00a5e0] mt-8 mb-4">13. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="bg-white/5 rounded-lg p-6 mt-4">
                            <p><strong>JAARDESIGN LLC</strong></p>
                            <p>Email: <a href="mailto:info@jaardesign.com" className="text-[#00a5e0] hover:text-[#00a5e0]/80">info@jaardesign.com</a></p>
                            <p>Phone: <a href="tel:13057331160" className="text-[#00a5e0] hover:text-[#00a5e0]/80">+1 (305) 733-1160</a></p>
                        </div>
                    </section>

                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 bg-[#0a0a0a] border-t border-white/10 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-white/50 text-sm">
                        © {new Date().getFullYear()} JAAR Design. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-6 mt-4">
                        <Link href="/privacy-policy" className="text-white/50 text-sm hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="text-white/50 text-sm hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}