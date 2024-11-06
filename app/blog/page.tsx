import { BlogPosts } from 'app/components/posts'
import { baseUrl } from 'app/sitemap'

export const metadata = {
  title: 'Blog | The Teleporter',
  description: 'Read my blog about web development, design engineering, and more.',
  openGraph: {
    title: 'Blog | The Teleporter',
    description: 'Read my blog about web development, design engineering, and more.',
    url: `${baseUrl}/blog`,
    siteName: 'The Teleporter',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('Blog | The Teleporter')}&date=${encodeURIComponent(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))}`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | The Teleporter',
    description: 'Read my blog about web development, design engineering, and more.',
    images: [`${baseUrl}/og?title=${encodeURIComponent('Blog | The Teleporter')}&date=${encodeURIComponent(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))}`],
  },
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tight">Blog</h1>
      <BlogPosts />
    </section>
  )
}