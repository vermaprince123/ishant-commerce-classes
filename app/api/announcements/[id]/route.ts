import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Announcement } from "@/lib/announcements-data";

const ANNOUNCEMENTS_DIR = path.join(process.cwd(), "public", "announcements");
const DATA_FILE = path.join(process.cwd(), "lib", "announcements.json");

// Load announcements from JSON file
async function loadAnnouncements(): Promise<Announcement[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Save announcements to JSON file
async function saveAnnouncements(announcements: Announcement[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(announcements, null, 2), "utf-8");
}

// DELETE - Delete an announcement
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const announcements = await loadAnnouncements();
    const announcement = announcements.find((a) => a.id === id);

    if (!announcement) {
      return NextResponse.json(
        { error: "Announcement not found" },
        { status: 404 }
      );
    }

    // Delete image file
    try {
      const filename = announcement.imageUrl.split("/").pop();
      if (filename) {
        const filepath = path.join(ANNOUNCEMENTS_DIR, filename);
        await fs.unlink(filepath);
      }
    } catch (error) {
      console.error("Error deleting image file:", error);
      // Continue even if file deletion fails
    }

    // Remove from array
    const filtered = announcements.filter((a) => a.id !== id);
    await saveAnnouncements(filtered);

    return NextResponse.json(
      { message: "Announcement deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting announcement:", error);
    return NextResponse.json(
      { error: "Failed to delete announcement" },
      { status: 500 }
    );
  }
}

// PATCH - Update announcement (toggle active status or update details)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const announcements = await loadAnnouncements();
    const index = announcements.findIndex((a) => a.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: "Announcement not found" },
        { status: 404 }
      );
    }

    // Update announcement
    announcements[index] = {
      ...announcements[index],
      ...body,
      updatedAt: new Date().toISOString(),
    };

    await saveAnnouncements(announcements);

    return NextResponse.json(
      { message: "Announcement updated successfully", announcement: announcements[index] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating announcement:", error);
    return NextResponse.json(
      { error: "Failed to update announcement" },
      { status: 500 }
    );
  }
}
