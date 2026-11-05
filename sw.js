const CACHE='fitcheck-pro-wife-v3';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('fitcheck-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
const req=event.request;
if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
const isPage=req.mode==='navigate'||/\/index\.html$/.test(new URL(req.url).pathname);
if(isPage){event.respondWith(fetch(req).then(res=>{if(res.ok)caches.open(CACHE).then(c=>c.put(req,res.clone()));return res;}).catch(()=>caches.match(req)));return;}
event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{if(res.ok)caches.open(CACHE).then(c=>c.put(req,res.clone()));return res;})));
});
