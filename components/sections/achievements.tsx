"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Trophy, Award, Star, TrendingUp } from "lucide-react"

interface Achievement {
  id: string
  studentName: string
  achievement: string
  year: string
  icon: React.ElementType
}

const achievements: Achievement[] = [
  {
    id: "1",
    studentName: "Rajesh Kumar",
    achievement: "98% in Accountancy - Class XII Board Exam",
    year: "2024",
    icon: Trophy,
  },
  {
    id: "2",
    studentName: "Priya Sharma",
    achievement: "State Rank 5 in Business Studies",
    year: "2024",
    icon: Award,
  },
  {
    id: "3",
    studentName: "Amit Singh",
    achievement: "100/100 in Accountancy Board Exam",
    year: "2023",
    icon: Star,
  },
  {
    id: "4",
    studentName: "Sneha Gupta",
    achievement: "District Topper - Commerce Stream",
    year: "2023",
    icon: TrendingUp,
  },
  {
    id: "5",
    studentName: "Vikash Yadav",
    achievement: "95% Overall - Class XII Result",
    year: "2024",
    icon: Trophy,
  },
  {
    id: "6",
    studentName: "Anjali Verma",
    achievement: "Merit Scholarship Winner",
    year: "2024",
    icon: Award,
  },
]

export function Achievements() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Achievements</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Celebrating the success and accomplishments of our students
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{achievement.studentName}</h3>
                    <p className="text-muted-foreground mb-2">{achievement.achievement}</p>
                    <span className="text-sm text-primary font-medium">{achievement.year}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

