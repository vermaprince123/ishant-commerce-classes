"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { GraduationCap, Award, Users, BookOpen } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: GraduationCap, label: "Students Taught", value: "1000+" },
    { icon: Award, label: "Years of Experience", value: "10+" },
    { icon: Users, label: "Google Reviews", value: "343+" },
    { icon: BookOpen, label: "Rating", value: "5.0" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
              <p className="text-lg text-muted-foreground">
                Welcome to Ishant Commerce Classes, where excellence in education meets dedication to student success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-6 rounded-lg bg-card border"
                  >
                    <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ishant Commerce Classes is a premier result-oriented institute in Palwal run under the guidance of 
                  Ishant Verma, an alumni of Sri Ram College of Commerce (SRCC), Delhi University. With vast knowledge 
                  in the Commerce field, our mission is to provide quality education in commerce and business studies 
                  to students across Palwal and Faridabad. We believe in nurturing each student's potential through 
                  personalized attention, expert guidance, and a comprehensive curriculum.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We envision becoming the leading coaching institute for commerce education, known for producing
                  academically excellent students who are well-prepared for their board exams and future careers.
                  We strive to create an environment that fosters learning, critical thinking, and personal growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                <ul className="space-y-3 text-muted-foreground text-lg">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Experienced and qualified faculty members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Small batch sizes for personalized attention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Comprehensive study material and regular tests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Doubt clearing sessions and one-on-one support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Proven track record of excellent results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Flexible class timings to suit your schedule</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

