"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
}

const videos: YouTubeVideo[] = [
  {
    id: "1",
    title: "Part 1 Accounting Equation by Mr. Ishant Verma",
    description:
      "Learn the fundamentals of accounting equation - Class XI Accountancy",
    url: "https://www.youtube.com/watch?v=LZqybxFNVr8",
  },
  {
    id: "2",
    title: "Lesson 1 CH Accounting Principles by Ishant Verma",
    description: "Understanding accounting principles and concepts - Class XI",
    url: "https://www.youtube.com/watch?v=n-OeSaXeCNg",
  },
  {
    id: "3",
    title: "Part 7 Accounting Equation of XI by Ishant verma",
    description:
      "Advanced accounting equation concepts - 20 minutes comprehensive lesson",
    url: "https://www.youtube.com/watch?v=MabY4_SE2Jg",
  },
  {
    id: "4",
    title: "CH 2 Part 1 - Average Profit Method | Goodwill Valuation",
    description: "Change in Profit Sharing Ratio - Class XII Accountancy",
    url: "https://www.youtube.com/watch?v=8_DweMvnnuc",
  },
  {
    id: "5",
    title: "Part 4 Adjustment of Goodwill | Admission of Partner",
    description: "Lesson 2 on partnership accounting - Class XII",
    url: "https://www.youtube.com/watch?v=j5tkJKaKpKA",
  },
  {
    id: "6",
    title: "Adjustments of Bad Debts, Provision for Doubtful Debts",
    description: "Complete guide to bad debts and provisions - 16 minutes",
    url: "https://www.youtube.com/watch?v=ldxULe-xe7k",
  },
  {
    id: "7",
    title: "Part 8 CH 2 - Accounting treatment of Revaluation",
    description:
      "Revaluation of Assets and Liabilities - Class XII Accountancy",
    url: "https://www.youtube.com/watch?v=BTKN4WAxkHs",
  },
  {
    id: "8",
    title: "Lesson 1- Basic Terms of Accounting of XI",
    description: "Essential accounting terms and concepts - Class XI",
    url: "https://www.youtube.com/watch?v=B1_3LbYOs7o",
  },
  {
    id: "9",
    title: "CH 2 Part 5 - Treatment of Goodwill",
    description: "Change in Profit Sharing Ratio - Class 12 Accountancy",
    url: "https://www.youtube.com/watch?v=B49T6gWyl94",
  },
];

const getYouTubeVideoId = (url: string) => {
  const videoId = url.split("v=")[1]?.split("&")[0];
  return videoId || null;
};

const getThumbnailUrl = (
  videoId: string,
  quality:
    | "maxresdefault"
    | "hqdefault"
    | "mqdefault"
    | "sddefault"
    | "0" = "hqdefault"
) => {
  // Use format 0.jpg as fallback (most reliable)
  if (quality === "0") {
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  }
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};

function VideoCard({ video, index }: { video: YouTubeVideo; index: number }) {
  const videoId = getYouTubeVideoId(video.url);
  const [thumbnailQuality, setThumbnailQuality] = React.useState<
    "maxresdefault" | "hqdefault" | "mqdefault" | "sddefault" | "0" | "error"
  >("hqdefault"); // Start with hqdefault as it's more reliable
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  const currentThumbnail =
    videoId && thumbnailQuality !== "error"
      ? getThumbnailUrl(videoId, thumbnailQuality)
      : null;

  // Preload image to check if it exists
  React.useEffect(() => {
    if (!currentThumbnail || !videoId || imageError) return;
    
    setImageLoaded(false);
    const img = new Image();
    let isMounted = true;

    img.onload = () => {
      if (isMounted) {
        setImageLoaded(true);
        setImageError(false);
      }
    };
    img.onerror = () => {
      if (isMounted) {
        // Try next quality
        if (thumbnailQuality === "maxresdefault") {
          setThumbnailQuality("hqdefault");
        } else if (thumbnailQuality === "hqdefault") {
          setThumbnailQuality("mqdefault");
        } else if (thumbnailQuality === "mqdefault") {
          setThumbnailQuality("sddefault");
        } else if (thumbnailQuality === "sddefault") {
          setThumbnailQuality("0");
        } else {
          setImageError(true);
          setThumbnailQuality("error");
        }
      }
    };
    img.src = currentThumbnail;

    return () => {
      isMounted = false;
    };
  }, [thumbnailQuality, videoId]); // Only depend on quality and videoId

  const handleThumbnailError = React.useCallback(() => {
    if (!videoId) {
      setImageError(true);
      setThumbnailQuality("error");
      return;
    }

    // Try fallback qualities in order
    if (thumbnailQuality === "maxresdefault") {
      setThumbnailQuality("hqdefault");
    } else if (thumbnailQuality === "hqdefault") {
      setThumbnailQuality("mqdefault");
    } else if (thumbnailQuality === "mqdefault") {
      setThumbnailQuality("sddefault");
    } else if (thumbnailQuality === "sddefault") {
      setThumbnailQuality("0");
    } else {
      setImageError(true);
      setThumbnailQuality("error");
    }
  }, [videoId, thumbnailQuality]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-all"
    >
      <div className="relative aspect-video bg-muted overflow-hidden">
        {currentThumbnail && !imageError ? (
          <>
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            )}
            <img
              key={currentThumbnail}
              src={currentThumbnail}
              alt={video.title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              onError={handleThumbnailError}
              onLoad={() => setImageLoaded(true)}
            />
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 p-4">
            <Youtube className="h-16 w-16 text-primary/50 mb-3" />
            <p className="text-xs text-center text-muted-foreground px-2 line-clamp-2">
              {video.title}
            </p>
          </div>
        )}
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors cursor-pointer group"
        >
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-red-600 rounded-full p-4">
              <Youtube className="h-8 w-8 text-white" />
            </div>
          </div>
        </a>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {video.description}
        </p>
        <Button asChild variant="outline" className="w-full">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2"
          >
            <span>Watch on YouTube</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

export function YouTubeLinks() {
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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Youtube className="h-8 w-8 text-red-500" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Recorded Lectures
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Access our recorded YouTube lectures anytime, anywhere. Subscribe to
            our channel for more videos!
          </p>
          <div className="mt-4">
            <Button asChild variant="outline" size="sm">
              <a
                href="https://www.youtube.com/@IshantCommerceClasses"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Youtube className="h-4 w-4 text-red-500" />
                <span>Subscribe to Channel</span>
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
