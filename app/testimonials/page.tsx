"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/sections/testimonials"
import { motion } from "framer-motion"

export default function TestimonialsPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Testimonials</h1>
              <p className="text-lg text-muted-foreground">
                Read what our students have to say about their learning journey with us.
              </p>
            </motion.div>
          </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

