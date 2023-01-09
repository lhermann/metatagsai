const url = new URL('https://metatagsai.netlify.app/og-image/')
url.searchParams.set('title', 'Introducing Stagetimer’s Fullscreen Timer View')
url.searchParams.set('icon', 'https://stagetimer.io/apple-touch-icon.png')
console.log({
  plain: url.href,
  encoded: encodeURIComponent(url.href),
})
