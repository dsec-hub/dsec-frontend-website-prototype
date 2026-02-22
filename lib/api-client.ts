/**
 * Secure API Client
 *
 * A thin wrapper around fetch that routes all external API requests through
 * the Next.js proxy (/api/proxy/*) so that:
 *
 * 1. The real backend URL is never exposed to the browser.
 * 2. Cookies (session tokens) are sent automatically (same-origin).
 * 3. Every mutating request includes a JSON content-type header, which
 *    acts as a lightweight CSRF mitigation — browsers will not send
 *    `Content-Type: application/json` in a simple cross-origin form POST.
 *
 * Usage:
 *   import { apiClient } from "@/lib/api-client";
 *   const data = await apiClient.get("/users/me");
 *   await apiClient.post("/events/register", { eventId: "123" });
 */

const PROXY_BASE = "/api/proxy";

type RequestOptions = Omit<RequestInit, "method" | "body"> & {
  /** Query parameters appended to the URL */
  params?: Record<string, string>;
};

class ApiClientError extends Error {
  constructor(
    message: string,
    public status: number,
    public body: unknown
  ) {
    super(message);
    this.name = "ApiClientError";
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let body: unknown;
    try {
      body = await response.json();
    } catch {
      body = await response.text();
    }
    throw new ApiClientError(
      `API error ${response.status}: ${response.statusText}`,
      response.status,
      body
    );
  }

  // Handle 204 No Content
  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

function buildUrl(path: string, params?: Record<string, string>): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${PROXY_BASE}${normalizedPath}`;

  if (!params || Object.keys(params).length === 0) {
    return url;
  }

  const searchParams = new URLSearchParams(params);
  return `${url}?${searchParams.toString()}`;
}

export const apiClient = {
  async get<T = unknown>(path: string, options?: RequestOptions): Promise<T> {
    const { params, ...fetchOpts } = options ?? {};
    const response = await fetch(buildUrl(path, params), {
      ...fetchOpts,
      method: "GET",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        ...fetchOpts.headers,
      },
    });
    return handleResponse<T>(response);
  },

  async post<T = unknown>(
    path: string,
    body?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    const { params, ...fetchOpts } = options ?? {};
    const response = await fetch(buildUrl(path, params), {
      ...fetchOpts,
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...fetchOpts.headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    return handleResponse<T>(response);
  },

  async put<T = unknown>(
    path: string,
    body?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    const { params, ...fetchOpts } = options ?? {};
    const response = await fetch(buildUrl(path, params), {
      ...fetchOpts,
      method: "PUT",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...fetchOpts.headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    return handleResponse<T>(response);
  },

  async delete<T = unknown>(
    path: string,
    options?: RequestOptions
  ): Promise<T> {
    const { params, ...fetchOpts } = options ?? {};
    const response = await fetch(buildUrl(path, params), {
      ...fetchOpts,
      method: "DELETE",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        ...fetchOpts.headers,
      },
    });
    return handleResponse<T>(response);
  },
};

export { ApiClientError };
