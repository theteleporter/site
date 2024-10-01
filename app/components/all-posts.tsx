import { Link } from 'next/link'

export function AllPosts(){
return (
 <Link
 className='rounded-full px-2 py-1 bg-zinc-900 hover:bg-zinc-800 border-stone-700 hover:border-none border text-sm transition-all duration-700 ease-out'
            style={{ viewTransitionName: 'all-posts-button' }}
 href='/blog'
>
        All posts
      </Link>
)
}