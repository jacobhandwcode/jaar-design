"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Calendar, Globe, User } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"
import { GridBackground } from "@/components/grid-background"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (params.slug) {
      const foundProject = projects.find((p) => p.slug === params.slug)
      if (foundProject) {
        setProject(foundProject)
      } else {
        // If project not found, redirect to portfolio
        router.push("/#work")
      }
      setIsLoading(false)
    }
  }, [params.slug, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#00a5e0] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-white/70 mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Button onClick={() => router.push("/#work")}>Back to Portfolio</Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-md py-3 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
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
          </Link>

          <Button
            onClick={() => router.push("/#contact")}
            className="bg-[#ef3441] hover:bg-[#ef3441]/90 text-white relative overflow-hidden group"
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-[#00a5e0] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <GridBackground />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <Link href="/#work" className="flex items-center text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#00a5e0] font-medium mb-2 block"
            >
              {project.category}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {project.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 mb-8"
            >
              <div className="flex items-center text-white/70">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center text-white/70">
                <User className="mr-2 h-4 w-4" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center text-white/70">
                <Globe className="mr-2 h-4 w-4" />
                <span>{project.location}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative rounded-xl overflow-hidden mb-16 shadow-2xl"
          >
            <Image
              src={project.mainImage || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Project Overview</h2>
              <div className="space-y-4 text-white/80">
                {project.description.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {project.challenges && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Challenges</h3>
                  <ul className="list-disc pl-5 space-y-2 text-white/80">
                    {project.challenges.map((challenge: string, index: number) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.solutions && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Solutions</h3>
                  <ul className="list-disc pl-5 space-y-2 text-white/80">
                    {project.solutions.map((solution: string, index: number) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Project Details</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-white/50 mb-1">Client</h4>
                    <p>{project.client}</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-white/50 mb-1">Timeline</h4>
                    <p>{project.timeline}</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-white/50 mb-1">Services</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.services.map((service: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.technologies && (
                    <div>
                      <h4 className="text-sm text-white/50 mb-1">Technologies</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech: string, index: number) => (
                          <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.website && (
                    <div>
                      <h4 className="text-sm text-white/50 mb-1">Website</h4>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00a5e0] hover:underline flex items-center"
                      >
                        Visit Website
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <Button
                    onClick={() => router.push("/#contact")}
                    className="w-full bg-[#ef3441] hover:bg-[#ef3441]/90 text-white"
                  >
                    Start Your Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Project Gallery</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-xl overflow-hidden aspect-square"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} gallery image ${index + 1}`}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Related Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.slug !== project.slug && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
                  onClick={() => router.push(`/projects/${relatedProject.slug}`)}
                >
                  <Image
                    src={relatedProject.mainImage || "/placeholder.svg"}
                    alt={relatedProject.title}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[#00a5e0] text-sm font-medium mb-2">{relatedProject.category}</span>
                    <h3 className="text-xl font-bold mb-4">{relatedProject.title}</h3>
                    <Link
                      href={`/projects/${relatedProject.slug}`}
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
            <Button
              onClick={() => router.push("/#work")}
              className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <GridBackground />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-white/70 mb-8">
              Let's create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <Button
              onClick={() => router.push("/#contact")}
              className="bg-[#ef3441] hover:bg-[#ef3441]/90 text-white px-8 py-6 text-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-[#00a5e0] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0a0a0a] border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} JAAR Design. All rights reserved.</p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                Home
              </Link>
              <Link href="/#about" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                About
              </Link>
              <Link href="/#services" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                Services
              </Link>
              <Link href="/#work" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                Work
              </Link>
              <Link href="/#contact" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

