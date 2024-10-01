

import { BlogPosts } from 'app/components/posts'
import { ViewTransitions } from 'next-view-transitions'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <ViewTransitions>
      <section>
        <h1 
          className="font-semibold text-2xl mb-8 tracking-tighter"
          style={{ viewTransitionName: 'all-posts-button' }}
        >
          All posts
        </h1>
        <BlogPosts />
      </section>
    </ViewTransitions>
  )
}