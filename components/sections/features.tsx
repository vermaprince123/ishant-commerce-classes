"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { BookOpen, Users, Award, Clock, GraduationCap, Headphones } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Expert Faculty",
    description: "Learn from experienced and qualified teachers with years of industry knowledge.",
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    description: "Personalized attention with limited students per batch for better learning.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Consistent track record of excellent results and student achievements.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Convenient class schedules to fit your busy lifestyle.",
  },
  {
    icon: GraduationCap,
    title: "Comprehensive Curriculum",
    description: "Well-structured syllabus covering all aspects of commerce and business.",
  },
  {
    icon: Headphones,
    title: "Doubt Clearing Sessions",
    description: "Regular doubt clearing sessions to ensure complete understanding.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features & Facilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide the best learning environment and resources for your success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

