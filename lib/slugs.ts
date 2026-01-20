/**
 * Centralized slug generation and normalization
 * Ensures consistent slug handling across all pages
 */

export const normalizeSlug = (slug: string): string => {
  return slug.toLowerCase().trim()
}

export const reviewSlugs = {
  LAPTOP: 'best-laptop-under-55k',
  HEADPHONES: 'sony-wh1000xm5-headphones',
  TRIPOD: 'manfrotto-tripod',
  MONITOR: 'portable-monitor',
} as const

export const allReviewSlugs = Object.values(reviewSlugs)

export const getReviewSlug = (key: keyof typeof reviewSlugs): string => {
  return reviewSlugs[key]
}
