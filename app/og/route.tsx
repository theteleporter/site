import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || 'The Teleporter'

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
          backgroundImage: 'radial-gradient(circle at 25px 25px, #374151 2%, transparent 0%), radial-gradient(circle at 75px 75px, #374151 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          padding: '60px',
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
            width="40"
            height="40"
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
              marginLeft: '16px',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#E5E7EB',
            }}
          >
            The Teleporter
          </span>
        </div>
        <h2
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginTop: '20px',
            marginBottom: '20px',
            maxWidth: '900px',
          }}
        >
          {title}
        </h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#60A5FA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '16px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <span
            style={{
              fontSize: '24px',
              color: '#E5E7EB',
            }}
          >
            The Teleporter
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}