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
      {
        source: '/projects',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/guestbook',
        destination: 'https://og.theteleporter.me/guestbook',
        permanent: true,
      },
    ]
},
}
 
module.exports = nextConfig