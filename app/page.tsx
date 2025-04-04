"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
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
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { GridBackground } from "@/components/grid-background"
import { projects } from "@/lib/projects-data"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [200, 700], [1, 0])

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-hidden">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-[#121212]/90 backdrop-blur-md py-3 shadow-lg" : "py-6",
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
            <button
              onClick={() => scrollTo(contactRef)}
              className="text-white/80 hover:text-white transition-colors relative group"
            >
              Contact
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
          "fixed inset-0 bg-[#121212] z-40 flex flex-col justify-center items-center transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
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
              We create stunning digital experiences that captivate audiences and drive results. Our team of experts
              combines creativity with strategy to deliver exceptional solutions.
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
      <section ref={aboutRef} className="py-20 md:py-32 relative overflow-hidden">
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
              <span className="text-[#00a5e0] font-medium mb-2 block">About JAAR Design</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                We create digital experiences that matter
              </h2>
              <p className="text-white/70 mb-6">
                JAAR Design has been at the forefront of digital innovation, creating impactful solutions for businesses
                across various industries. Our approach combines strategic thinking with creative execution to deliver
                results that exceed expectations. We believe in the power of design to transform businesses and build
                meaningful connections with audiences.
              </p>
              <p className="text-white/70 mb-8">
                Based in Miami, our headquarters is more than just a location—it's a source of inspiration. We take
                pride in staying ahead of the curve, ensuring that cutting-edge innovation is reflected in our work.
                Whether you're growing your business, building a personal brand, or just getting started, our team of
                experts is here to bring your vision to life.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#ef3441] h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Strategic Approach</h3>
                    <p className="text-white/70 text-sm">Data-driven decisions that deliver results</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#ef3441] h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Creative Excellence</h3>
                    <p className="text-white/70 text-sm">Innovative designs that stand out</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#ef3441] h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Client Partnership</h3>
                    <p className="text-white/70 text-sm">Collaborative approach to every project</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#ef3441] h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Miami Inspired</h3>
                    <p className="text-white/70 text-sm">Drawing creativity from our vibrant city</p>
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
      <section ref={servicesRef} className="py-20 md:py-32 relative bg-[#0a0a0a]">
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
              We offer a wide range of services to help your business thrive in the digital landscape. Our team of
              experts is dedicated to delivering exceptional results.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="h-10 w-10" />,
                title: "Web Design & Development",
                description:
                  "Custom websites that are visually stunning, functionally robust, and optimized for performance across all devices.",
              },
              {
                icon: <Globe className="h-10 w-10" />,
                title: "Digital Marketing",
                description:
                  "Strategic marketing campaigns that increase visibility, drive traffic, and convert leads into customers.",
              },
              {
                icon: <Code className="h-10 w-10" />,
                title: "App Development",
                description:
                  "Native and cross-platform mobile applications that provide seamless user experiences and solve real problems.",
              },
              {
                icon: <MessageSquare className="h-10 w-10" />,
                title: "Brand Strategy",
                description:
                  "Comprehensive brand development that communicates your values and resonates with your target audience.",
              },
              {
                icon: <Layout className="h-10 w-10" />,
                title: "UI/UX Design",
                description:
                  "User-centered design that enhances usability, accessibility, and overall user satisfaction.",
              },
              {
                icon: <Globe className="h-10 w-10" />,
                title: "E-commerce Solutions",
                description:
                  "Scalable online stores that drive sales, manage inventory, and provide secure payment processing.",
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
                    e.preventDefault()
                    scrollTo(contactRef)
                  }}
                >
                  Learn more{" "}
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
              Browse through our portfolio of successful projects that have helped businesses achieve their goals and
              transform their digital presence.
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
                onClick={() => (window.location.href = `/projects/${project.slug}`)}
              >
                <Image
                  src={project.mainImage || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#00a5e0] text-sm font-medium mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-white font-medium flex items-center gap-2 w-fit"
                  >
                    View Project{" "}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg">
              View All Projects
            </Button>
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
              Don't just take our word for it. Hear what our clients have to say about their experience working with
              JAAR Design.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                position: "CEO, Fusion Restaurant",
                quote:
                  "Working with JAAR Design was a game-changer for our business. They completely transformed our online presence and helped us connect with a wider audience.",
              },
              {
                name: "Michael Chen",
                position: "Founder, Elevate Fitness",
                quote:
                  "The team at JAAR Design understood our vision from day one. They delivered a mobile app that exceeded our expectations and has received fantastic feedback from our users.",
              },
              {
                name: "Emily Rodriguez",
                position: "Marketing Director, Horizon Financial",
                quote:
                  "The brand identity JAAR Design created for us perfectly captures our company values. Their strategic approach and attention to detail made all the difference.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ef3441] to-[#00a5e0] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>

                <div className="text-[#ef3441] mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.4 24H8V17.6H14.4C14.4 14.4 11.2 12 8 12V8C13.6 8 19.2 12.8 19.2 19.2V24C19.2 24 16.8 24 14.4 24ZM32 24H25.6V17.6H32C32 14.4 28.8 12 25.6 12V8C31.2 8 36.8 12.8 36.8 19.2V24C36.8 24 34.4 24 32 24Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <p className="text-white/80 mb-8 italic">{testimonial.quote}</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-lg font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 md:py-32 relative">
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
              <span className="text-[#00a5e0] font-medium mb-2 block">Get in Touch</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Let's start a project together</h2>
              <p className="text-white/70 mb-8">
                Ready to transform your digital presence? Contact us today to discuss your project and discover how JAAR
                Design can help you achieve your goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ef3441]/10 flex items-center justify-center text-[#ef3441]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-white/70">hello@jaardesign.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00a5e0]/10 flex items-center justify-center text-[#00a5e0]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ef3441]/10 flex items-center justify-center text-[#ef3441]">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Visit Us</h3>
                    <p className="text-white/70">123 Design Street, Creative City, 10001</p>
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

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/70">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a5e0] text-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a5e0] text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/70">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a5e0] text-white"
                    placeholder="Subject"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a5e0] text-white resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <Button className="w-full bg-[#ef3441] hover:bg-[#ef3441]/90 text-white py-6 text-lg relative overflow-hidden group">
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-[#00a5e0] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                </Button>
              </form>
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
                Creating exceptional digital experiences that drive results and transform businesses.
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#ef3441] transition-colors duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#ef3441] transition-colors duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#ef3441] transition-colors duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.61 4 4 5.61 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C18.39 20 20 18.39 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.94 5.5 18.5 6.06 18.5 6.75C18.5 7.44 17.94 8 17.25 8C16.56 8 16 7.44 16 6.75C16 6.06 16.56 5.5 17.25 5.5ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#ef3441] transition-colors duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                    App Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                    Brand Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                    Digital Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Newsletter</h3>
              <p className="text-white/70 mb-4">Subscribe to our newsletter to receive updates and insights.</p>

              <form className="space-y-4">
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a5e0] text-white"
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
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} JAAR Design. All rights reserved.</p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

