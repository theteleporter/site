import { NextResponse, type NextRequest } from 'next/server';
import { verifyAccess, type ApiData } from '@vercel/flags';
 
export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get('Authorization'));
  if (!access) return NextResponse.json(null, { status: 401 });
 
  return NextResponse.json<ApiData>({
    definitions: {
      beta: {
        description: 'Controls whether the new features can be visible, tested before they are rolled out to the public',
        origin: ['https://site-nukeboom.vercel.app', 'https://theteleporter.me'],
        options: [
          { value: false, label: 'Off' },
          { value: true, label: 'On' },
        ],
      },
    },
  });
}
