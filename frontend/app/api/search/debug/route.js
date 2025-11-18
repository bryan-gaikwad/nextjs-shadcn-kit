import { getAllDocuments, buildSearchIndex, resetSearchIndex, testTextExtraction } from '@/lib/search'
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    
    if (action === 'test') {
      const testResult = testTextExtraction()
      return NextResponse.json({ 
        message: 'Text extraction test',
        testResult
      })
    }
    
    if (action === 'reset') {
      resetSearchIndex()
      return NextResponse.json({ message: 'Search index reset' })
    }
    
    if (action === 'rebuild') {
      resetSearchIndex()
      await buildSearchIndex()
      const docs = getAllDocuments()
      return NextResponse.json({ 
        message: 'Search index rebuilt',
        documentCount: docs.length,
        documents: docs.slice(0, 5) // Show first 5 for debugging
      })
    }
    
    // Default: show current documents
    await buildSearchIndex()
    const docs = getAllDocuments()
    
    // Look for documents containing "comprehensive"
    const comprehensiveDocs = docs.filter(doc => 
      doc.title.toLowerCase().includes('comprehensive') ||
      doc.description.toLowerCase().includes('comprehensive') ||
      doc.content.toLowerCase().includes('comprehensive')
    )
    
    return NextResponse.json({
      totalDocuments: docs.length,
      documentsWithComprehensive: comprehensiveDocs.length,
      comprehensiveDocs,
      firstThreeDocs: docs.slice(0, 3)
    })
  } catch (error) {
    console.error('Debug API error:', error)
    return NextResponse.json(
      { error: 'Debug failed', details: error.message },
      { status: 500 }
    )
  }
}
