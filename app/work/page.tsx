import { Work } from 'app/components/work'
import { baseUrl } from 'app/sitemap'

export const metadata = {
  title: 'Work | The Teleporter',
  description: 'Explore my projects and professional work in web development and design engineering.',
  openGraph: {
    title: 'Work | The Teleporter',
    description: 'Explore my projects and professional work in web development and design engineering.',
    url: `${baseUrl}/work`,
    siteName: 'The Teleporter',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('Work | The Teleporter')}&date=${encodeURIComponent(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))}`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work | The Teleporter',
    description: 'Explore my projects and professional work in web development and design engineering.',
    images: [`${baseUrl}/og?title=${encodeURIComponent('Work | The Teleporter')}&date=${encodeURIComponent(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))}`],
  },
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Work</h1>
      <Work />
    </section>
  )
}