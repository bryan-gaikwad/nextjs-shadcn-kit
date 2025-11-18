import { searchDocuments } from '@/lib/search'
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    
    if (!query || query.trim().length === 0) {
      return NextResponse.json({ results: [] })
    }
    
    // Decode and clean the query
    const cleanQuery = decodeURIComponent(query).trim()
    
    if (cleanQuery.length < 2) {
      return NextResponse.json({ results: [] })
    }
    
    const results = await searchDocuments(cleanQuery)
    
    return NextResponse.json({ results })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json(
      { error: 'Search failed', results: [] },
      { status: 500 }
    )
  }
}
