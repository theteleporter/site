import { Link } from 'next-view-transitions'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 cursor-pointer"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p 
                className="text-neutral-600 dark:text-neutral-400 w-[140px] tabular-nums"
                style={{ viewTransitionName: `date-${post.slug}` }}
              >
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p 
                className="text-neutral-900 dark:text-neutral-100 tracking-tight"
                style={{ viewTransitionName: `title-${post.slug}` }}
              >
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}