import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  getBlogPosts,
  getFeaturedPosts,
  getRecentPosts,
  getAllTags,
  blogCategories,
} from "@/lib/blog-data";
import type { BlogCategory, BlogSearchParams } from "@/types";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    // Check for special queries
    const type = searchParams.get("type");

    if (type === "featured") {
      const posts = await getFeaturedPosts();
      return NextResponse.json({ posts });
    }

    if (type === "recent") {
      const limit = parseInt(searchParams.get("limit") || "5");
      const posts = await getRecentPosts(limit);
      return NextResponse.json({ posts });
    }

    if (type === "tags") {
      const tags = await getAllTags();
      return NextResponse.json({ tags });
    }

    if (type === "categories") {
      return NextResponse.json({ categories: blogCategories });
    }

    // Regular blog listing with search/filter
    const params: BlogSearchParams = {
      query: searchParams.get("query") || undefined,
      category: (searchParams.get("category") as BlogCategory) || undefined,
      tag: searchParams.get("tag") || undefined,
      page: parseInt(searchParams.get("page") || "1"),
      pageSize: parseInt(searchParams.get("pageSize") || "10"),
      featured: searchParams.get("featured")
        ? searchParams.get("featured") === "true"
        : undefined,
    };

    const result = await getBlogPosts(params);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
