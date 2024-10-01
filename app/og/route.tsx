import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'The Teleporter'
  const date = searchParams.get('date') || new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  const geistMonoMedium = await fetch(new URL('../../public/fonts/GeistMono-Medium.ttf', import.meta.url)).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          fontFamily: '"GeistMono"',
          fontSize: '800px',
          fontWeight: 'bold',
        }}
      >
        <div style={{ position: 'absolute', left: '42px', top: '42px', display: 'flex', alignItems: 'center' }}>
          <span style={{ width: '24px', height: '24px', backgroundColor: 'black', borderRadius: '9999px', position: 'relative' }}>
            <span style={{ width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '9999px', position: 'absolute', top: '5px', right: '5px' }} />
          </span>
          <span style={{ marginLeft: '32px', color: 'black', fontSize: '24px' }}>The Teleporter</span>
        </div>
        <div style={{ position: 'absolute', right: '42px', top: '42px', display: 'flex', alignItems: 'center' }}>
          <span style={{ marginLeft: '32px', color: 'black', fontSize: '24px' }}>@theteleporter_</span>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '20px 50px',
          margin: '0 42px',
          maxWidth: '550px',
          width: 'auto',
          textAlign: 'center',
          backgroundColor: 'black',
          color: 'white',
          lineHeight: 1.4,
          borderBottom: '4px solid black',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '48px', fontWeight: 'bold' }}>{title}</span>
            <span style={{ fontSize: '16px', fontWeight: 600, justifyContent: 'flex-end' }}>
              Design Engineer, Crappy Developer
            </span>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '42px',
          left: '42px',
          right: '42px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ color: 'black', fontSize: '24px' }}>
            {date}
          </span>
          <span style={{ color: 'black', fontSize: '24px' }}>
            CEO, Jackwid Morgan, Inc
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'GeistMono',
          data: geistMonoMedium,
          style: 'normal',
          weight: 500,
        },
      ],
    }
  )
}