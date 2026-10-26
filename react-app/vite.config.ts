import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function getBasePath() {
  if (!process.env.SITE_URL) return '/'

  let siteUrl: URL
  try {
    siteUrl = new URL(process.env.SITE_URL)
  } catch {
    throw new Error('SITE_URL must be a valid HTTPS URL.')
  }

  if (siteUrl.protocol !== 'https:') {
    throw new Error('SITE_URL must use HTTPS.')
  }

  return siteUrl.pathname.endsWith('/') ? siteUrl.pathname : `${siteUrl.pathname}/`
}

// https://vitejs.dev/config/
export default defineConfig({
  base: getBasePath(),
  plugins: [react()],
  build: {
    manifest: true,
  },
})
