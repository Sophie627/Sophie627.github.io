'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "518eec612023d42d8c23821550539329",
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
".git/index": "b13b20faf00b55981062d3d9c970cc50",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "772937abac63389468ddff1ea98396aa",
".git/logs/refs/heads/master": "772937abac63389468ddff1ea98396aa",
".git/logs/refs/remotes/origin/master": "d6d129ade6d145aa81f26582df40d195",
".git/objects/01/88d2b392cda39e3251b52c25542a54b1247324": "b42854e9dddc2ee84a0d6486f8eef0a3",
".git/objects/02/fa01cdc7d759fb593d18c3cd31769d764ad15a": "e97e061c60698b14d16e05ad8036503e",
".git/objects/03/62c0e76a9f0348c3ee5e8c78643a0500025b19": "82bb6d71d2998456c1e0238622d29e5f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/c21bc95bcae12874dd233540dc29addc4b1573": "82e7580eb4d7fd19bb92dfc4fab914ca",
".git/objects/07/2a038fdfc19c09b8344257a86ba4421d6bd187": "b6447d03ac88e1207ebc38405f77c6d2",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/874a5376cfd3ec286fbc31116b008c8ffa45a5": "3c4527a0cffed8a271d6622df355f215",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/65c32419db46c487da053e01c06e8bd0c3dff8": "db4d68333b453a86d1cececc34464901",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/19/53aa3f1f4fcf4676f09c5e221a1c2b407bee98": "3ba462859d1ff8d64f2ba2e32f7fa775",
".git/objects/20/15643342f0cebe61f726a03143dafc5e6e2d1b": "8d27c1ad6ceb26507dabaad748efab71",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/683a891112c683371efc5a81be2e031f2ddb9c": "351725e1c18415d690998514be271da7",
".git/objects/22/08a6660b6a11b577727e63654cdabb130f670f": "f436cc5602b55cfe87e7ee1390c6e160",
".git/objects/22/f7a1387e0ae01b14f28e93bbc69cccba80392a": "5c786f4caa029a0b3b2ed44ce9d3cfda",
".git/objects/23/d68e6692c12995f3b25975a67a7783cd87f343": "d8a2869c0cfb29dbb3feecd93f3de1f6",
".git/objects/23/e03ce6504b5f42d64768d1efd4d2c40550a425": "19e523cbe5f549a21687bcaab93cf9ef",
".git/objects/24/d60529ff9df5ef79d5e2367eeef61287484bf4": "8a4a8ca7cd02be17e6c03a2bce24801c",
".git/objects/24/dbdf64e144442ad48a1c94d2b228bd8c4c9b57": "f7308eb9c6caf728dba8263737e01adc",
".git/objects/26/4778a7586feb134aee335546d20f813ac8c61e": "57421fd10e0574d773fefb3f01c60556",
".git/objects/27/97670cdb8baa73e6cd052de046f9e342c3f4b6": "96906af579289e7b28ef4e4077b4c09a",
".git/objects/27/d4138494e58cce286edb9fd59ad9d086bb4309": "9ec72eb3494df17246343b967521eee1",
".git/objects/29/3e06ddf4fb4154b9abb18c1ebd70ad68d4f3c6": "1d7e5f0887fdd1fd7cdb9701f1b65d07",
".git/objects/2a/845963179344a7a93a38c13194ff49074018dd": "134e2e66dc7702d0cf2f19f4ffb3ee8b",
".git/objects/2e/31835d6232cb9b4a5a4e5ab9c1b8f4930a6770": "4658b57a5f07ea0653c243b66266f7f0",
".git/objects/30/9cc82b22a5a1a46332589ad60a6bbcff8d1109": "015b8555c73c5f38e0a23d3084bf039f",
".git/objects/30/a75d823d22a8ddf960dda70eac5e800b68e1aa": "5fb1ed1793fc380757ad6f4c77ea2e1d",
".git/objects/32/eebbca30420b7596f2609a424e2905867e9f39": "fc05ce88470c6c38a60bd129d5203b9e",
".git/objects/36/dcff88d2ca66ac215796245e013249221106f4": "14e267c6603dcd838a587c0ecda91d1c",
".git/objects/38/57304321a803bafb55f5f76ec67a93036e344a": "d092de4eb6dc13b8dbcdd51081daf170",
".git/objects/39/28626e931ca9e297b012f17c31398451cb012c": "0b4dfd19499c37119c8118361ae56925",
".git/objects/3a/14cb8904bf3d96864ce2d5d3b9875bf66f69f9": "2e8a744527932817ac4d170959d2af8c",
".git/objects/3a/390c122d2250823f817be1f2ce523e1bf397ef": "3703f07d50c02f8b70dc2d1fe7b2a454",
".git/objects/3c/bde7abc9655d47eecff3c5da538c43b026aacf": "aaa777a1ce5a41a62cea41bdfdd12b90",
".git/objects/3d/2b2785080f3bf6e0ad0909c04235a38c68ba73": "f7583d99b50a37b2e66084c845df600e",
".git/objects/3f/413c0a1900c31c60ed2fe477b8791999b1bedb": "ed3fc448adb87e21842baca50a2d6046",
".git/objects/41/06451f5cf6d2ee7e5f0a3383400d624e9c5e56": "bdb7fb811c8b82bc1b30adbfca99802e",
".git/objects/41/baf350b8f8785bcf59970b1755f9f5a5efd7f6": "07f6c9ad994407dc5e96140bd315a1d7",
".git/objects/44/3cd560165d713ea56f1ac3edaf0e6f232c3cf9": "261e16422ef5def0a7df8ab1a6cf0d5c",
".git/objects/45/c0f14722694bc13cbc201cd8f6c84e506b5d87": "58fcabf2763fc2c966aac9744bd37e2f",
".git/objects/4a/aa2d5c585645074d3415367405766b30d44f05": "66214c5d08d16df806aaf6b6b9267b49",
".git/objects/4c/3d97f84cd6945d1126b7f29bb15ea8f259f696": "0dd2f33a135b95a6f4650bb985029e1a",
".git/objects/51/06cafa960f7ffc706939d22a0eeeaa423912a7": "aef2c946baff6ec3a9c68373cdaa3422",
".git/objects/54/e02f5492391485bdcc54392bd6d0b00e393ef4": "666afb9a2852ff7af3dd99e84b24a606",
".git/objects/56/086874ea279f4cda43e97003702d2d17f33d5f": "9836586405b0ab48cfb3d24809a6bce0",
".git/objects/5b/d95a0e119eb5950e2dad0879d5dac8d02d246e": "a0c74926b18feaf1cf4f9202d33bb6f1",
".git/objects/5b/f75b30078336cd5b5164ef11b6f66549af5c29": "2dbc3c094ddffe24cc7fa81371a89227",
".git/objects/60/62849e02102c92cc3c8366661a222b3111c0ca": "86887e7ef33b63678d798e5381378979",
".git/objects/68/ceface3ede0b1384f76474f04c215f8a620ca5": "7a4d83c74a84e24a1ad068a1604a1af1",
".git/objects/69/843b38f5a5582c1b0abb8854977fafd39f5929": "52379f7f193b2a852fb22b18bb147b51",
".git/objects/6f/7fe00a511ab615ed2f3f24aa42a4380635622f": "ae545d4d132a530f954acf5af29e6c85",
".git/objects/70/ee753e954cf60615c5be5611fc8f1cbd037eb2": "e9f323cd89143b0e69b93ed7c654900d",
".git/objects/74/f711da12fdb8540039030dc1164e941409730c": "993b15b8fad1ae570a47bbd88b83a844",
".git/objects/76/0bda36b12353eab2b86d2ee5369050ca2c25ec": "5765c4661586aec2d1251a77032ede39",
".git/objects/7a/26b35ac68bae4bdc9fd45f0a98f59329a9a667": "649745ea2b0f562617d3cb618b5dc106",
".git/objects/7b/526d39e0199c02bdbdb66ceed196e6d240c70d": "bbaf19ee89cff3aef440f011dcd02589",
".git/objects/7e/962cf4553bab64b865fb66b7702d2e7c715353": "95ce661c64a5b7ff9428c610f6614990",
".git/objects/80/676418cecf6a48963c308b49cedc09bbf40f5c": "d3aabcd3285a983eb7363dd99ba095e1",
".git/objects/80/9997f491a347c09f0c64bc16b83bfdce7943f0": "9b157c0bea5aa5398e14c4bb2d91840c",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/26c0345c905363e12e3871e5975d60f98a5930": "672c9fd0c3c4a3188f2b3ada7174194d",
".git/objects/85/53b90fc9d512b603689b30a628824fde4c6797": "44926f4be94db84dc61d427aecc0cfde",
".git/objects/88/664269cc757b0f5173a1195cb6dc12ddc5526c": "603f109e5386c8db5ecd0c747d645dc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/0a188e940fceec4a301cf00030aeda32a88ec0": "43526fb8e79a3a652574d6fb2a99b5fb",
".git/objects/8e/ac28ff08a1e5360d00bbff406912010fed2a02": "f8c7993d17d3ce2417f01cae23b43d20",
".git/objects/8e/fa5140c47c17e777271a4c2f0df21ddac1b68d": "49b60364470257f208ed6f44c0098856",
".git/objects/90/6219bd760ce3ec4caadea4bc642741df2def54": "1076fca765945f17cc362938a3c0532d",
".git/objects/91/b024ddaa0cd7430a02b48e59a2786cabf7367e": "c3b3b78b5e98df18ce10deb57c84ec34",
".git/objects/91/d21a6907b06d3e9867ec6e8273295b0bd343d6": "4dc4f8e16f5d55192af39dbd8e218b3d",
".git/objects/91/ee625f5a7ae9b9cad79396925c106e59226017": "57eb61a0452aba8db79bc8a7ce3bc8b9",
".git/objects/93/af315167760206e7537f4230e33abb50a7e5dc": "9f4b9cc8dc0bb82f95ce40ec52f7484d",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/fda9e9dd7293c814917a267a347911c9ea6d6f": "cfd99599b231b16be04e38fa3dd28874",
".git/objects/97/401fd6a4ebf2aecce23e17c146a1258a2e56be": "199387d5caa1ac8c20834975456f99a1",
".git/objects/98/8a539e2359f478c8736f42db0e75421bcd0b60": "b5951193dc15d6c7c58ef669df865d0b",
".git/objects/9b/6290c29e4b32f0a3d29e86b8e2c2ed9f203f8f": "bf1d696354b6d3dc844eeab4a479869b",
".git/objects/9c/481a4b6f9a0d95455c9d82549cba8e5b3d05a8": "a5fbad788f26cf90f1b01ce137edccc3",
".git/objects/9d/381bac2f3057aaba252e82aab6bebc5b70e1f4": "28fce194724aad39b87840c3a3e9aea2",
".git/objects/9f/83cbfd8d598404c303c4832c74c4652b9cd859": "37d6e571c15724cafa8d6b2fd1162a20",
".git/objects/a0/4330f342c1e381c8f7042e228e1a13fb9518ab": "aa8f5f8c6b3d8053842a0f5a3177d9ac",
".git/objects/a0/5c157d4d9a294bf49ecc76b8503428dd7b1d45": "27048e475124cdc04daaad5bab2a766b",
".git/objects/a1/00c8622042fb574a84ff4d55a073c31a9f76e3": "3e2cb6f439a325b06536b6af3ffa788c",
".git/objects/a4/627b7207121803daf7e50f1714c285e6201d20": "f5ec635cac3e34020516e3004f47b0e2",
".git/objects/a4/82c694829c595b157b16fb6bea99965bfa8644": "7b0cf72f6cb5f32d65ea53b3f05128a6",
".git/objects/a9/3e9e82a67d9828d01dd1eb6cda3d4bfa33c4a8": "a7d02e665b4efcb7a4a8721453aee6b6",
".git/objects/aa/d20e673cc7925d8050125bc375623bb597b2d9": "d34c6c662d3d5e23c3812bfe922196e9",
".git/objects/ac/b9bf781eb9938823326bfe161c5397d4d83d78": "ca12066aceba3ec763e1b4f2bdc3d73b",
".git/objects/b0/4be688da32bf9959f3760655d42ed34930ec86": "8bb5818ea22ee021e16f8009ffc13762",
".git/objects/b0/915eecc56a80421cdf15858cd0fc93ddde7304": "60b0051acabdb2388550d467034ae500",
".git/objects/b2/6525585482860aa69d4a6bd24dd61890523b31": "745c027dc477c3e9fd3685fc25f52acf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c1/2dd640d0ee5515ca2da71870677181f936039c": "8cae53de8d12add54163012043f7533d",
".git/objects/c5/607c592e6bde39c3c553aa77d38e797f7f50d2": "0c9a200449abb3f498d943d32a757760",
".git/objects/c6/cd1ec6d019406e8851333cc2a26fb192ed513d": "c284ace36ba5d973a4b1a132b2a95e19",
".git/objects/c8/fef20c8fd36fee3734548353d3c88a536e64cd": "ef4e8013d37ce7345126927ac75b70d5",
".git/objects/ca/a84d1b58510fa306d66cbdbf43917644e62fa7": "0ed5a96a45273fe582ca8367b5dda821",
".git/objects/cc/537793537efa0bd223b8d24df74ac16f48b864": "8274c7f871e7a374a3bae2eba4b8b22b",
".git/objects/cd/eb894d93e0dfe68d18acc0cb9a72f6322eed4a": "54a061b604fccbdec2eadf85cbf347f2",
".git/objects/d0/a5912947ceb27505c2661b95b18352688a4b73": "5c7526ce1c2c2423ec7c6459cc90b530",
".git/objects/d4/bae532ef2485b12a1493a338c20b1ce09f8987": "9457689f7e47da6e74f503c6420d0ab2",
".git/objects/d7/c078d2f520e07131d8f0ea8f93fdf91b699f58": "ffaa7f7471d762cca4c110de8162f7e8",
".git/objects/d7/e5269b314e78332887d6b2e6b6b6d41481f40c": "28e9b52448a0ade40f4dcb0d9c9a8f77",
".git/objects/d9/dc6c0b215bcb863479c1d549eef7316d9009e5": "676d0898a466ab958f891f18ade931c7",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/dd/b1e739d96a562497ef359acc95d9039c53a146": "560feeeb7461bd4fac530e0615896261",
".git/objects/df/5fd1147796e8f28d2c717a5832e08e6d532c13": "65d7bcfdb69e3081bff46a047d8f0e77",
".git/objects/e2/7b8fb7e26c02fe22d76c357729b650b800c043": "c45a02e96d15f92f98155d8f3499be7a",
".git/objects/e2/88cbd4e199cca45aa44573d88a0df0d626b5c7": "a5321e23af80dcc8cf00ea56865c439d",
".git/objects/e3/1344c1d4e570ed0f953488f2ef86d41b49073e": "515909d6f5ea936fc2f3907418ded0d9",
".git/objects/e3/57a2b01d1cff61561d86391195fa8e4fd03f20": "83e2c3f36ec4fff310051bcb491e6be6",
".git/objects/e4/cadf4ba0dd1012459723bdfe5904bc8e4476f2": "79cf86be723c1fe97e096fe79baca628",
".git/objects/e7/7d7e9e486557094a3dd93d6175c2f6552d7d4e": "b37375448e42ee78e1c7d65a4252b57c",
".git/objects/e8/0d1b54060afb5f477830bcc70d4cffa1be0aa6": "43400bc2703608a7e2966924b0ba9692",
".git/objects/e8/66f6b704828c20956f3cacf53525ce8c28efd1": "f8f1d9dd9ffe99630153d953a1d33e8f",
".git/objects/ef/b972acf9c081447e6139d613531518765d7740": "35b1abbc31ba036b7a0403be68551d1f",
".git/objects/f0/620639645204ac7a73c97e241c6c21eab97e56": "9dc028939318fc95558a7acbf7ecefe3",
".git/objects/f3/c20ebf695effd3297a4d9bcdd06404b9470272": "caf8bfaa31afc960d93627a1e24424dc",
".git/objects/f3/e174715f7a051933098849d65dcfbca54e9694": "592deae776e602d9ef449d3873573118",
".git/objects/f4/5bea45ec9f7275016c00944779261c973cb826": "7e48e8e7552b5caacd1a96b6b69fdc21",
".git/objects/f4/694fefaf5747ffc673d4eb54f1f9254688aa5c": "3328fcd32bb6ca52454734ac02a1d6f4",
".git/objects/f6/90a181039f38c23658840f67046bb753f01376": "da3f75e3f7ae6b67bff3a6a35529b510",
".git/objects/f8/3226b088e56db029731377a1c11007c7ac6764": "cc8511276ed91f1c47b61b770a87ce81",
".git/objects/fb/e615066aebf238d1376d11ab5a43bf5a755192": "9079dac8a06d0f5377fb551958c50cca",
".git/objects/fc/39feb81cbe558c794d476843ab53bfbbaa2179": "e92fda0cafb2cd45f012665f40826711",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fe/d8800b8431f9c7714ea16fec848550d20af3ff": "1ae30c96bea01761d3992bf254dbaeb3",
".git/refs/heads/master": "8a0b7201502d516862a1e433dc5ed300",
".git/refs/remotes/origin/master": "8a0b7201502d516862a1e433dc5ed300",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "53597e0b7f3e4bbe237939e3a037493c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"canvas/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"canvas/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"canvas/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"canvas/assets/images/canvas_image.png": "d47c277442c76cb3d7b59591104fdfaa",
"canvas/assets/images/left.png": "36bc1c3c658714aee7c8039bf9b1b43a",
"canvas/assets/images/logo.png": "120dbbe0770e305c1875f31a5f4277df",
"canvas/assets/images/right.png": "35f0b0e15a1aa1d00b30fadd3db56f3c",
"canvas/assets/images/template.png": "e008db60d0c1bcf9a648a83d1eb658d7",
"canvas/assets/images/template_sample.png": "b33cae3480846b67fe25ea035b075c1a",
"canvas/assets/NOTICES": "53597e0b7f3e4bbe237939e3a037493c",
"canvas/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"canvas/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvas/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"canvas/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"canvas/index.html": "48d7ac7a9a7fd9edc1481314742a9cbc",
"/": "48d7ac7a9a7fd9edc1481314742a9cbc",
"canvas/main.dart.js": "4aed41cbc75473c543999c5ddf706930",
"canvas/manifest.json": "7dbcef568e591d9d7db89d38ae02f8fa",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "48d7ac7a9a7fd9edc1481314742a9cbc",
"main.dart.js": "3d5fe58a7e8e5e20f834fb5df06cef42",
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
