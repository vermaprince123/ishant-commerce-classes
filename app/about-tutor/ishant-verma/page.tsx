"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Users, Star } from "lucide-react";

const qualifications = [
  "B.Com (Hons) - Sri Ram College of Commerce (SRCC), Delhi University",
  "M.Com - Delhi University",
  "B.Ed - Delhi University",
  "UGC Net Qualified (Two Times)",
  "10+ Years of Teaching Experience",
  "Expert in Accountancy and Business Studies",
];

const achievements = [
  "1000+ Students Taught Successfully",
  "Scored 100/100 in Accountancy (Class XII)",
  "Scored 100/100 in Mathematics (Class XII)",
  "94% Marks in Class XII (2011)",
  "District Topper",
  "5.0 Rating with 343+ Google Reviews",
  "341+ Justdial Reviews with 5.0 Rating",
];

export default function IshantVermaPage() {
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
                <Image
                  src="/ishant.png"
                  alt="Ishant Verma"
                  width={240}
                  height={240}
                  priority
                  className="rounded-full shadow-lg"
                />
              </div>

              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Ishant Verma
                </h1>
                <p className="text-lg text-muted-foreground mb-2">
                  SRCC Alumnus & Commerce Expert
                </p>
                <p className="text-sm text-muted-foreground">
                  An SRCC alumnus and a dedicated commerce tutor with over a
                  decade of experience preparing students for board exams and
                  competitive entrance tests.
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
                  <h2 className="text-3xl font-bold">Teaching Philosophy</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    With over 10 years of experience in teaching commerce
                    subjects, I believe in making complex concepts simple and
                    accessible to every student. My teaching methodology focuses
                    on building a strong foundation, followed by practical
                    application and regular practice.
                  </p>
                  <p>
                    I understand that each student learns differently, which is
                    why I maintain small batch sizes to provide personalized
                    attention. My goal is not just to help students pass exams,
                    but to ensure they truly understand the concepts and can
                    apply them in real-world scenarios.
                  </p>
                  <p>
                    I am committed to creating a supportive learning environment
                    where students feel comfortable asking questions and
                    expressing their doubts. Regular assessments, doubt clearing
                    sessions, and one-on-one support are integral parts of my
                    teaching approach.
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

