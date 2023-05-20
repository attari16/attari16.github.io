'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a3ff1fe45ce4ad0798aa9584d9095785",
"assets/AssetManifest.json": "1958603c5067683150e30771136581cd",
"assets/assets/font/HelveticaNeue%2520Bold.ttf": "7f281199258d96e249a7fce4101006b9",
"assets/assets/font/HelveticaNeue%2520Thin.ttf": "78c28465643a20597ce65eee037a7675",
"assets/assets/font/SFProDisplay-Black.ttf": "295be9fb41e124fbc4dd1392cccaaf6d",
"assets/assets/font/SFProDisplay-Bold.ttf": "368636f1b6e330a4806185cdf6bb44bc",
"assets/assets/font/SFProDisplay-Light.ttf": "eebf2894b069d9cb93a29dab12aa31f5",
"assets/assets/font/SFProDisplay-Regular.ttf": "6987bcc482500f459516dc0342836ee5",
"assets/assets/ico/activated-pro.png": "2b5a5f283dad351c7876f30d0a3a387a",
"assets/assets/ico/alert.png": "796e8d49e6dd6c2d653a74dd74819aad",
"assets/assets/ico/bot.png": "6aecd415502fb4fe64348c1183bb3190",
"assets/assets/ico/diamond-colored.png": "db24ab4c777ca3c1f9bde1447a80ba99",
"assets/assets/ico/diamond-outlined.png": "c0cdf558e9d511836b34dc5542955e01",
"assets/assets/ico/feedback.png": "7037cbf56e87e1de7e0e52680086a660",
"assets/assets/ico/filter.png": "4e9a41bcf7c72ba0c4e779cd2001f16f",
"assets/assets/ico/instagram.png": "bf68e170b27f59dd78efbf313f3cae87",
"assets/assets/ico/logout.png": "f8213ac05e28b2bd04ef79e71ad874a1",
"assets/assets/ico/octovoice.png": "3c3f7cd2a7db1b1e17eb91b913fa1d66",
"assets/assets/ico/one-tick.png": "b6fa929ad002308d875fa231b8d176cb",
"assets/assets/ico/question.png": "93738b4772da785cb0d701cf7ab994cf",
"assets/assets/ico/rate.png": "ea489be8b29c0c1b1e8ad8f57a7d187c",
"assets/assets/ico/share.png": "7982cffcbcf84046448e7dfe6d4e6e2d",
"assets/assets/ico/sound.png": "5a38134bb6ae87f3fe072cff06dc389e",
"assets/assets/ico/star.png": "8313b45678a3f7baa49a7fa2d26409f8",
"assets/assets/ico/telegram.png": "0f399b7a54f2cdf4867636f35ee012ee",
"assets/assets/ico/two-tick.png": "d2ab6078c3bcadb9142018c6e71831ae",
"assets/assets/ico/window-category.png": "b5e6ae75d956a6acd988dfd06ac923d6",
"assets/assets/imgs/apple.png": "7336273e959db4ec50c2ddfd65e08fdb",
"assets/assets/imgs/bot.png": "2395c676accaec87e7c310a4a9e65d17",
"assets/assets/imgs/bot_colored.png": "2bd534416b30cfbef77a8795900caf5b",
"assets/assets/imgs/bot_outlined.png": "a53083ff42e4f02582cbe8043ca856a9",
"assets/assets/imgs/chat.png": "7ecfd3f1d4e8d8dc4fd42f43ad9c4407",
"assets/assets/imgs/chatgpt.png": "e81468c56a7080c480342faa780c303f",
"assets/assets/imgs/chat_outlined.png": "5791189056cb3c4f966f37b19238c17a",
"assets/assets/imgs/gem.png": "a28bc868d655d0b28ece4b5b8d8a7ad8",
"assets/assets/imgs/google.png": "e699f3f7771fd0f7e59d0a2012b4343b",
"assets/assets/imgs/history.png": "1783534c2361ff1a031b464f6b3b6bc6",
"assets/assets/imgs/image-3.png": "740b20ab34b1f4822e245cd279a0fcb4",
"assets/assets/imgs/microphone-black-shape.png": "f11c585e2a4f3235de9270e0a2a37016",
"assets/assets/imgs/octovoice.png": "635c7410b54d14505e8a05ce3f1012a5",
"assets/assets/imgs/OpenAI.png": "2ca859669f610c007d9e2cb1e589d975",
"assets/assets/imgs/setting.png": "02d0afd3b2c90bbcd6dcc9760d1850c4",
"assets/assets/imgs/setting_outlined.png": "76bd9d2d797ae341fcd37901c5e774e5",
"assets/assets/imgs/user.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/imgs/user_outlined.png": "b8982e196d7c86f12143ffa41d2b33a8",
"assets/assets/lot/no-connection.json": "5e63f1271475d4f71efacd0745fb4644",
"assets/FontManifest.json": "0b79ddda1682a34931938bcb3eaf4a42",
"assets/fonts/MaterialIcons-Regular.otf": "3d4f71e4aed65e49b6b8a6bb655ede93",
"assets/NOTICES": "1adf2b324da3a48d43410e96841732f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "ab0b136155c2ffe6e403f119d1756fb7",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2fbe3f73c169a762ab4e376635a496be",
"/": "2fbe3f73c169a762ab4e376635a496be",
"main.dart.js": "941596ff9ba6dce74f39101634e31160",
"manifest.json": "bb9d54a85a66873974ece6ec5e238f86",
"version.json": "47b2ab170cb4dfbfd7b271ce5b878907"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
