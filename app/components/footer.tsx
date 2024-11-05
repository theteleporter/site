import Link from 'next/link'
import { ThemeToggler } from 'app/components/theme-toggle';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm text-sm mt-8 flex flex-row space-x-2 text-neutral-600 md:flex-row md:space-x-2 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all duration-500 ease-out hover:text-neutral-800 dark:hover:text-neutral-100 cursor-pointer footer-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/theteleporter"
            style={{ viewTransitionName: 'footer-github' }}
          >
            <p className="h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all duration-500 ease-out hover:text-neutral-800 dark:hover:text-neutral-100 cursor-pointer footer-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/@theteleporter_"
            style={{ viewTransitionName: 'footer-twitter' }}
          >
            <p className="ml-1 h-7">twitter</p>
          </a>
        </li>
      </ul>
      <div className="flex justify-between mx-auto mt-8 text-neutral-600 dark:text-neutral-300 text-xs">
        <p style={{ viewTransitionName: 'footer-copyright' }}>
          &copy; {new Date().getFullYear()} The Teleporter
        </p>
        {/**<ThemeToggler />**/}
        <Link
          className="flex items-center transition-all duration-500 ease-out hover:text-neutral-800 dark:hover:text-neutral-100 cursor-pointer footer-link"
          href="/rss"
          style={{ viewTransitionName: 'footer-rss' }}
        >
          <p className="ml-2">rss</p>
        </Link>
      </div>
    </footer>
  )
}