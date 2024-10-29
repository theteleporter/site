/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/affiliate-programs',
        destination: '/blog',
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