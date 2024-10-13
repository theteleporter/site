import { BlogPosts } from 'app/components/posts'
import { baseUrl } from 'app/sitemap'

export const metadata = {
  title: 'The Teleporter',
  description: 'I make crappy websites.',
  openGraph: {
    title: 'The Teleporter',
    description: 'I make crappy websites.',
    url: baseUrl,
    siteName: 'The Teleporter',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('The Teleporter')}&date=${encodeURIComponent(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))}`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Teleporter',
    description: 'I make crappy websites.',
    images: [`${baseUrl}/og?title=${encodeURIComponent('The Teleporter')}&date=${encodeURIComponent(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))}`],
  },
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About
      </h1>
      <p className="mb-4">
        {`I'm a frontend developer who is obsessed with the web and its endless possibilities. For the past few years, I have written code mostly for my personal projects and whatever ideas came to mind. I enjoy experimenting with new technologies and frameworks, continually learning and evolving my skills. Currently, I'm working on Xuneix, a security package designed to help developers and engineers secure their products, saving them time on setting up security across their projects.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}