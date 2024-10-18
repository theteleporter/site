import { redis } from 'app/lib/redis'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const slug = url.searchParams.get('slug')

  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
  }

  const views = await redis.get<number>(`pageviews:${slug}`)
  
  return NextResponse.json({ views: views || 0 })
}