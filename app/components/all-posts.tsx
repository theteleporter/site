import { Link } from 'next-view-transitions'

export function AllPosts(){
return (
 <Link
 className='rounded-full px-2 py-1 bg-zinc-900 hover:bg-zinc-800 border-stone-700 hover:border-none border text-sm transition-all duration-700 ease-out'
            style={{ viewTransitionName: 'nav-blog' }}
 href='/blog'
>
        All posts
      </Link>
)
}