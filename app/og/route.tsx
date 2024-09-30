import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'The Teleporter'
  const subtitle = searchParams.get('subtitle') || 'Exploring the frontiers of technology'

  const interRegular = await fetch(new URL('../../public/fonts/Inter-Regular.ttf', import.meta.url)).then((res) =>
    res.arrayBuffer()
  )
  const interBold = await fetch(new URL('../../public/fonts/Inter-Bold.ttf', import.meta.url)).then((res) =>
    res.arrayBuffer()
  )

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          backgroundColor: '#1F2937',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #374151 2%, transparent 0%), radial-gradient(circle at 75px 75px, #374151 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          padding: '40px 50px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 'auto',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
            <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
            <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
          </svg>
          <span
            style={{
              marginLeft: '10px',
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#FFFFFF',
            }}
          >
            The Teleporter
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginBottom: '20px',
              maxWidth: '800px',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: '28px',
              color: '#9CA3AF',
              maxWidth: '800px',
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Inter',
          data: interBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}