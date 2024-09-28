import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I’m a Next.js developer who is obsessed with the web and it's endless possibilities. For the past few years, I have writen code mostly for my personal projects and whatever ideas came to mind. I enjoy experimenting with new technologies and frameworks, continually learning and evolving my skills. Currently, I’m working on Xuneix, a security package designed to help developers and engineers secure their products, saving them time on setting up security across their projects.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
