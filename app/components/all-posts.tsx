import { Link } from 'next-view-transitions'

export function AllPosts(){
return (
 <Link
 className=''
            style={{ viewTransitionName: 'all-posts-button' }}
 href='/blog'
>
        All posts
      </Link>
)
}