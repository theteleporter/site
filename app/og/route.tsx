import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || 'The Teleporter'
  const datePublished = url.searchParams.get('date') || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

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
          backgroundColor: '#000000',
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
            width="60"
            height="60"
            viewBox="0 0 360.24 360.24"
            fill="#FFFFFF"
          >
            <path d="M33.43,110.7c7.57-18.15,18.13-33.87,31.67-47.16,13.54-13.27,29.48-23.51,47.81-30.69,18.33-7.18,38.11-10.77,59.36-10.77s41.37,3.59,59.56,10.77c18.19,7.18,34.06,17.42,47.61,30.69,13.55,13.28,24.04,29,31.48,47.16,7.43,18.16,11.15,38.21,11.15,60.16s-3.65,42.14-10.96,60.57c-7.31,18.43-17.67,34.42-31.08,47.97-13.41,13.55-29.28,24.05-47.61,31.5s-38.38,11.18-60.16,11.18-42.23-3.73-60.56-11.18c-18.33-7.45-34.2-17.95-47.61-31.5-13.42-13.55-23.77-29.54-31.08-47.97-7.31-18.43-10.96-38.62-10.96-60.57s3.78-42,11.35-60.16ZM217.66,119.14c2.94,5.35,7.09,9.54,12.45,12.58,5.35,3.04,11.63,4.56,18.85,4.56s13.32-1.52,18.67-4.56c5.35-3.04,9.5-7.23,12.45-12.58,2.94-5.34,4.42-11.51,4.42-18.49s-1.44-13.14-4.33-18.49c-2.89-5.34-6.98-9.54-12.27-12.58-5.29-3.04-11.61-4.56-18.94-4.56s-13.5,1.52-18.85,4.56c-5.35,3.04-9.5,7.23-12.45,12.58-2.95,5.35-4.42,11.51-4.42,18.49s1.47,13.14,4.42,18.49Z" />
          </svg>
          <span
            style={{
              marginLeft: '16px',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#FFFFFF',
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
            flexDirection: 'row',
            alignItems: 'between',
            marginTop: '20px',
          }}
        >
          <span
            style={{
              fontSize: '24px',
              color: '#E5E7EB',
              marginBottom: '10px',
            }}
          >
            {datePublished}
          </span>
          <span
            style={{
              fontSize: '24px',
              color: '#FFFFFF',
            }}
          >
            @theteleporter_
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