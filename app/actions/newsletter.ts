"use server";

interface SubscribeResult {
  success: boolean;
  message: string;
}

/**
 * Subscribe an email address to the DSEC newsletter via Buttondown API
 *
 * @param email - The email address to subscribe
 * @returns Object with success status and message
 */
export async function subscribeToNewsletter(email: string): Promise<SubscribeResult> {
  const apiKey = process.env.BUTTONDOWN_API_KEY;

  if (!apiKey) {
    console.error("BUTTONDOWN_API_KEY is not configured");
    return {
      success: false,
      message: "Newsletter service is not configured. Please contact the administrator.",
    };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  try {
    const response = await fetch("https://api.buttondown.com/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        tags: ["website-signup"],
      }),
    });

    if (response.status === 201) {
      return {
        success: true,
        message: "You're on the list! Check your inbox to confirm your subscription.",
      };
    }

    // Handle specific error cases
    if (response.status === 400) {
      const errorData = await response.json();

      // Check if subscriber already exists
      if (errorData.email_address?.includes("already exists")) {
        return {
          success: true,
          message: "You're already subscribed! Check your inbox for our latest updates.",
        };
      }

      return {
        success: false,
        message: errorData.detail || "Invalid email address. Please try again.",
      };
    }

    if (response.status === 429) {
      return {
        success: false,
        message: "Too many requests. Please try again in a few minutes.",
      };
    }

    // Generic error for other status codes
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return {
      success: false,
      message: "Unable to connect to the newsletter service. Please try again later.",
    };
  }
}
