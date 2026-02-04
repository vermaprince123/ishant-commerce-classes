import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Announcement } from "@/lib/announcements-data";

const ANNOUNCEMENTS_DIR = path.join(process.cwd(), "public", "announcements");
const DATA_FILE = path.join(process.cwd(), "lib", "announcements.json");

// Ensure directories exist
async function ensureDirectories() {
  try {
    await fs.mkdir(ANNOUNCEMENTS_DIR, { recursive: true });
  } catch (error) {
    console.error("Error creating announcements directory:", error);
  }
}

// Load announcements from JSON file
async function loadAnnouncements(): Promise<Announcement[]> {
  try {
    await ensureDirectories();
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist yet, return empty array
    return [];
  }
}

// Save announcements to JSON file
async function saveAnnouncements(announcements: Announcement[]): Promise<void> {
  try {
    await ensureDirectories();
    await fs.writeFile(DATA_FILE, JSON.stringify(announcements, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving announcements:", error);
    throw error;
  }
}

// GET - Fetch all announcements
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const activeOnly = searchParams.get("activeOnly") === "true";

    const announcements = await loadAnnouncements();
    
    // Sort by createdAt (newest first)
    const sorted = announcements.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    // Filter active only if requested
    const filtered = activeOnly
      ? sorted.filter((a) => a.isActive)
      : sorted;

    return NextResponse.json({ announcements: filtered }, { status: 200 });
  } catch (error) {
    console.error("Error fetching announcements:", error);
    return NextResponse.json(
      { error: "Failed to fetch announcements" },
      { status: 500 }
    );
  }
}

// POST - Create new announcement
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = (formData.get("category") as string) || "general";
    const file = formData.get("file") as File | null;

    if (!title || !file) {
      return NextResponse.json(
        { error: "Title and image file are required" },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "File must be an image" },
        { status: 400 }
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const fileExtension = file.name.split(".").pop();
    const filename = `announcement-${timestamp}.${fileExtension}`;
    const filepath = path.join(ANNOUNCEMENTS_DIR, filename);

    // Save file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await fs.writeFile(filepath, buffer);

    // Create announcement object
    const announcement: Announcement = {
      id: `announcement-${timestamp}`,
      title,
      description: description || "",
      imageUrl: `/announcements/${filename}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true,
      category: category as Announcement["category"],
    };

    // Load existing announcements and add new one
    const announcements = await loadAnnouncements();
    announcements.push(announcement);
    await saveAnnouncements(announcements);

    return NextResponse.json(
      { message: "Announcement created successfully", announcement },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating announcement:", error);
    return NextResponse.json(
      { error: "Failed to create announcement" },
      { status: 500 }
    );
  }
}
