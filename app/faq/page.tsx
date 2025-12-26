"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What subjects do you teach?",
    answer: "We specialize in Commerce subjects including Accountancy, Business Studies, Economics, and Mathematics. We also provide coaching for other commerce-related subjects.",
  },
  {
    question: "What are the class timings?",
    answer: "We offer flexible class timings from Monday to Saturday, 9:00 AM to 7:00 PM. We can arrange classes according to your convenience.",
  },
  {
    question: "What is the batch size?",
    answer: "We maintain small batch sizes (15-20 students) to ensure personalized attention and better learning outcomes for each student.",
  },
  {
    question: "Do you provide study material?",
    answer: "Yes, we provide comprehensive study material including notes, practice papers, and previous year question papers to help students prepare effectively.",
  },
  {
    question: "Are there doubt clearing sessions?",
    answer: "Absolutely! We conduct regular doubt clearing sessions and our faculty is always available to help students with their queries.",
  },
  {
    question: "What is the fee structure?",
    answer: "Our fee structure varies based on the subject and class duration. Please contact us for detailed information about fees and payment options.",
  },
  {
    question: "Do you offer online classes?",
    answer: "Yes, we offer both offline and online classes. You can choose the mode that suits you best.",
  },
  {
    question: "How do I enroll?",
    answer: "You can enroll by visiting our institute, calling us, or filling out the contact form on our website. We'll guide you through the enrollment process.",
  },
  {
    question: "What are your locations?",
    answer: "We have centers in Palwal and Faridabad. Please contact us for specific addresses and directions.",
  },
  {
    question: "Do you provide test series?",
    answer: "Yes, we conduct regular tests and provide test series to help students prepare for their board exams and assess their progress.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our courses, enrollment, and services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="border rounded-lg bg-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform",
                        openIndex === index && "transform rotate-180"
                      )}
                    />
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

