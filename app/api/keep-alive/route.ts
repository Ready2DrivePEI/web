import { NextResponse } from "next/server";
import { adminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { error } = await adminClient
      .from("profiles")
      .select("id")
      .limit(1);

    if (error) {
      console.error("[keep-alive] Supabase query failed:", error.message);
      return NextResponse.json(
        {
          status: "error",
          message: "Database check failed",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        status: "ok",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[keep-alive] Unexpected error:", err);
    return NextResponse.json(
      {
        status: "error",
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
