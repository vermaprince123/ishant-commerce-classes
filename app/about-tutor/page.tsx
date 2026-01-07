"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { GraduationCap, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tutors = [
  {
    id: "ishant-verma",
    name: "Ishant Verma",
    image: "/ishant.png",
    title: "SRCC Alumnus & Commerce Expert",
    description:
      "An SRCC alumnus and a dedicated commerce tutor with over a decade of experience preparing students for board exams and competitive entrance tests.",
    qualifications: [
      "B.Com (Hons) - Sri Ram College of Commerce (SRCC), Delhi University",
      "M.Com - Delhi University",
      "B.Ed - Delhi University",
      "UGC Net Qualified (Two Times)",
      "10+ Years of Teaching Experience",
    ],
    achievements: [
      "1000+ Students Taught Successfully",
      "Scored 100/100 in Accountancy (Class XII)",
      "Scored 100/100 in Mathematics (Class XII)",
      "5.0 Rating with 343+ Google Reviews",
    ],
    href: "/about-tutor/ishant-verma",
  },
  {
    id: "rudanshi-ahuja",
    name: "Rudanshi Ahuja",
    image: "/rudanshi.jpg", // Placeholder - user will add photo
    title: "Commerce Educator",
    description:
      "A dedicated commerce educator with expertise in teaching commerce subjects to class XII students.",
    qualifications: [
      "M.Com, IB & HRM - Delhi School of Economics-DU",
      "B.Com(H) - Kirori Mal College, Delhi University",
      "Teaching Experience with Class XII Students",
    ],
    achievements: [
      "Best Student Award in Class X",
      "Discipline In-charge Title",
      "Certificate of Member in The Commerce Society, KMC-2016",
      "Certificate of Volunteer in Renaissance, KMC-2016",
      "1st Position in School Speech Competition (Class X)",
    ],
    href: "/about-tutor/rudanshi-ahuja",
  },
];

function TutorCard({ tutor, index }: { tutor: typeof tutors[0]; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="rounded-lg border bg-card p-8 hover:shadow-lg transition-all"
    >
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative mb-4">
          <div className="w-[200px] h-[200px] rounded-full shadow-lg overflow-hidden bg-muted flex items-center justify-center">
            {!imageError ? (
              <Image
                src={tutor.image}
                alt={tutor.name}
                width={200}
                height={200}
                className="rounded-full object-cover w-full h-full"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="text-muted-foreground text-sm text-center px-4">
                Photo Coming Soon
              </div>
            )}
          </div>
        </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {tutor.name}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {tutor.title}
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      {tutor.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Key Qualifications</h3>
                    </div>
                    <ul className="space-y-2">
                      {tutor.qualifications.slice(0, 3).map((qual, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start space-x-2"
                        >
                          <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Award className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Notable Achievements</h3>
                    </div>
                    <ul className="space-y-2">
                      {tutor.achievements.slice(0, 2).map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start space-x-2"
                        >
                          <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

        <Link href={tutor.href}>
          <Button className="w-full" variant="outline">
            Learn More About {tutor.name.split(" ")[0]}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
    </motion.div>
  );
}

export default function AboutTutorPage() {
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
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About the Tutors
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                Meet our experienced educators behind Ishant Commerce Classes
              </p>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Our team of dedicated tutors brings years of experience and
                expertise to help students excel in commerce subjects and achieve
                their academic goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tutors Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {tutors.map((tutor, index) => (
                <TutorCard key={tutor.id} tutor={tutor} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
