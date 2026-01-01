"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { HeroBanner } from "@/components/sections/hero-banner";
import { Features } from "@/components/sections/features";
import { Achievements } from "@/components/sections/achievements";
import { Testimonials } from "@/components/sections/testimonials";
import { YouTubeLinks } from "@/components/sections/youtube-links";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner />
      <Navbar />
      <main className="flex-1">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Features Section */}
        <Features />

        {/* Achievements Section */}
        <Achievements />

        {/* Testimonials Section */}
        <Testimonials />

        {/* YouTube Links Section */}
        <YouTubeLinks />

        {/* Photo Gallery Section */}
        <PhotoGallery />

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <div className="p-6 md:p-8 rounded-lg border bg-card">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
