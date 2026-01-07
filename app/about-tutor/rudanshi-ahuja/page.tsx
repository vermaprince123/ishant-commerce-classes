"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Users, Star } from "lucide-react";

const qualifications = [
  "M.Com, IB & HRM - Delhi School of Economics-DU",
  "B.Com(H) - Kirori Mal College, Delhi University",
  "12th - Commerce, CBSE (9.8 CGPA, 2016)",
  "10th - Commerce, CBSE (92%, 2014)",
  "Teaching Experience with Class XII Students",
];

const achievements = [
  "Best Student Award in Class X",
  "Discipline In-charge Title",
  "Certificate of Member in The Commerce Society, KMC-2016",
  "Certificate of Volunteer in Renaissance, KMC-2016",
  "1st Position in School Speech Competition (Class X)",
  "Certificate of Good Performance in Academic in XII by Dharam Public School",
  "Got Admission in Delhi School of Economics, India No. 1 Business School in Post Graduation",
];

const strengths = [
  "Hardworking and dedicated",
  "Analytical, Energetic, Optimistic and Problem Solving Skills",
  "Leadership and Team Spirit",
  "Can work as individual or in a team",
  "Devoted to the task assigned",
];

export default function RudanshiAhujaPage() {
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
              className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="flex justify-center md:justify-end">
                <div className="relative w-[240px] h-[240px] rounded-full shadow-lg overflow-hidden bg-muted">
                  <Image
                    src="/rudanshi.jpg"
                    alt="Rudanshi Ahuja"
                    width={240}
                    height={240}
                    priority
                    className="rounded-full object-cover w-full h-full"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Crect width='240' height='240' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%239ca3af'%3EPhoto Coming Soon%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Rudanshi Ahuja
                </h1>
                <p className="text-lg text-muted-foreground mb-2">
                  Commerce Educator
                </p>
                <p className="text-sm text-muted-foreground">
                  A dedicated commerce educator with expertise in teaching
                  commerce subjects to class XII students.
                  M.Com from Delhi School of Economics, one of India's top
                  business schools.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Qualifications */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <Award className="h-6 w-6 text-primary" />
                    <h2 className="text-3xl font-bold">Qualifications</h2>
                  </div>
                  <div className="space-y-4">
                    {qualifications.map((qual, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-4 rounded-lg border bg-card"
                      >
                        <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{qual}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Achievements */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h2 className="text-3xl font-bold">Achievements</h2>
                  </div>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-4 rounded-lg border bg-card"
                      >
                        <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Strengths */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-lg border bg-card mb-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold">Strengths</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg border bg-muted/50"
                    >
                      <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {strength}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Teaching Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-lg border bg-card"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold">Teaching Approach</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    As a dedicated commerce educator, I focus on making complex
                    commerce concepts accessible and understandable for class XII
                    students. My teaching approach emphasizes clarity, practical
                    examples, and regular practice.
                  </p>
                  <p>
                    I believe in creating a supportive learning environment
                    where students feel comfortable asking questions and
                    expressing their doubts. My goal is to help students not
                    just pass exams, but to truly understand and apply commerce
                    concepts effectively.
                  </p>
                  <p>
                    With my experience in teaching class XII students and my
                    ongoing academic pursuits at Delhi School of Economics, I
                    bring both practical teaching experience and current
                    academic knowledge to the classroom.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

