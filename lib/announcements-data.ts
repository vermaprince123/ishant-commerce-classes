// Announcements data storage
// This file stores metadata about announcements
// In production, consider using a database

export interface Announcement {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  category?: "batch" | "opening" | "closing" | "general";
}

// Initial empty array - will be populated via API
export let announcementsData: Announcement[] = [];

// Helper function to load data (will be used by API)
export function loadAnnouncements(): Announcement[] {
  return announcementsData;
}

// Helper function to save data (will be used by API)
export function saveAnnouncements(data: Announcement[]): void {
  announcementsData = data;
}
