'use client';

import type React from 'react';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Code,
  Globe,
  Layout,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  Search,
  X,
  ShoppingBag,
  Loader2,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GridBackground } from '@/components/grid-background';
import { projects } from '@/lib/projects-data';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const { scrollY } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [200, 700], [1, 0]);

  const [isScrolled, setIsScrolled] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
      });
    }
  };

  const openModal = (type: 'privacy' | 'terms' | 'cookies') => {
    const content = {
      privacy: {
        title: 'Privacy Policy',
        content: `
          <p><strong>Effective Date: 9-30-2025</strong></p>
          <p>JAARDESIGNLLC ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
          
          <h3>1. Information We Collect</h3>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> See our Cookie Policy for more details.</li>
          </ul>
          
          <h3>2. How We Use Your Information</h3>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and manage our services</li>
            <li>Respond to inquiries and support requests</li>
            <li>Improve website functionality and user experience</li>
            <li>Send updates, promotions, and service-related communications</li>
          </ul>
          
          <h3>3. Sharing Your Information</h3>
          <p>We do not sell or rent your personal information. We may share it with:</p>
          <ul>
            <li>Service providers who help us operate our website and deliver services</li>
            <li>Legal authorities if required by law</li>
          </ul>
          
          <h3>4. Data Security</h3>
          <p>We implement reasonable security measures to protect your information from unauthorized access, disclosure, or destruction.</p>
          
          <h3>5. Your Rights</h3>
          <p>Depending on your location, you may have rights to:</p>
          <ul>
            <li>Access, correct, or delete your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>
          
          <h3>6. Third-Party Links</h3>
          <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>
          
          <h3>7. Changes to This Policy</h3>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
          
          <h3>8. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at info@jaardesign.com</p>
        `,
      },
      terms: {
        title: 'Terms of Service',
        content: `
          <p><strong>Effective Date: 9-30-2025</strong></p>
          <p>Welcome to JAARDESIGNLLC. By accessing or using our website and services, you agree to be bound by the following terms and conditions.</p>
          
          <h3>1. Services</h3>
          <p>JAARDESIGNLLC provides website design, SEO, and social media services and more. All services are subject to availability and may be modified or discontinued at any time.</p>
          
          <h3>2. User Responsibilities</h3>
          <p>You agree to use our services only for lawful purposes. You must not use our website to distribute malware, spam, or engage in any activity that could harm our reputation or operations.</p>
          
          <h3>3. Intellectual Property</h3>
          <p>All content, designs, and materials created by JAARDESIGNLLC are the intellectual property of JAARDESIGNLLC unless otherwise agreed upon. You may not reproduce or redistribute any content without written permission.</p>
          
          <h3>4. Payments</h3>
          <p>All payments for services must be made in accordance with the agreed terms. Late payments may result in suspension of services.</p>
          
          <h3>5. Limitation of Liability</h3>
          <p>JAARDESIGNLLC is not liable for any damages resulting from the use or inability to use our services, including but not limited to loss of data or business interruption.</p>
          
          <h3>6. Privacy</h3>
          <p>We respect your privacy. Please refer to our Privacy Policy for details on how we collect and use your information.</p>
          
          <h3>7. Changes to Terms</h3>
          <p>We may update these Terms of Service from time to time. Continued use of our services after changes are posted constitutes your acceptance of the revised terms.</p>
          
          <h3>8. Contact</h3>
          <p>If you have any questions about these terms, please contact us at info@jaardesign.com</p>
        `,
      },
      cookies: {
        title: 'Cookie Policy',
        content: `
          <p><strong>Effective Date: 9-30-2025</strong></p>
          <p>This Cookie Policy explains how JAARDESIGNLLC uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control their use.</p>
          
          <h3>1. What Are Cookies?</h3>
          <p>Cookies are small data files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide reporting information.</p>
          
          <h3>2. How We Use Cookies</h3>
          <p>We use cookies to:</p>
          <ul>
            <li>Improve website functionality and performance</li>
            <li>Analyze traffic and user behavior</li>
            <li>Personalize content and ads</li>
            <li>Enable social media features</li>
          </ul>
          
          <h3>3. Types of Cookies We Use</h3>
          <ul>
            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant ads and track campaign performance.</li>
            <li><strong>Third-Party Cookies:</strong> Set by external services like social media platforms or analytics providers.</li>
          </ul>
          
          <h3>4. Managing Cookies</h3>
          <p>You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. However, disabling cookies may affect the functionality of our website.</p>
          
          <h3>5. Changes to This Policy</h3>
          <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
          
          <h3>6. Contact Us</h3>
          <p>If you have any questions about our use of cookies, please contact us at info@jaardesign.com</p>
        `,
      },
    };

    setModalContent(content[type]);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-hidden">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-[#1a1a1a] rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden shadow-2xl border border-white/10">
            <div className="sticky top-0 bg-[#1a1a1a] border-b border-white/10 p-6 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold">{modalContent.title}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div
              className="p-6 overflow-y-auto max-h-[calc(80vh-88px)] policy-content"
              dangerouslySetInnerHTML={{ __html: modalContent.content }}
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        .policy-content h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #00a5e0;
        }
        .policy-content p {
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }
        .policy-content ul {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          list-style-type: disc;
        }
        .policy-content li {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }
        .policy-content strong {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
        }
      `}</style>

      {/* Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-[#121212]/90 backdrop-blur-md py-3 shadow-lg'
            : 'py-6'
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 56.25 56.249997"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="6c7be85d14">
                  <path
                    d="M 0.535156 10.765625 L 31.5 10.765625 L 31.5 44.757812 L 0.535156 44.757812 Z M 0.535156 10.765625 "
                    clipRule="nonzero"
                  />
                </clipPath>
                <clipPath id="8231167e83">
                  <path
                    d="M 16.015625 10.765625 L 31.5 44.742188 L 0.535156 44.742188 Z M 16.015625 10.765625 "
                    clipRule="nonzero"
                  />
                </clipPath>
                <clipPath id="304dd54d0c">
                  <path
                    d="M 24.003906 10.742188 L 54.96875 10.742188 L 54.96875 44.730469 L 24.003906 44.730469 Z M 24.003906 10.742188 "
                    clipRule="nonzero"
                  />
                </clipPath>
                <clipPath id="bbe187778c">
                  <path
                    d="M 39.484375 44.730469 L 24.003906 10.757812 L 54.96875 10.757812 Z M 39.484375 44.730469 "
                    clipRule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#6c7be85d14)">
                <g clipPath="url(#8231167e83)">
                  <path
                    fill="#00a5e0"
                    d="M 0.535156 10.765625 L 31.5 10.765625 L 31.5 44.757812 L 0.535156 44.757812 Z M 0.535156 10.765625 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
              <g clipPath="url(#304dd54d0c)">
                <g clipPath="url(#bbe187778c)">
                  <path
                    fill="#ef3441"
                    d="M 54.96875 44.730469 L 24.003906 44.730469 L 24.003906 10.742188 L 54.96875 10.742188 Z M 54.96875 44.730469 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollTo(heroRef)}
              className="text-white/80 hover:text-white transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a5e0] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollTo(aboutRef)}
              className="text-white/80 hover:text-white transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a5e0] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollTo(servicesRef)}
              className="text-white/80 hover:text-white transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a5e0] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollTo(workRef)}
              className="text-white/80 hover:text-white transition-colors relative group"
            >
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a5e0] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          <Button
            onClick={() => scrollTo(contactRef)}
            className="hidden md:flex bg-[#ef3441] hover:bg-[#ef3441]/90 text-white relative overflow-hidden group"
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-[#00a5e0] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
          </Button>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-[#121212] z-40 flex flex-col justify-center items-center transition-transform duration-300 md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col gap-8 items-center">
          <button
            onClick={() => scrollTo(heroRef)}
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo(aboutRef)}
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo(servicesRef)}
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollTo(workRef)}
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollTo(contactRef)}
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <GridBackground />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-[#00a5e0] text-sm font-medium backdrop-blur-sm">
                Welcome to JAAR Design
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block">Action Oriented,</span>
              <span className="block">
                Adaptable <span className="text-[#ef3441]">Approaches</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
            >
              We create stunning digital experiences that captivate audiences
              and drive results. Through our action-oriented, adaptable
              approaches, we transform ideas into impactful digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => scrollTo(workRef)}
                className="bg-[#ef3441] hover:bg-[#ef3441]/90 text-white px-8 py-6 text-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
                <span className="absolute inset-0 bg-[#00a5e0] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
              </Button>

              <Button
                onClick={() => scrollTo(servicesRef)}
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Our Services</span>
                <span className="absolute inset-0 bg-white/5 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
              </Button>
            </motion.div>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollTo(aboutRef)}
        >
          <ChevronRight className="rotate-90 w-6 h-6 text-white/50" />
        </div>
      </motion.section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-20 md:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <GridBackground />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                We create digital experiences that matter
              </h2>
              <p className="text-white/70 mb-6">
                JAAR Design has been at the forefront of digital innovation,
                creating impactful solutions for businesses across various
                industries. Our approach combines strategic thinking with
                creative execution to deliver results that exceed expectations.
                We believe in the power of design to transform businesses and
                build meaningful connections with audiences.
              </p>
              <p className="text-white/70 mb-8">
                Based in Miami, our headquarters is more than just a
                location—it's a source of inspiration. We take pride in staying
                ahead of the curve, ensuring that cutting-edge innovation is
                reflected in our work. Whether you're growing your business,
                building a personal brand, or just getting started, our team of
                experts is here to bring your vision to life.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#ef3441] h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Strategic Approach</h3>
                    <p className="text-white/70 text-sm">
                      Data-driven decisions that deliver results
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#ef3441] h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Creative Excellence</h3>
                    <p className="text-white/70 text-sm">
                      Innovative designs that stand out
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#ef3441] h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Client Partnership</h3>
                    <p className="text-white/70 text-sm">
                      Collaborative approach to every project
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#ef3441] h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Miami Inspired</h3>
                    <p className="text-white/70 text-sm">
                      Drawing creativity from our vibrant city
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden">
                <Image
                  src="/miami-skyline.jpg"
                  alt="Miami Skyline - JAAR Design Headquarters"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-[#ef3441]/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#00a5e0]/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="py-20 md:py-32 relative bg-[#0a0a0a]"
      >
        <div className="absolute inset-0 z-0 opacity-30">
          <GridBackground />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[#00a5e0] font-medium mb-2 block"
            >
              Our Services
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Comprehensive digital solutions for your business
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white/70"
            >
              We offer a wide range of services to help your business thrive in
              the digital landscape. Our team of experts is dedicated to
              delivering exceptional results.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="h-10 w-10" />,
                title: 'Web Design & Development',
                description:
                  'Custom websites that are visually stunning, functionally robust, and optimized for performance across all devices.',
              },
              {
                icon: <Globe className="h-10 w-10" />,
                title: 'Digital Marketing',
                description:
                  'Strategic marketing campaigns that increase visibility, drive traffic, and convert leads into customers.',
              },
              {
                icon: <Code className="h-10 w-10" />,
                title: 'App Development',
                description:
                  'Native and cross-platform mobile applications that provide seamless user experiences and solve real problems.',
              },
              {
                icon: <MessageSquare className="h-10 w-10" />,
                title: 'Brand Strategy',
                description:
                  'Comprehensive brand development that communicates your values and resonates with your target audience.',
              },
              {
                icon: <Search className="h-10 w-10" />,
                title: 'SEO',
                description:
                  'SEO strategies that boost visibility, drive targeted traffic, and deliver measurable growth.',
              },
              {
                icon: <ShoppingBag className="h-10 w-10" />,
                title: 'E-commerce Solutions',
                description:
                  'Scalable online stores that drive sales, manage inventory, and provide secure payment processing.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden cursor-pointer"
                onClick={() => scrollTo(contactRef)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ef3441]/0 to-[#00a5e0]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ef3441] to-[#00a5e0] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>

                <div className="text-[#00a5e0] mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <Link
                  href="#"
                  className="text-[#00a5e0] font-medium flex items-center gap-2 group-hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(contactRef);
                  }}
                >
                  Learn more{' '}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section ref={workRef} id="work" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <GridBackground />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[#00a5e0] font-medium mb-2 block"
            >
              Our Portfolio
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Showcasing our best work
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white/70"
            >
              Browse through our portfolio of successful projects that have
              helped clients achieve their goals and transform their digital
              presence.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
                onClick={() => window.open(project.website, '_blank')}
              >
                <Image
                  src={project.mainImage || '/placeholder.svg'}
                  alt={project.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#00a5e0] text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <Link
                    href={`${project.website}`}
                    target="_blank"
                    className="text-white font-medium flex items-center gap-2 w-fit"
                  >
                    View Project{' '}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 relative bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0 opacity-30">
          <GridBackground />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[#00a5e0] font-medium mb-2 block"
            >
              Testimonials
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              What our clients say
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white/70"
            >
              Working with JAARDESIGN Group was an absolute pleasure. They built
              a beautiful, clear, and thoughtfully designed website that
              perfectly captured the feel and energy I hoped to convey. Their
              professionalism, creativity, and responsiveness made the
              experience smooth and enjoyable throughout. I highly recommend
              them to anyone looking for high-quality, intuitive website design
              work.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Livana',
                position: 'Livana, Soul Doula',
                quote:
                  'Working with JAAR Design was a game-changer for our business. They completely transformed our online presence and helped us connect with a wider audience.',
              },
              {
                name: 'Leigh Rothschild',
                position: 'Patent Asset Management',
                quote:
                  "JAAR Design built a website that perfectly showcases my journey as an inventor. It's clean, modern, and responsive, making it easy for visitors to explore my patents and projects. The site feels professional yet personal—exactly what I needed to highlight my career achievements in the best light.",
              },
              {
                name: 'Rosh Lowe',
                position: 'MicDrop',
                quote:
                  "JAAR Design gave my website a complete makeover, and I couldn't be happier. They really listened to my ideas and turned them into something professional, clean, and easy for my clients to use. It feels like my business finally has an online home that truly represents me.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 relative group flex flex-col"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ef3441] to-[#00a5e0] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>

                <div className="text-[#ef3441] mb-6">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4 24H8V17.6H14.4C14.4 14.4 11.2 12 8 12V8C13.6 8 19.2 12.8 19.2 19.2V24C19.2 24 16.8 24 14.4 24ZM32 24H25.6V17.6H32C32 14.4 28.8 12 25.6 12V8C31.2 8 36.8 12.8 36.8 19.2V24C36.8 24 34.4 24 32 24Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <p className="text-white/80 mb-8 italic flex-grow">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-lg font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="py-20 md:py-32 relative"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <GridBackground />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-[#00a5e0] font-medium mb-2 block">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Let's start a project together
              </h2>
              <p className="text-white/70 mb-8">
                Ready to transform your digital presence? Contact us today to
                discuss your project and discover how JAAR Design can help you
                achieve your goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ef3441]/10 flex items-center justify-center text-[#ef3441]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <a
                      href="mailto:info@jaardesign.com"
                      className="text-white/70"
                    >
                      info@jaardesign.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00a5e0]/10 flex items-center justify-center text-[#00a5e0]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    <a href="tel:13057331160" className="text-white/70">
                      +1 (305) 733-1160
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ef3441] to-[#00a5e0] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>

              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

              {formStatus.type === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-white/70 mb-6">{formStatus.message}</p>
                  <Button
                    onClick={() =>
                      setFormStatus({ type: 'idle', message: '' })
                    }
                    className="bg-[#00a5e0] hover:bg-[#00a5e0]/90 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-white/70"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-[#00a5e0] text-white transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-white/70"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-[#00a5e0] text-white transition-colors"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-white/70"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-[#00a5e0] text-white transition-colors"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-white/70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-[#00a5e0] text-white resize-none transition-colors"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>

                  {formStatus.type === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                      {formStatus.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={formStatus.type === 'loading'}
                    className="w-full bg-[#ef3441] hover:bg-[#ef3441]/90 text-white py-6 text-lg relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {formStatus.type === 'loading' ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </span>
                    <span className="absolute inset-0 bg-[#00a5e0] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0a0a0a] border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 56.25 56.249997"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                >
                  <defs>
                    <clipPath id="footer-clip-1">
                      <path
                        d="M 0.535156 10.765625 L 31.5 10.765625 L 31.5 44.757812 L 0.535156 44.757812 Z M 0.535156 10.765625 "
                        clipRule="nonzero"
                      />
                    </clipPath>
                    <clipPath id="footer-clip-2">
                      <path
                        d="M 16.015625 10.765625 L 31.5 44.742188 L 0.535156 44.742188 Z M 16.015625 10.765625 "
                        clipRule="nonzero"
                      />
                    </clipPath>
                    <clipPath id="footer-clip-3">
                      <path
                        d="M 24.003906 10.742188 L 54.96875 10.742188 L 54.96875 44.730469 L 24.003906 44.730469 Z M 24.003906 10.742188 "
                        clipRule="nonzero"
                      />
                    </clipPath>
                    <clipPath id="footer-clip-4">
                      <path
                        d="M 39.484375 44.730469 L 24.003906 10.757812 L 54.96875 10.757812 Z M 39.484375 44.730469 "
                        clipRule="nonzero"
                      />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#footer-clip-1)">
                    <g clipPath="url(#footer-clip-2)">
                      <path
                        fill="#00a5e0"
                        d="M 0.535156 10.765625 L 31.5 10.765625 L 31.5 44.757812 L 0.535156 44.757812 Z M 0.535156 10.765625 "
                        fillOpacity="1"
                        fillRule="nonzero"
                      />
                    </g>
                  </g>
                  <g clipPath="url(#footer-clip-3)">
                    <g clipPath="url(#footer-clip-4)">
                      <path
                        fill="#ef3441"
                        d="M 54.96875 44.730469 L 24.003906 44.730469 L 24.003906 10.742188 L 54.96875 10.742188 Z M 54.96875 44.730469 "
                        fillOpacity="1"
                        fillRule="nonzero"
                      />
                    </g>
                  </g>
                </svg>
              </div>

              <p className="text-white/70 mb-6">
                Action Oriented, Adaptable Approaches
              </p>

              <div className="flex gap-4">
                <a
                  href="http://instagram.com/jaardesign_"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#ef3441] transition-colors duration-300"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.61 4 4 5.61 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C18.39 20 20 18.39 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.94 5.5 18.5 6.06 18.5 6.75C18.5 7.44 17.94 8 17.25 8C16.56 8 16 7.44 16 6.75C16 6.06 16.56 5.5 17.25 5.5ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-4">
                <li className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
                  Web Design
                </li>
                <li className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
                  Digital Marketing
                </li>
                <li className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
                  App Development
                </li>
                <li className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
                  Brand Strategy
                </li>
                <li className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
                  SEO
                </li>
                <li className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
                  E-Commerce Solutions
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollTo(aboutRef)}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo(workRef)}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Our Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo(contactRef)}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Newsletter</h3>
              <p className="text-white/70 mb-4">
                Subscribe to our newsletter to receive updates and insights.
              </p>

              <form className="space-y-4">
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white"
                  placeholder="Your email"
                />

                <Button className="w-full bg-[#ef3441] hover:bg-[#ef3441]/90 text-white relative overflow-hidden group">
                  <span className="relative z-10">Subscribe</span>
                  <span className="absolute inset-0 bg-[#00a5e0] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} JAAR Design. All rights reserved.
            </p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <button
                onClick={() => openModal('privacy')}
                className="text-white/50 text-sm hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => openModal('terms')}
                className="text-white/50 text-sm hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button
                onClick={() => openModal('cookies')}
                className="text-white/50 text-sm hover:text-white transition-colors duration-300"
              >
                Cookies Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}