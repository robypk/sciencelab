/** @type {import('next').NextConfig} */
const nextConfig = { output: 'export',
 

// Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
// trailingSlash: true,

// Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
// skipTrailingSlashRedirect: true,

// Optional: Change the output directory `out` -> `dist`
// distDir: 'dist',
exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // Add other pages as needed
    };
  },

}

module.exports = nextConfig
