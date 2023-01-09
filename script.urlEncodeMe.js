
const url = new URL('https://metatagsai.netlify.app/og-image/')

url.searchParams.set('title', 'Introducing Stagetimer’s Fullscreen Timer View')
url.searchParams.set('icon', 'https://stagetimer.io/apple-touch-icon.png')
url.searchParams.set('image', 'https://dsc.cloud/codethink/pexels-pixabay-39396-CN4IIxyR.jpg')
url.searchParams.set('author', 'Liz Hermann')
url.searchParams.set('author-image', 'https://pbs.twimg.com/profile_images/1474102629961711624/Jx-HUZYV_400x400.jpg')
url.searchParams.set('length', '3 min')

console.log({
  plain: url.href,
  encoded: encodeURIComponent(url.href),
})
