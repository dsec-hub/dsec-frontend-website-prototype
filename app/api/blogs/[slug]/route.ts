import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const post = await getBlogPostBySlug(slug);

    if (!post) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    // Get related posts
    const relatedPosts = await getRelatedPosts(slug, 3);

    return NextResponse.json({
      post,
      relatedPosts,
    });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}
