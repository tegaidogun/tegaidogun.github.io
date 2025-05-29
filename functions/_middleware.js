export const onRequest = async (context) => {
  // Skip webpack cache files
  const url = new URL(context.request.url);
  
  if (url.pathname.includes('/cache/webpack/') || 
      url.pathname.endsWith('.pack')) {
    return new Response('Not found', { status: 404 });
  }
  
  return context.next();
}; 