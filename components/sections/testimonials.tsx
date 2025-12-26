"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  rating: number
  text: string
  subject: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Shikha Singla",
    rating: 5,
    text: "Best teaching skills and experience...treat student like a family...",
    subject: "Accountancy",
  },
  {
    id: "2",
    name: "Vikramjeet Tewatia",
    rating: 5,
    text: "Best account's teacher ever and good place",
    subject: "Accountancy",
  },
  {
    id: "3",
    name: "Gagan Chauhan",
    rating: 5,
    text: "The learning environment is positive and motivating.",
    subject: "Accountancy",
  },
  {
    id: "4",
    name: "Student Review",
    rating: 5,
    text: "Ishant sir is an excellent teacher. His explanations make it easier for students to understand properly.",
    subject: "Accountancy",
  },
  {
    id: "5",
    name: "Student Review",
    rating: 5,
    text: "You are very knowledgeable and experienced teacher. You keep your lessons strong when you teach us in class. I definitely got good marks in accountancy with the help of you.",
    subject: "Accountancy",
  },
  {
    id: "6",
    name: "Student Review",
    rating: 5,
    text: "Ishant classes is very conceptualize classes given under guidance of Ishant Verma sir.",
    subject: "Accountancy",
  },
  {
    id: "7",
    name: "Student Review",
    rating: 5,
    text: "You've fostered a sense of community in classroom that makes learning a collaborative and enjoyable experience.",
    subject: "Accountancy",
  },
  {
    id: "8",
    name: "Student Review",
    rating: 5,
    text: "Your awesome sir and your way of teaching is good. Thank you.",
    subject: "Accountancy",
  },
  {
    id: "9",
    name: "Student Review",
    rating: 5,
    text: "Ishant sir is patient, supportive, and good at motivating students to achieve results.",
    subject: "Accountancy",
  },
]

export function Testimonials() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Feedback</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear what our students have to say about their learning experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="pt-4 border-t">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.subject}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

