import { Link } from 'next-view-transitions'

function getWorkProjects() {
  return {
    maintaining: [
      {
        slug: 'rage-ui',
        title: 'Rage UI Design System',
        description: 'A comprehensive design system for internal use.',
      },
      {
        slug: 'neix',
        title: 'Neix',
        description: 'An innovative project pushing the boundaries of web security.',
      },
      {
        slug: 'crept-studio',
        title: 'Crept Studio',
        description: 'A streaming service template that enables developers to kick-start their projects.',
      },
    ],
    fails: [
      {
        slug: 'xuneix',
        title: 'Xuneix',
        description: 'A security package for developers that didn\'t quite take off.',
        link: 'https://xuneix.theteleporter.me',
      },
      {
        slug: 'crept-sync',
        title: 'Crept Sync',
        description: 'An ambitious synchronization tool that faced unexpected challenges.',
        link: 'https://sync.crept.studio',
      },
    ],
    archives: [
      {
        slug: 'teleporter-original',
        title: 'The Teleporter Original Website',
        description: 'The first iteration of The Teleporter\'s personal website.',
        link: 'https://og.theteleporter.me',
      },
      {
        slug: 'teleball',
        title: 'Teleball',
        description: 'An experimental 3D ball project.',
        link: 'https://ball.theteleporter.me',
      },
      {
        slug: 'crept-studio-original',
        title: 'Crept Studio Original Website',
        description: 'The initial version of the Crept Studio website template.',
        link: 'https://crept.studio',
      },
    ],
  }
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block ml-1"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function ProjectList({ projects, category }) {
  return (
    <div>
      {projects.map((project) => (
        <div
          key={project.slug}
          className={`flex flex-col space-y-1 mb-4 ${category === 'maintaining' ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
        >
          {category === 'maintaining' ? (
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p 
                className="text-neutral-900 dark:text-neutral-100 tracking-tight"
                style={{ viewTransitionName: `title-${project.slug}` }}
              >
                {project.title}
              </p>
            </div>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 group"
            >
              <p 
                className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline"
                style={{ viewTransitionName: `title-${project.slug}` }}
              >
                {project.title}
                <ExternalLinkIcon />
              </p>
            </a>
          )}
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export function WorkProjects() {
  const { maintaining, fails, archives } = getWorkProjects()

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">Maintaining</h2>
        <ProjectList projects={maintaining} category="maintaining" />
      </div>
      <div>
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">Fails</h2>
        <ProjectList projects={fails} category="fails" />
      </div>
      <div>
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">Archives</h2>
        <ProjectList projects={archives} category="archives" />
      </div>
    </div>
  )
}