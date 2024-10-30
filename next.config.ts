/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/affiliate-programs',
        destination: 'https://affiliate-links.vercel.app',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/theteleporter',
        permanent: true,
      },
      {
        source: '/x',
        destination: 'https://x.com/@theteleporter_',
        permanent: true,
      },
    ]
},
}
 
module.exports = nextConfig