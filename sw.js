/**
 * Service worker
 * @author Nonato Dias
 * @version 1.0
 */


var CACHE_VERSION = 1;
var CACHE_NAME = 'mdwc-static-v'+CACHE_VERSION;
var OFFLINE_URL = '';

//dsd
var urlsToCache = [
    'libs/jquery/jquery-3.2.1.min.js'
]

self.addEventListener('install', function(event) {
    //self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('mdwc-') && cacheName != CACHE_NAME;
                
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {

    //Evento somente para mesma origem; Skip cross-origin requests
    //Evento com arquivos estáticos
    if (event.request.url.startsWith(self.location.origin) && event.request.url.indexOf("/ws-portal/") === -1) {
        if( !(event.request.mode === "no-cors" && event.request.cache === "only-if-cached")){
                event.respondWith(
                caches.match(event.request).then(function(response) {
                    return response || fetch(event.request).then(function(fetch_resp){
                        //console.log(fetch_resp.url);
                        return fetch_resp;
                    });
                })
            );
        }
    }
});

self.addEventListener('message', function(event) {
    if (event.data.actionsw === 'SKIPWAITING') {
        self.skipWaiting().then(function(t) {

            console.log("pulou a atualizacao", t);
        });
    }
});