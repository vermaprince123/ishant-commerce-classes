"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FaridabadPage() {
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
                <MapPin className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Faridabad Center</h1>
              <p className="text-lg text-muted-foreground">
                Visit our Faridabad center for quality commerce education and expert guidance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Location Details */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-lg border bg-card"
                >
                  <MapPin className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Faridabad, Haryana<br />
                    (Contact for exact location)<br />
                    Coming Soon
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-lg border bg-card"
                >
                  <Clock className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Timings</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday<br />
                    9:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-lg border bg-card text-center"
              >
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">
                  For more information about our Faridabad center, course details, or to schedule a visit, please contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="tel:09138405051">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now: 091384 05051
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

