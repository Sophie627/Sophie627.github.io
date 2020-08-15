'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9bd9d60e9032fe7df9ff4571001636a1",
".git/config": "9ef3de23e7d3a1cce4943d4bddb5fb7f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "8d27d167240af11fbd95982af0d5e985",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e9a97f344ddabe25fd38c5269aec30e9",
".git/logs/refs/heads/master": "e9a97f344ddabe25fd38c5269aec30e9",
".git/logs/refs/remotes/origin/master": "381578c1e13b77cd63add6743eace05a",
".git/objects/07/2a038fdfc19c09b8344257a86ba4421d6bd187": "b6447d03ac88e1207ebc38405f77c6d2",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/f7a1387e0ae01b14f28e93bbc69cccba80392a": "5c786f4caa029a0b3b2ed44ce9d3cfda",
".git/objects/24/dbdf64e144442ad48a1c94d2b228bd8c4c9b57": "f7308eb9c6caf728dba8263737e01adc",
".git/objects/26/4778a7586feb134aee335546d20f813ac8c61e": "57421fd10e0574d773fefb3f01c60556",
".git/objects/27/d4138494e58cce286edb9fd59ad9d086bb4309": "9ec72eb3494df17246343b967521eee1",
".git/objects/29/3e06ddf4fb4154b9abb18c1ebd70ad68d4f3c6": "1d7e5f0887fdd1fd7cdb9701f1b65d07",
".git/objects/41/baf350b8f8785bcf59970b1755f9f5a5efd7f6": "07f6c9ad994407dc5e96140bd315a1d7",
".git/objects/4a/aa2d5c585645074d3415367405766b30d44f05": "66214c5d08d16df806aaf6b6b9267b49",
".git/objects/51/06cafa960f7ffc706939d22a0eeeaa423912a7": "aef2c946baff6ec3a9c68373cdaa3422",
".git/objects/5b/d95a0e119eb5950e2dad0879d5dac8d02d246e": "a0c74926b18feaf1cf4f9202d33bb6f1",
".git/objects/5b/f75b30078336cd5b5164ef11b6f66549af5c29": "2dbc3c094ddffe24cc7fa81371a89227",
".git/objects/74/f711da12fdb8540039030dc1164e941409730c": "993b15b8fad1ae570a47bbd88b83a844",
".git/objects/76/0bda36b12353eab2b86d2ee5369050ca2c25ec": "5765c4661586aec2d1251a77032ede39",
".git/objects/7a/26b35ac68bae4bdc9fd45f0a98f59329a9a667": "649745ea2b0f562617d3cb618b5dc106",
".git/objects/7b/526d39e0199c02bdbdb66ceed196e6d240c70d": "bbaf19ee89cff3aef440f011dcd02589",
".git/objects/80/676418cecf6a48963c308b49cedc09bbf40f5c": "d3aabcd3285a983eb7363dd99ba095e1",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/664269cc757b0f5173a1195cb6dc12ddc5526c": "603f109e5386c8db5ecd0c747d645dc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/ee625f5a7ae9b9cad79396925c106e59226017": "57eb61a0452aba8db79bc8a7ce3bc8b9",
".git/objects/93/af315167760206e7537f4230e33abb50a7e5dc": "9f4b9cc8dc0bb82f95ce40ec52f7484d",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/fda9e9dd7293c814917a267a347911c9ea6d6f": "cfd99599b231b16be04e38fa3dd28874",
".git/objects/9b/6290c29e4b32f0a3d29e86b8e2c2ed9f203f8f": "bf1d696354b6d3dc844eeab4a479869b",
".git/objects/a0/5c157d4d9a294bf49ecc76b8503428dd7b1d45": "27048e475124cdc04daaad5bab2a766b",
".git/objects/a4/627b7207121803daf7e50f1714c285e6201d20": "f5ec635cac3e34020516e3004f47b0e2",
".git/objects/aa/d20e673cc7925d8050125bc375623bb597b2d9": "d34c6c662d3d5e23c3812bfe922196e9",
".git/objects/b0/4be688da32bf9959f3760655d42ed34930ec86": "8bb5818ea22ee021e16f8009ffc13762",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c8/fef20c8fd36fee3734548353d3c88a536e64cd": "ef4e8013d37ce7345126927ac75b70d5",
".git/objects/cd/eb894d93e0dfe68d18acc0cb9a72f6322eed4a": "54a061b604fccbdec2eadf85cbf347f2",
".git/objects/d0/a5912947ceb27505c2661b95b18352688a4b73": "5c7526ce1c2c2423ec7c6459cc90b530",
".git/objects/d4/bae532ef2485b12a1493a338c20b1ce09f8987": "9457689f7e47da6e74f503c6420d0ab2",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e2/7b8fb7e26c02fe22d76c357729b650b800c043": "c45a02e96d15f92f98155d8f3499be7a",
".git/objects/e7/7d7e9e486557094a3dd93d6175c2f6552d7d4e": "b37375448e42ee78e1c7d65a4252b57c",
".git/objects/e8/0d1b54060afb5f477830bcc70d4cffa1be0aa6": "43400bc2703608a7e2966924b0ba9692",
".git/objects/f3/c20ebf695effd3297a4d9bcdd06404b9470272": "caf8bfaa31afc960d93627a1e24424dc",
".git/objects/f4/5bea45ec9f7275016c00944779261c973cb826": "7e48e8e7552b5caacd1a96b6b69fdc21",
".git/objects/f6/90a181039f38c23658840f67046bb753f01376": "da3f75e3f7ae6b67bff3a6a35529b510",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fe/d8800b8431f9c7714ea16fec848550d20af3ff": "1ae30c96bea01761d3992bf254dbaeb3",
".git/refs/heads/master": "fb50d9ab9195348813551ac51c28b1c9",
".git/refs/remotes/origin/master": "fb50d9ab9195348813551ac51c28b1c9",
"assets/AssetManifest.json": "c12b4e8a35ce459651a5b32bd877a1a2",
"assets/assets/images/logo.png": "76f29bd0a98bb02bddc3149b579f4240",
"assets/assets/images/template_sample.png": "b33cae3480846b67fe25ea035b075c1a",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "53597e0b7f3e4bbe237939e3a037493c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "48d7ac7a9a7fd9edc1481314742a9cbc",
"/": "48d7ac7a9a7fd9edc1481314742a9cbc",
"main.dart.js": "de7ee37564fb52c570d85d57b57f099d",
"manifest.json": "7dbcef568e591d9d7db89d38ae02f8fa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
