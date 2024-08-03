'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "699ea294064567422e9edd41d105be6f",
"assets/AssetManifest.bin.json": "5a7107c8135b01dbf20ad7854589abc0",
"assets/AssetManifest.json": "412c0c28b758575645425abd22fc6118",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/icon/quran.png": "2ab91120c05a2d8ab96181c3baccf474",
"assets/assets/icon/sort.png": "f5fd033c64ac5034c7eb4ca7ac70cce2",
"assets/assets/icons/accounting.jpg": "1f2deff69a2e72339790f2ad858748fa",
"assets/assets/icons/design.jpg": "03c7e3239d88b7e261003d59c2cfd445",
"assets/assets/icons/done.png": "750d48f4b0e0500081e3ba8269764a6b",
"assets/assets/icons/flutter.jpg": "411c444ee98cdcdd27271889df3c4184",
"assets/assets/icons/heart.png": "02df1256643d82d090584b68aefc8fa2",
"assets/assets/icons/heart_outlined.png": "ee6b0d667f5ff46ad537f3fd9d1b49ca",
"assets/assets/icons/laptop.jpg": "b145d226705615cd606d5f62d63cbed1",
"assets/assets/icons/lock.png": "6f778e0a44fad1c3ec3f8a1cdea776bf",
"assets/assets/icons/node.png": "e574769b8ba412b5ebb8ec32f58430ec",
"assets/assets/icons/pause.png": "0c80c090158778215a2bc169bbae50a0",
"assets/assets/icons/photography.jpg": "3bdca35f39a77fd732f222e095f8ab20",
"assets/assets/icons/play.png": "ce4651efd933241f54ec3858a16b7e1b",
"assets/assets/icons/play_next.png": "a03d35b0ff5c20bfe302d68a76ddbd55",
"assets/assets/icons/play_outlined.png": "26aa3c78fce2fdf8512004803edecc50",
"assets/assets/icons/react.jpg": "73c59bcd1b47d91fe4c71decca19363a",
"assets/assets/icons/settings.png": "c98b9135f56eb076eeb995c5b191dfd5",
"assets/assets/icons/settings_outlined.png": "50805a6ec23e0c9fd81c9bfcff40a4c6",
"assets/assets/icons/star.png": "9b16566ce076012da1d126cf1abd9a4d",
"assets/assets/icons/star_outlined.png": "b3bef663a68a16287d4b3a49ae02bed3",
"assets/assets/images/1.jpg": "e465d1244fa6b397710ce4e43b30e423",
"assets/assets/images/calendar.png": "b9d3fe2f8aaf59c9836c78eccc76a8be",
"assets/assets/images/eemail.png": "46f978565a69460059f486e768b638ac",
"assets/assets/images/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/images/finance.png": "82d60bbd58c9fc363043ad7b18c78331",
"assets/assets/images/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/images/graphics.png": "d4b40e47e624b075f3899ca518e14066",
"assets/assets/images/lock.jpg": "41517f0eb826ccf06f20cb94b0cfefba",
"assets/assets/images/mail.png": "1fce717a73b1ebe8f3334033797517f7",
"assets/assets/images/user.png": "e9ace2e2dac30ed544ae393f52a0a0e0",
"assets/assets/images/ux.png": "8d2c3dafd7a94509658d68d9578ba095",
"assets/assets/images/welcome.png": "68c6adefcd334f5fa817d5b8df4c9a33",
"assets/FontManifest.json": "e41512ea30682472bede8ef5eab8c0f6",
"assets/fonts/MaterialIcons-Regular.otf": "145ea9276c59e22801a2e641e6c0bf0b",
"assets/NOTICES": "3232d9bec004053b09bfda04b5baf1f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "4e6e9cb94178bb5bbe82867a529bf1cf",
"canvaskit/canvaskit.wasm": "64cc1c11c34313697f61d40fa90dd69d",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "4a107a709d356e8c98df2d6a1dd3793e",
"canvaskit/chromium/canvaskit.wasm": "b5348b696a8243904761bc52959a4b29",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "ab9b8605641422ec29a99434f3c5e2d5",
"canvaskit/skwasm.wasm": "a57540484eaaf16cabc66dae4959e60d",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d54e22304d6f2f304c3f0ee3716c9641",
"/": "d54e22304d6f2f304c3f0ee3716c9641",
"main.dart.js": "ab58996436be7b646c4e7529bcbfddd9",
"manifest.json": "a77e88e7ddbc1903be945671cbb5a274",
"version.json": "902d21dfe8cb3ca7558ca702d41727de"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
