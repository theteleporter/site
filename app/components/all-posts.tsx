import { Link } from 'next-view-transitions'

export function AllPosts(){
return (
 <Link
 className='rounded-full px-2 py-1 bg-[#F7F7F7] hover:bg-[#ECECEC] border-[#6F6F6F] hove:text-white dark:bg-zinc-900 hover:bg-zinc-800 dark:border-stone-700 hover:border-none border text-sm transition-all duration-700 ease-out'
            style={{ viewTransitionName: 'all-posts-button' }}
 href='/blog'
>
        All posts
      </Link>
)
}