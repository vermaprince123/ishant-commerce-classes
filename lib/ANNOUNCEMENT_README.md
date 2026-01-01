# Announcement Banner Configuration Guide

## Quick Start

To change the announcement banner, edit the file: `lib/announcement-config.ts`

## Configuration Options

### Basic Settings

```typescript
show: true  // Set to false to hide the banner completely
message: "Your announcement message here"
dismissible: true  // Allow users to close the banner
```

### Styling Options

```typescript
variant: "primary"  // Options: "primary", "success", "info", "warning"
// OR use custom colors:
customBgColor: "#your-color"
customTextColor: "#your-color"
```

### Date Range Control

```typescript
startDate: "2025-01-01"  // Show banner starting from this date (YYYY-MM-DD)
endDate: "2025-01-31"    // Hide banner after this date (YYYY-MM-DD)
// Leave empty strings to show immediately/indefinitely
```

### Auto-Hide Feature

```typescript
autoHideAfterDays: 7  // Automatically hide after 7 days (0 = never auto-hide)
```

### Link Support

```typescript
linkUrl: "/special-offer"  // Optional: Add a link to the message
linkText: "Learn More"     // Text for the link (only shown if linkUrl is provided)
```

## Example Configurations

### New Year Wish (Current)
```typescript
show: true,
message: "🎉 Happy New Year 2025! Wishing all our students a year filled with success! 🎊",
variant: "primary",
dismissible: true,
```

### Special Offer
```typescript
show: true,
message: "🎓 Special Enrollment Offer: Get 20% off on all courses this month!",
linkUrl: "/contact",
linkText: "Enroll Now",
variant: "success",
dismissible: true,
startDate: "2025-01-01",
endDate: "2025-01-31",
```

### Holiday Greeting
```typescript
show: true,
message: "🎄 Merry Christmas! Classes will resume on January 2nd.",
variant: "info",
dismissible: true,
startDate: "2024-12-24",
endDate: "2024-12-26",
```

### Exam Reminder
```typescript
show: true,
message: "📝 Board Exams Starting Soon! Best of luck to all students!",
variant: "warning",
dismissible: true,
autoHideAfterDays: 3,
```

## How to Hide the Banner

1. **Temporarily**: Set `show: false` in the config file
2. **Permanently for a user**: They can click the X button (if dismissible is true)
3. **After a date**: Set `endDate` to a past date
4. **After days**: Set `autoHideAfterDays` to a number

## Notes

- The banner appears at the top of the page, above the navbar
- Dismissed banners are stored in browser localStorage
- Each unique message has its own dismissal state
- The banner is responsive and works on mobile devices
- Changes to the config require a page refresh to take effect

