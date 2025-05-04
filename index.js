/**
 * 5D Waves Audio Server
 * Simple worker to serve audio files with proper CORS headers
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Handle request
 * @param {Request} request
 * @returns {Response}
 */
async function handleRequest(request) {
  // Get the URL from the request
  const url = new URL(request.url)
  const path = url.pathname
  
  // Set CORS headers for all responses
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  // Handle OPTIONS requests for CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { 
      headers,
      status: 204
    })
  }
  
  // If no specific path, serve the HTML page
  if (path === '/' || path === '') {
    return fetch(new Request(new URL('/index.html', request.url)))
  }
  
  // Handle audio files by adding proper cache control and content type
  if (path.endsWith('.mp3')) {
    headers['Cache-Control'] = 'public, max-age=86400'
    headers['Content-Type'] = 'audio/mpeg'
  }
  
  // Handle JSON files
  if (path.endsWith('.json')) {
    headers['Cache-Control'] = 'public, max-age=3600'
    headers['Content-Type'] = 'application/json'
  }
  
  // Fetch the requested resource from the asset store
  try {
    const response = await fetch(request)
    
    // Create a new response with our headers
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: { ...Object.fromEntries(response.headers), ...headers }
    })
  } catch (err) {
    return new Response('Not Found', { status: 404, headers })
  }
} 