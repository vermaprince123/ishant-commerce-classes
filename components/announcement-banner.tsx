"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { announcementConfig } from "@/lib/announcement-config";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isDismissed, setIsDismissed] = React.useState(false);

  React.useEffect(() => {
    // Check if banner should be shown
    if (!announcementConfig.show) {
      return;
    }

    const today = new Date();

    // Check date range if configured
    if (announcementConfig.startDate || announcementConfig.endDate) {
      const todayStr = today.toISOString().split("T")[0];

      if (
        announcementConfig.startDate &&
        todayStr < announcementConfig.startDate
      ) {
        return; // Not started yet
      }

      if (announcementConfig.endDate && todayStr > announcementConfig.endDate) {
        return; // Already ended
      }
    }

    // Check if user has dismissed it (stored in localStorage)
    if (announcementConfig.dismissible) {
      const dismissedKey = `announcement-dismissed-${announcementConfig.message.substring(
        0,
        20
      )}`;
      const dismissed = localStorage.getItem(dismissedKey);
      if (dismissed === "true") {
        setIsDismissed(true);
        return;
      }
    }

    // Check auto-hide after days
    if (announcementConfig.autoHideAfterDays > 0) {
      const lastShownKey = `announcement-last-shown-${announcementConfig.message.substring(
        0,
        20
      )}`;
      const lastShown = localStorage.getItem(lastShownKey);
      if (lastShown) {
        const lastShownDate = new Date(lastShown);
        const daysSince = Math.floor(
          (today.getTime() - lastShownDate.getTime()) / (1000 * 60 * 60 * 24)
        );
        if (daysSince >= announcementConfig.autoHideAfterDays) {
          return;
        }
      } else {
        localStorage.setItem(lastShownKey, today.toISOString());
      }
    }

    setIsVisible(true);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);

    if (announcementConfig.dismissible) {
      const dismissedKey = `announcement-dismissed-${announcementConfig.message.substring(
        0,
        20
      )}`;
      localStorage.setItem(dismissedKey, "true");
    }
  };

  // Get variant styles
  const getVariantStyles = () => {
    // If custom colors are provided, use them (even if one is empty, use defaults)
    if (announcementConfig.customBgColor) {
      return {
        bg: announcementConfig.customBgColor,
        text: announcementConfig.customTextColor || "text-white",
      };
    }

    switch (announcementConfig.variant) {
      case "success":
        return {
          bg: "bg-green-600 dark:bg-green-700",
          text: "text-white",
        };
      case "info":
        return {
          bg: "bg-blue-600 dark:bg-blue-700",
          text: "text-white",
        };
      case "warning":
        return {
          bg: "bg-yellow-600 dark:bg-yellow-700",
          text: "text-white",
        };
      case "primary":
      default:
        return {
          bg: "bg-gradient-to-r from-primary to-primary/80",
          text: "text-white",
        };
    }
  };

  const styles = getVariantStyles();

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn("relative z-50 w-full", styles.bg, styles.text)}
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-center gap-3 text-sm md:text-base">
              {/* Icon */}
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 animate-pulse" />

              {/* Message */}
              <div className="flex-1 text-center">
                {announcementConfig.linkUrl ? (
                  <Link
                    href={announcementConfig.linkUrl}
                    className="hover:underline font-medium"
                  >
                    {announcementConfig.message}
                    {announcementConfig.linkText && (
                      <span className="ml-2 underline">
                        {announcementConfig.linkText} →
                      </span>
                    )}
                  </Link>
                ) : (
                  <p className="font-medium">{announcementConfig.message}</p>
                )}
              </div>

              {/* Dismiss Button */}
              {announcementConfig.dismissible && (
                <button
                  onClick={handleDismiss}
                  className="flex-shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Dismiss announcement"
                >
                  <X className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
