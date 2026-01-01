// Announcement Banner Configuration
// Update this file to change the banner message and visibility

export const announcementConfig = {
  // Set to true to show the banner, false to hide it
  show: true,

  // The announcement message
  message:
    "🎉 Happy New Year 2026! Wishing all our students a year filled with success, growth, and achievements. May this year bring you closer to your dreams! 🎊",

  // Optional: Link URL (leave empty string if no link)
  linkUrl: "",

  // Optional: Link text (only shown if linkUrl is provided)
  linkText: "",

  // Banner background color (primary, success, info, warning, or custom)
  variant: "primary" as "primary" | "success" | "info" | "warning",

  // Optional: Custom background color (overrides variant if provided)
  // Using festive gold gradient for New Year
  customBgColor: "bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500",

  // Optional: Custom text color
  customTextColor: "text-white",

  // Whether the banner can be dismissed by users
  dismissible: true,

  // Optional: Auto-hide after X days (0 = never auto-hide)
  autoHideAfterDays: 0,

  // Optional: Start date (YYYY-MM-DD format, empty = show immediately)
  startDate: "",

  // Optional: End date (YYYY-MM-DD format, empty = show indefinitely)
  endDate: "",
};
