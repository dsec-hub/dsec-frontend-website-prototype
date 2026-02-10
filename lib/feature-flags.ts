/**
 * Feature Flags Configuration
 *
 * Use these flags to temporarily enable/disable features across the application.
 * Set AUTH_DISABLED to true to show "Coming Soon" message on login/join pages.
 */

export const featureFlags = {
  /**
   * When true, login and join functionality will be disabled
   * and users will see a "Coming Soon" message instead.
   */
  AUTH_DISABLED: false,

  /**
   * When true, content pages (blog, events, projects, partnerships)
   * will be disabled and users will see a "Coming Soon" message instead.
   */
  CONTENT_PAGES_DISABLED: true,
} as const;

export type FeatureFlags = typeof featureFlags;
