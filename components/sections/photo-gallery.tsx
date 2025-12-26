"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Camera, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// Photo gallery - showing categories that can be viewed on Google Maps
const photos = [
  {
    id: "1",
    title: "Classroom Environment",
    description: "Our modern learning space",
    icon: "📚",
  },
  {
    id: "2",
    title: "Teaching Sessions",
    description: "Interactive learning in progress",
    icon: "👨‍🏫",
  },
  {
    id: "3",
    title: "Student Activities",
    description: "Students engaged in learning",
    icon: "🎓",
  },
  {
    id: "4",
    title: "Institute Building",
    description: "Our institute in Palwal",
    icon: "🏢",
  },
  {
    id: "5",
    title: "Study Materials",
    description: "Comprehensive study resources",
    icon: "📖",
  },
  {
    id: "6",
    title: "Achievement Display",
    description: "Student achievements showcase",
    icon: "🏆",
  },
]

export function PhotoGallery() {
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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Camera className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Photo Gallery</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a look at our institute, classrooms, and learning environment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
            >
              <a
                href="https://www.google.com/maps/place/Ishant+Commerce+Classes/@28.1486,77.3254,17z/data=!4m2!3m1!1s0x0:0xa60b6b8ba94b2337"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 overflow-hidden flex items-center justify-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {photo.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-semibold mb-1">{photo.title}</h3>
                      <p className="text-sm text-white/90">{photo.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{photo.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{photo.description}</p>
                  <p className="text-xs text-primary font-medium">Click to view on Google Maps →</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <a
              href="https://www.google.com/maps/place/Ishant+Commerce+Classes/@28.1486,77.3254,17z/data=!4m2!3m1!1s0x0:0xa60b6b8ba94b2337"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <span>View All Photos on Google Maps</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

