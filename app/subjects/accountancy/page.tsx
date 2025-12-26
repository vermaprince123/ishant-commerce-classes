"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { BookOpen, CheckCircle, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const topics = [
  "Introduction to Accounting",
  "Accounting Principles and Concepts",
  "Journal Entries",
  "Ledger and Trial Balance",
  "Cash Book and Bank Reconciliation",
  "Depreciation",
  "Final Accounts",
  "Partnership Accounts",
  "Company Accounts",
  "Analysis of Financial Statements",
]

const highlights = [
  "Comprehensive coverage of CBSE/State Board syllabus",
  "Regular practice tests and assignments",
  "Doubt clearing sessions",
  "Previous year question paper analysis",
  "Expert faculty with years of experience",
]

export default function AccountancyPage() {
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
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Accountancy</h1>
              <p className="text-lg text-muted-foreground">
                Master the fundamentals of accounting with our comprehensive course designed for Class 11 and 12 students.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Topics Covered */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Topics Covered</h2>
                <div className="space-y-3">
                  {topics.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center space-x-3 p-3 rounded-lg border bg-card hover:shadow-md transition-shadow"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Course Highlights */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Course Highlights</h2>
                <div className="space-y-4 mb-8">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="p-6 rounded-lg border bg-card space-y-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Small Batch Size</span>
                  </div>
                  <p className="text-muted-foreground">
                    We maintain small batch sizes to ensure personalized attention and better learning outcomes.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 text-center"
            >
              <Button asChild size="lg">
                <Link href="/contact">Enroll Now</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

