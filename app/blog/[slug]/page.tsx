import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { Link } from 'next-view-transitions'
import { AllPosts } from 'app/components/all-posts'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata

  const formattedDate = new Date(publishedTime).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}&date=${encodeURIComponent(formattedDate)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
      <section>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}&date=${encodeURIComponent(formatDate(post.metadata.publishedAt))}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                '@type': 'Person',
                name: 'The Teleporter',
              },
            }),
          }}
        />
      <div className="mb-8">
         <AllPosts />
        </div>
        <h1 
          className="title font-semibold text-2xl tracking-tighter mt-5"
          style={{ viewTransitionName: `title-${post.slug}` }}
        >
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p 
            className="text-sm text-neutral-600 dark:text-neutral-400"
            style={{ viewTransitionName: `date-${post.slug}` }}
          >
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <article 
          className="prose"
          style={{ viewTransitionName: `content-${post.slug}` }}
        >
          <CustomMDX source={post.content} />
        </article>
      </section>
  )
}