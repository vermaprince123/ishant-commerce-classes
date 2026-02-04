# Announcements Guide

## Overview
The announcements system displays promotional images, class opening/closing notices, new batch announcements, and other important updates on the public announcements page.

## Public Page

Users can view all active announcements at `/announcements`. The page displays:
- All active announcements in a grid layout
- Category badges
- Creation dates
- Clickable images that open in a modal for full-size viewing

## How to Add Announcements

### Method 1: Manual (Recommended)

1. **Add the image file:**
   - Place your image in `/public/announcements/` folder
   - Use a descriptive filename (e.g., `new-batch-jan-2025.jpg`)

2. **Update the JSON file:**
   - Open `/lib/announcements.json`
   - Add a new announcement object following this format:

```json
{
  "id": "announcement-1234567890",
  "title": "New Batch Starting Soon!",
  "description": "Join our new batch starting from January 2025",
  "imageUrl": "/announcements/new-batch-jan-2025.jpg",
  "createdAt": "2025-01-15T10:00:00.000Z",
  "updatedAt": "2025-01-15T10:00:00.000Z",
  "isActive": true,
  "category": "batch"
}
```

### Announcement Object Fields

- **id**: Unique identifier (use timestamp: `announcement-${Date.now()}`)
- **title**: Display title (required)
- **description**: Optional description text
- **imageUrl**: Path to image in `/public/announcements/` folder (must start with `/announcements/`)
- **createdAt**: ISO date string (current date/time)
- **updatedAt**: ISO date string (current date/time)
- **isActive**: `true` to show on public page, `false` to hide
- **category**: One of: `"batch"`, `"opening"`, `"closing"`, or `"general"`

### Categories

- **"batch"**: New Batch announcements
- **"opening"**: Class Opening notices
- **"closing"**: Class Closing notices
- **"general"**: General announcements

## Example

```json
[
  {
    "id": "announcement-1705312800000",
    "title": "New Batch Starting January 2025",
    "description": "Enroll now for our new batch! Special discount available.",
    "imageUrl": "/announcements/new-batch-jan-2025.jpg",
    "createdAt": "2025-01-15T10:00:00.000Z",
    "updatedAt": "2025-01-15T10:00:00.000Z",
    "isActive": true,
    "category": "batch"
  },
  {
    "id": "announcement-1705312900000",
    "title": "Class Opening Notice",
    "description": "Classes resume from Monday",
    "imageUrl": "/announcements/class-opening.jpg",
    "createdAt": "2025-01-15T10:01:00.000Z",
    "updatedAt": "2025-01-15T10:01:00.000Z",
    "isActive": true,
    "category": "opening"
  }
]
```

## Notes

- Only announcements with `"isActive": true` are shown on the public page
- Announcements are sorted by creation date (newest first)
- Images are automatically optimized by Next.js
- Supported image formats: JPG, PNG, WebP, etc.
- After updating the JSON file, refresh the announcements page to see changes
