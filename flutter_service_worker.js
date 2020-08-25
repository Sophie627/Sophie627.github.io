'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "18c7c8ab8e2cf274888c2d20aac9df30",
".git/config": "76e1865d61f41fda87a9154f46399053",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bc184f44bc6c2859e58ce4311e0d6b35",
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
".git/index": "f8d5d43425cb62387123fb2914dfe3bd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c2a257141594cfe2f293353ebd9c4e58",
".git/logs/refs/heads/master": "c2a257141594cfe2f293353ebd9c4e58",
".git/logs/refs/remotes/enriched/master": "6ad5c10efb46158db15b796c13027ef1",
".git/logs/refs/remotes/origin/master": "82ae6cf422ca55a51830aeecb6fd234f",
".git/objects/00/357cb9c97408f7904bdc0a73bb937b2a4041e4": "2affc5f764f2b8ab79c72f94c283b42c",
".git/objects/00/4887aa58eead79b31a83d3b83dd9684c943451": "4bc972d262ecd5f2d3aed11df22d02b9",
".git/objects/01/88d2b392cda39e3251b52c25542a54b1247324": "b42854e9dddc2ee84a0d6486f8eef0a3",
".git/objects/02/fa01cdc7d759fb593d18c3cd31769d764ad15a": "e97e061c60698b14d16e05ad8036503e",
".git/objects/03/62c0e76a9f0348c3ee5e8c78643a0500025b19": "82bb6d71d2998456c1e0238622d29e5f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/fbb235ab687bc1bc3365b123d8aaf84f7b0721": "7a8605e56237c7fa9a1614954eceb05e",
".git/objects/04/3e08a1b35b63ac52eaa26659d827ce7d61ed09": "0a15736c1bb206ec016f5999ca93ebf0",
".git/objects/04/504e3dad32d0875a3f7da6ccb3f8d9aabf20be": "abb88680b76e557267b47f688df94d83",
".git/objects/04/8ae8b2988966d84c37df454e4890551e3aa3db": "9ae5aeb134db0a702a555df86b3b2f96",
".git/objects/06/c21bc95bcae12874dd233540dc29addc4b1573": "82e7580eb4d7fd19bb92dfc4fab914ca",
".git/objects/07/2a038fdfc19c09b8344257a86ba4421d6bd187": "b6447d03ac88e1207ebc38405f77c6d2",
".git/objects/09/c74c54564d996fdec56a31d927c4d4ce6644a9": "e5f1960a5f58063511b7bafdad43920a",
".git/objects/0a/f6cffa0d34271c1d984b18a60afc306006520c": "42a27cbb3eb0576d831981f60f6f5f72",
".git/objects/0c/a1f3399e9df6d97fa7455808dafe7009080015": "1b8b305884280234cac30c7aef62fc0b",
".git/objects/0d/791a67d958b7a3943d72bc54a4c9d67175bf02": "c137114680638095b82c80ec78eebc7c",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/d401e6141e30818659b1b0ae9049e87a8a0abe": "28bb2886cc055e4d55a71deae92fa901",
".git/objects/10/b00ac2ab15aaa0faff3365d3d475e68d192f7c": "73613655b216ae2456e94cf5fbcf03ba",
".git/objects/10/dfc727f0b3b2a970286c82df53840c997493f0": "1f3c47413ee40c32b273acace1020b64",
".git/objects/11/0587e39b0403008e8c0754b4872acb1b46a39b": "d562dbe8067b40c19b3db29fd1583656",
".git/objects/11/7c25368a3ddbb315756cfc59737a26973f8cdd": "182cf265fd1d1fda91e26da151a5c9f1",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/13/04b2c17234ca693eba05e20d706cfd2a7a0bf8": "ee67d52dcdbbc9f594116abfdb3ae435",
".git/objects/13/874a5376cfd3ec286fbc31116b008c8ffa45a5": "3c4527a0cffed8a271d6622df355f215",
".git/objects/13/b91a8991f93530cdde69bcbdd10e779300f088": "707611b2d08b970c4c75c9dc28b97aef",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/13/f5cbb32850149e51afd789e3e14259edf21447": "94050f2841aba05021bd7d16e68dbeea",
".git/objects/15/0375c8bcf8e2028d2230658c3f5e65f18cb49a": "ad371da0a6227ff369b87ebdebbd07da",
".git/objects/15/1b6a3ba7dc45a4a5452f7977dc44451060149d": "5374fe319624871f60141a06b0054c90",
".git/objects/15/65c32419db46c487da053e01c06e8bd0c3dff8": "db4d68333b453a86d1cececc34464901",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/16/87e2296256a07eaa7776e2ed98101c6830fa81": "f481759ae0a0c802f9ad6aca4cf86f6b",
".git/objects/19/192cec23aa6aa219172be84610e9fb85befd0c": "61749140a27b43e11bf0a90d0e26ceb6",
".git/objects/19/53aa3f1f4fcf4676f09c5e221a1c2b407bee98": "3ba462859d1ff8d64f2ba2e32f7fa775",
".git/objects/1a/a5fbe8eaf17aebab50f1a395f5c9b6fc740ed2": "004b942f20acc958e6c1a08cf73e55fe",
".git/objects/1c/a8ee247ac46d1f863854a84a8cd5b18319160f": "4b4fa8f7d22c583a99c837364f8c59e6",
".git/objects/1d/240d04e359ced25cb15447729bf98a1e9437dd": "ac63b39a9de0fd0dd161cc6f0b58fd99",
".git/objects/1d/ec1591dc22291a8003482344d6de993f9c733a": "648229dbdab405f5918f529d8fea693f",
".git/objects/1f/d547d771dc1cad38bc315516c54723522ecfb4": "bff95c225d619edf4a9547e190dfab5b",
".git/objects/20/15643342f0cebe61f726a03143dafc5e6e2d1b": "8d27c1ad6ceb26507dabaad748efab71",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/9efee2561413f9db01f0e9441df8372d187ff6": "7a858c27d3bb254091d3df4111b5e9f3",
".git/objects/21/683a891112c683371efc5a81be2e031f2ddb9c": "351725e1c18415d690998514be271da7",
".git/objects/21/d40f6537b739ddd31bfc55668909bc15adc37a": "b5b8c11cc533bd971e88e6b6c11a80bb",
".git/objects/22/08a6660b6a11b577727e63654cdabb130f670f": "f436cc5602b55cfe87e7ee1390c6e160",
".git/objects/22/f7a1387e0ae01b14f28e93bbc69cccba80392a": "5c786f4caa029a0b3b2ed44ce9d3cfda",
".git/objects/23/d68e6692c12995f3b25975a67a7783cd87f343": "d8a2869c0cfb29dbb3feecd93f3de1f6",
".git/objects/23/e03ce6504b5f42d64768d1efd4d2c40550a425": "19e523cbe5f549a21687bcaab93cf9ef",
".git/objects/24/710423d8d395ecedd670b6d5c272630c4ca5f7": "c26a873296c7ce8957967a78e45e78ad",
".git/objects/24/a0e3984001429f23f2679ffe3dae1ce5800976": "f2d54c89c6440fa3bbd9dfadef08fe3f",
".git/objects/24/bfe0e074e16908483045c27656aedd171367aa": "ff5c81551098c3214e9699be9c79ac15",
".git/objects/24/d60529ff9df5ef79d5e2367eeef61287484bf4": "8a4a8ca7cd02be17e6c03a2bce24801c",
".git/objects/24/dbdf64e144442ad48a1c94d2b228bd8c4c9b57": "f7308eb9c6caf728dba8263737e01adc",
".git/objects/25/f48e8f9d27bbb23191cc997746abb68a8a9dbf": "0b2a2566316d17139074d0a9b6fc832c",
".git/objects/26/4778a7586feb134aee335546d20f813ac8c61e": "57421fd10e0574d773fefb3f01c60556",
".git/objects/27/97670cdb8baa73e6cd052de046f9e342c3f4b6": "96906af579289e7b28ef4e4077b4c09a",
".git/objects/27/d4138494e58cce286edb9fd59ad9d086bb4309": "9ec72eb3494df17246343b967521eee1",
".git/objects/28/904cd4fd5d06b07195dc6a27af3ee87ece336b": "97a6164bdf11879d4b8da8567509fbb8",
".git/objects/29/3e06ddf4fb4154b9abb18c1ebd70ad68d4f3c6": "1d7e5f0887fdd1fd7cdb9701f1b65d07",
".git/objects/29/de6afb923f7fcc3262741a80ed9db3a1b42656": "ee8f2de920eea9fb579fd3baea827de9",
".git/objects/2a/845963179344a7a93a38c13194ff49074018dd": "134e2e66dc7702d0cf2f19f4ffb3ee8b",
".git/objects/2a/f8fb8434a09557900d5104eb98e3862357db24": "abffbbf5a83370c064e79ad6a0bbf7d3",
".git/objects/2b/209849404d05132f977015b7ed99771a1638f8": "d71bc5acd4c479bff6ee21fe473f93d7",
".git/objects/2b/33b99c39b1ebb3f1b8a455948d7f4796bbdab3": "6475b862a89cea28045217a9505d554e",
".git/objects/2e/19f7055b04678705ab8c328913efba8f9d1da2": "8823ef5068c2f14fe31f31fdbe8d612b",
".git/objects/2e/31835d6232cb9b4a5a4e5ab9c1b8f4930a6770": "4658b57a5f07ea0653c243b66266f7f0",
".git/objects/2f/854d8bf4d2f89ca8043aab4c991f33ccd7c1b9": "d4451cf1bc02b25b5c62d66057b340d7",
".git/objects/2f/bac9d4f2bd8266fbc9aae6f2592903c2a35816": "77f7997e7ece3f256ef1443011339543",
".git/objects/30/1f0b7957f62d8219b0e5493355281d803ac45c": "b69f33f7b3d2a9f8daf93d4d4396ca83",
".git/objects/30/9cc82b22a5a1a46332589ad60a6bbcff8d1109": "015b8555c73c5f38e0a23d3084bf039f",
".git/objects/30/a75d823d22a8ddf960dda70eac5e800b68e1aa": "5fb1ed1793fc380757ad6f4c77ea2e1d",
".git/objects/32/01e1940ac186ae1032e35c59f9872f84e90de7": "447f48291d4f1b1f4e59650532f46396",
".git/objects/32/eebbca30420b7596f2609a424e2905867e9f39": "fc05ce88470c6c38a60bd129d5203b9e",
".git/objects/34/925cab3ecbd5157d519ea55bab1d8a07dc72bd": "0ec98ee5ee445466a91dd992051e3e69",
".git/objects/35/70b76d5fffb9ae19b99f05d8b37e563b02b5bc": "4ca963c7d777588587c14b3d42902be0",
".git/objects/36/a8b4ea9f7b4aed9d960d3f66e1214c24eb0c70": "50ca4bd60415ad9ee894d5c1df72f72d",
".git/objects/36/dcff88d2ca66ac215796245e013249221106f4": "14e267c6603dcd838a587c0ecda91d1c",
".git/objects/38/57304321a803bafb55f5f76ec67a93036e344a": "d092de4eb6dc13b8dbcdd51081daf170",
".git/objects/38/c137213212fef2cd948e51aae3efabbc4b800a": "653d1aa7d6e8f92018605061d0fafb34",
".git/objects/39/28626e931ca9e297b012f17c31398451cb012c": "0b4dfd19499c37119c8118361ae56925",
".git/objects/39/b3b1474157fc0f1d044d77ae3f56ac4438550f": "172cf42d7a0490ecefcd2d69b6a0452d",
".git/objects/3a/14cb8904bf3d96864ce2d5d3b9875bf66f69f9": "2e8a744527932817ac4d170959d2af8c",
".git/objects/3a/390c122d2250823f817be1f2ce523e1bf397ef": "3703f07d50c02f8b70dc2d1fe7b2a454",
".git/objects/3a/7babf76127e3b535cad331a94d90730f708b29": "ae6f29e710fc36d6784c678458fb4afc",
".git/objects/3b/9374d728631128d3131faf35989dc687c528f4": "8dd7083d58878bb85e0c5490fadf9ca8",
".git/objects/3b/ad74343e1484afb85d742dcdb8d3e64f6ffe1f": "67b0cc450be014ebe523ed43d3b05915",
".git/objects/3b/c48941c158861109ddf6322de6571162592198": "76b76a9ff6acf4b256cf96f6f2bdff32",
".git/objects/3c/00b848309466dc421c27e05262ebcbcda1c00a": "b10da8e1e4f6b0c38151796000a7e7d4",
".git/objects/3c/bde7abc9655d47eecff3c5da538c43b026aacf": "aaa777a1ce5a41a62cea41bdfdd12b90",
".git/objects/3d/2b2785080f3bf6e0ad0909c04235a38c68ba73": "f7583d99b50a37b2e66084c845df600e",
".git/objects/3d/5e42b22ee4d4b2d92b41682b46267da14e2d8c": "f845c8b69fa29f8d9569750c7800b691",
".git/objects/3e/0e416fcf004a6292bfde12ff57c9301a6385a9": "170d2ac44d6d9063a8013a93d839d6f5",
".git/objects/3e/6f824742a0fcb3fb1cb908894aaa14dff03989": "4987d4bb393646278234cdefe7ca7150",
".git/objects/3f/05238b77c5d30db349567a70391a0c1319f469": "2f90828ee4b0cc8afbc7258ade4e3fb4",
".git/objects/3f/413c0a1900c31c60ed2fe477b8791999b1bedb": "ed3fc448adb87e21842baca50a2d6046",
".git/objects/3f/8b9358bde0b4f4653c2e1cdea7993ae87395f7": "44cf7991ddfa122f981b0e2863affe20",
".git/objects/3f/dcda22f2412e060ce17553062a6a62d8c1a519": "d4a9959db266e468d2b57806cf473017",
".git/objects/41/06451f5cf6d2ee7e5f0a3383400d624e9c5e56": "bdb7fb811c8b82bc1b30adbfca99802e",
".git/objects/41/baf350b8f8785bcf59970b1755f9f5a5efd7f6": "07f6c9ad994407dc5e96140bd315a1d7",
".git/objects/42/4bec0f8d1fdaf84a383299d4f83135a0a70e3a": "aa78e1bfde76f5c592c2388020f2e50f",
".git/objects/43/c789c0aa532ece8249dc3712da41a627f9992b": "41339a656e785cf7088ebb774f8f5569",
".git/objects/44/3cd560165d713ea56f1ac3edaf0e6f232c3cf9": "261e16422ef5def0a7df8ab1a6cf0d5c",
".git/objects/44/f5033f1476b161c25234e78c53c4cf581c43e9": "e9977ef0dbee9ae72fe82da8e90015d0",
".git/objects/45/c0f14722694bc13cbc201cd8f6c84e506b5d87": "58fcabf2763fc2c966aac9744bd37e2f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/3749f6f7789b871b896f5ed99bb2d554c3dac6": "002949053d4b90ac446fce9c36990bb3",
".git/objects/47/8c57ce24b324b41a69f53fd9fe443b3aab89db": "a5ba6f19360d9aa0f7062d4cde28dfb2",
".git/objects/49/0e4873f275c405fc94a53c59b74fdaeacd81f8": "7cce6f2e2482318b10f25eef46018c04",
".git/objects/49/6b43e263b67675b9ff72f6164760ea9e8b7bc7": "125fe398777e03e7cfbcf8e5cb399c6a",
".git/objects/49/a3ecaf6c8bdf6b1d2a84680ecaaaccf176163a": "61cbdf71d78ced27582b1178fad8cf42",
".git/objects/4a/aa2d5c585645074d3415367405766b30d44f05": "66214c5d08d16df806aaf6b6b9267b49",
".git/objects/4a/b0b1999a284e2d006126d07f3a8d9761aab64f": "567e860e26a99e6f89cef5afa7fcc26e",
".git/objects/4a/c300b1b22eadccc6845a1e10f9cfbcac6d9765": "16864d9aaf5de196e5f9e32853a03845",
".git/objects/4c/3d97f84cd6945d1126b7f29bb15ea8f259f696": "0dd2f33a135b95a6f4650bb985029e1a",
".git/objects/4d/cd8621ce7e34bad31a583742a96ef64eb11ec7": "0df4269e822f6a6364d9b8739ff706ca",
".git/objects/4e/44671e00f3536a702ce453bc88cdf21950d3db": "63512ed5de829b9b5e6ef6d8eb17f65a",
".git/objects/50/9626ec88611630f13dc8fca26e97de7c465aea": "5d82782c9137c840d4e1d56bdf112482",
".git/objects/51/06cafa960f7ffc706939d22a0eeeaa423912a7": "aef2c946baff6ec3a9c68373cdaa3422",
".git/objects/51/2dd989a88ff0db9fa9644388a75e2a670b4110": "479ceccc23c8918bc98a3dbc877e671b",
".git/objects/51/68217bdc761702f146f17acab1de132b44bbea": "ce69e69038b46cc08f6e71ebc3f1993a",
".git/objects/51/f37860591a90343c1715fb86114952d2a3efd0": "54ea270960bdda70e85d4e8aef5fcdf5",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/52/3e01eb9c511a4d2978ea7936423da9ed3c7ae3": "11d4053ac9a5a79b632aa69cd90f0c96",
".git/objects/52/d598ecd94ae1fef1a998b77ddf9abe49697954": "d3740a763e0da0db1a769ca48136a333",
".git/objects/53/012fdfe5a58a39169888aea4878c5b195558c3": "70f39097f7fcf0be22c8b4c046b0e51d",
".git/objects/54/e02f5492391485bdcc54392bd6d0b00e393ef4": "666afb9a2852ff7af3dd99e84b24a606",
".git/objects/54/e5334640ccc4b8b3dbcf7d218fd63cce221e63": "5c1536c70b6a7eebbf152c3c36b4b420",
".git/objects/56/086874ea279f4cda43e97003702d2d17f33d5f": "9836586405b0ab48cfb3d24809a6bce0",
".git/objects/57/6309243c71d708e5bee4a197a59a5c6dee7bf1": "82e68be16be7e50b0ddf8f377b3f8cf5",
".git/objects/57/d072d5ce5e26c0caa5a6eb438b1d524d37a77a": "618052bc719574bcee805bfa1e1e1bde",
".git/objects/58/8da0fefd1ca1860aeaa8e9243cfa1dfbe1208f": "84eb31277e2e681cc3b2474bad3d1606",
".git/objects/58/8ee8bf9a2714053db71eaae74d51843f047c2e": "d3d2936cca1d458c835785d21e08140e",
".git/objects/5a/6f0219f4740845f727b4ecd284b9f561b04bca": "6435b82f34cb10fc2d32526b9bec01ff",
".git/objects/5b/0c10403d28978c1dfee35430d07e3bf047bd20": "0be7144a79ea61d3dd1afcbf75e46213",
".git/objects/5b/8862c8ab809edf585dc2f7c3b1e235d9710d57": "bfacac9089845b35d3a18b445ad95537",
".git/objects/5b/d95a0e119eb5950e2dad0879d5dac8d02d246e": "a0c74926b18feaf1cf4f9202d33bb6f1",
".git/objects/5b/f75b30078336cd5b5164ef11b6f66549af5c29": "2dbc3c094ddffe24cc7fa81371a89227",
".git/objects/5f/0f30c3556a19527361f5ccab0942c175854d0a": "9006e12662723b33f0f41326b159bfed",
".git/objects/5f/5828ea667c54c72a4a8898aeac85f3c94d61fe": "36700cfabe868ae3e67e2ba7d518fa2b",
".git/objects/5f/5e38147cb414dd8d6b6af73a1ae421a71db1a2": "8c62c4e73c299e4e7d22ab141a541520",
".git/objects/60/62849e02102c92cc3c8366661a222b3111c0ca": "86887e7ef33b63678d798e5381378979",
".git/objects/62/445ac57c5049d1f04f0d01badedc59b1010484": "29b11fb83ce256c09dea79c46405c3c7",
".git/objects/62/c91bb1eae41bbefd72aa23fd45fa075f0c7930": "36db065d3be68c7d7c8d0f2ec79ef52f",
".git/objects/63/cfd5c5f8a5392e4efbf5e6ca450afcb66fb613": "f596d128a607829a8b2a44613d22b079",
".git/objects/63/eeb766feb5029b3d22a89c8321c32e82e6e118": "5c6649c4940d96868d5404e74e07ced4",
".git/objects/64/50b3dcd48f9089faa228d14f58ef8cb59763fa": "20d41fbdcfd81a6878523779a8be234e",
".git/objects/64/e55c80868c38eb80d2bfb312b0a56d5488d23d": "c4f626fa751483878487b9e2631ee49e",
".git/objects/65/d4635cfa04850d131043a8e16a650e4249e8f6": "03201e37a68f3acf71af2e5bb1136e26",
".git/objects/66/1457897a0aed1fe5d22144086fe8987b1f93ad": "7468ca6c5ca5ca650db91101dceaad54",
".git/objects/66/be0967f011b1b6eabe73e90b4d3a13ef8fb162": "a21d46b4e4dcd097954e4e8b013c015f",
".git/objects/68/ceface3ede0b1384f76474f04c215f8a620ca5": "7a4d83c74a84e24a1ad068a1604a1af1",
".git/objects/69/843b38f5a5582c1b0abb8854977fafd39f5929": "52379f7f193b2a852fb22b18bb147b51",
".git/objects/6c/d0c66f4157ec9d1960be12d92627db740e2109": "777ace4bd26fca00a6884ba551b067b0",
".git/objects/6e/c34748552035ae757e986b53534de318f9aa6d": "5368d1bcb2d06949d7f04e67997aa92d",
".git/objects/6f/7fe00a511ab615ed2f3f24aa42a4380635622f": "ae545d4d132a530f954acf5af29e6c85",
".git/objects/70/ee753e954cf60615c5be5611fc8f1cbd037eb2": "e9f323cd89143b0e69b93ed7c654900d",
".git/objects/73/88e6c4d549a6d4dc4027179b38faabf9b3fca7": "53f386e524779329ac3b3920b8268124",
".git/objects/73/973e00177abad6fce34c03d07620d98535624d": "cacdc2fe2ed0a0a43b90d9001f587659",
".git/objects/73/cbc7cb0a716b206f1933842ea56c133e985221": "664c507562a5fdc8a5d9374b3da28473",
".git/objects/74/f711da12fdb8540039030dc1164e941409730c": "993b15b8fad1ae570a47bbd88b83a844",
".git/objects/75/7f5b7c7003bd91ab4923fb91d5394d62ade90e": "b7f148ae75c1bf604cb9941b4a09ffee",
".git/objects/75/f0bb901bd53bd746aa970705e584e89a1429e6": "fab20d5adfe4f0d91ada78351c8d6090",
".git/objects/76/0bda36b12353eab2b86d2ee5369050ca2c25ec": "5765c4661586aec2d1251a77032ede39",
".git/objects/76/a5afedaf51923315745cc0be7a5207ea2c061f": "342e5b7725c9f1a9483222eedd5c63ea",
".git/objects/77/cf0d3dd792ebbe595d0552dfc9446cb36cbf01": "12780e5957b1d80c3c37daa16e578e9c",
".git/objects/7a/26b35ac68bae4bdc9fd45f0a98f59329a9a667": "649745ea2b0f562617d3cb618b5dc106",
".git/objects/7b/24e62c56cf74dacbf8212b96e9cb46955abdfb": "0da6907d0ac4dfa47ea66b401a15a977",
".git/objects/7b/526d39e0199c02bdbdb66ceed196e6d240c70d": "bbaf19ee89cff3aef440f011dcd02589",
".git/objects/7e/95f4315dbd694e6eebb567c9acbef3277a976a": "af0e00d4491bd946d2b1365f73ebe6ae",
".git/objects/7e/962cf4553bab64b865fb66b7702d2e7c715353": "95ce661c64a5b7ff9428c610f6614990",
".git/objects/7e/b5f176950e525d09b1d7f7526f16a0814d3eae": "541b980f13658d3eca000e8cd18b642e",
".git/objects/7f/45f1016f57ab89cc54ef76b769b0f39ac42b52": "317dd015871733f3770df88bb664e294",
".git/objects/80/676418cecf6a48963c308b49cedc09bbf40f5c": "d3aabcd3285a983eb7363dd99ba095e1",
".git/objects/80/9997f491a347c09f0c64bc16b83bfdce7943f0": "9b157c0bea5aa5398e14c4bb2d91840c",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/83/6a6e0fd0d1345d5b7224e0f3aa926a6e890352": "998ae015b1675848dd7b055eeaccf0dc",
".git/objects/83/83db32a745e582aaea6916e5cb48a0bfccd2a2": "37a919d92ec43614a7529c1c24ea0010",
".git/objects/84/26c0345c905363e12e3871e5975d60f98a5930": "672c9fd0c3c4a3188f2b3ada7174194d",
".git/objects/84/96a915e4915788152506fe1e7c4879682d1534": "860ad1734b18cd4ef7e9126a0d089d31",
".git/objects/85/53b90fc9d512b603689b30a628824fde4c6797": "44926f4be94db84dc61d427aecc0cfde",
".git/objects/86/a4318b1372430e5c4c106425278f8dce04ee81": "8b79d21fc4640e5eb5d9dc8f8b83689b",
".git/objects/87/4ff54246b2c1d4e0e75525c7c0a9d6d07af91a": "50e1ee76a1c1141bead5d62b64a2869a",
".git/objects/87/79d0a23f6fbde0991743e6bdd924ad74a389ac": "00c38ce2ba66fc18f0340e3d3f52b17e",
".git/objects/87/c20dc77c14255fe3978331994e6bd4446b9ef8": "3828a73abe9dd28d7984ed38cd3a103c",
".git/objects/88/664269cc757b0f5173a1195cb6dc12ddc5526c": "603f109e5386c8db5ecd0c747d645dc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8dd767cdc65bd6594011c8829ea333a21d19d2": "21871def2c4e58df739c9dbfbb38e674",
".git/objects/89/e94ed7d8b23dd1994e373c99ff449612b60b3d": "8f8a387c1845e3b647cd039a79a9145b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/0d62712075a6e0a1e3ba63ce0e1a6f0ed8a096": "b78bfcd4b936e099ca9d02edd9818020",
".git/objects/8c/8addaa1f674f5aff57b7d0018f488d394fae86": "00b84325c84e78a3a30c75c7cb9c35c6",
".git/objects/8d/014f1e0356ec0dffed0b16e08d51255044c8cd": "b61ef313c7bb4511d027fe87a4320617",
".git/objects/8d/0a188e940fceec4a301cf00030aeda32a88ec0": "43526fb8e79a3a652574d6fb2a99b5fb",
".git/objects/8d/d59247d1785b76ed660db519f9f6b2b629379f": "cdb05627f91a291803371af07932af25",
".git/objects/8d/df70228dcc5337a328f5b53e2065798a520eec": "80c9481ffa907340893c57ba4f3488ee",
".git/objects/8e/ac28ff08a1e5360d00bbff406912010fed2a02": "f8c7993d17d3ce2417f01cae23b43d20",
".git/objects/8e/fa5140c47c17e777271a4c2f0df21ddac1b68d": "49b60364470257f208ed6f44c0098856",
".git/objects/8f/34176f0087f6b9b62decdc6749116c063bd850": "586b1ec7ec3d9bac9fc39485096768d7",
".git/objects/90/6219bd760ce3ec4caadea4bc642741df2def54": "1076fca765945f17cc362938a3c0532d",
".git/objects/91/b024ddaa0cd7430a02b48e59a2786cabf7367e": "c3b3b78b5e98df18ce10deb57c84ec34",
".git/objects/91/d21a6907b06d3e9867ec6e8273295b0bd343d6": "4dc4f8e16f5d55192af39dbd8e218b3d",
".git/objects/91/ee625f5a7ae9b9cad79396925c106e59226017": "57eb61a0452aba8db79bc8a7ce3bc8b9",
".git/objects/92/26231d7dc3e0b502c1825bb0b83af618cc889c": "8678ab652692ff2ef153551ab217ae70",
".git/objects/92/ac2278f3416555cc811f625a052617944b1a36": "1a37e952811596f51e34a7c5643ae659",
".git/objects/93/53a9eaae2b67df7410bbcb50388140f3112078": "ca6cd5c0146b748bfefb689f70c8e820",
".git/objects/93/af315167760206e7537f4230e33abb50a7e5dc": "9f4b9cc8dc0bb82f95ce40ec52f7484d",
".git/objects/94/03644d68b002d4e5c1f3e1c3d27a2556f18803": "04a3ae7ae01f90b602b6017d593ba836",
".git/objects/94/c6faf16396e8915a10de6ca045177fc5cdf228": "6c55f21a01fbf32943c50a779118fdd5",
".git/objects/94/fdafa413231e009f9c0446bb3862d9fb014af5": "6772bcea719e9baab52ce5afc88e8608",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/fda9e9dd7293c814917a267a347911c9ea6d6f": "cfd99599b231b16be04e38fa3dd28874",
".git/objects/96/b000974714449d79f79db42091bc96cc61a5ba": "a377bdc68a1893491cd9a01de4ab5362",
".git/objects/97/401fd6a4ebf2aecce23e17c146a1258a2e56be": "199387d5caa1ac8c20834975456f99a1",
".git/objects/97/66774eea78c57edfedcae4033551942d2543dd": "bd10493bc22279036a8b2b62d3353d93",
".git/objects/98/8a539e2359f478c8736f42db0e75421bcd0b60": "b5951193dc15d6c7c58ef669df865d0b",
".git/objects/9a/049eee243675536dbd2815239e346af3d90a8f": "b6f4f2541c2a4f92b1441e29ed8ef2f7",
".git/objects/9a/1d4a7b69449d600223966f89bfe128c13e9585": "4e2f8755d53db6a0b63c00404e47db3d",
".git/objects/9a/6f172b23deec8bb39182a56a148fe2ecf6d847": "d9e96069e3e7c69734e72bde977cccb6",
".git/objects/9a/e2d2b753b2d5691d361d3373ab1cf7997c344e": "7ee256f46a894571c3feb8798846214e",
".git/objects/9b/22681da4f324bb823b42265c98e6309cbfea6a": "91572c53feaa96b8355d3668b0269ae9",
".git/objects/9b/6290c29e4b32f0a3d29e86b8e2c2ed9f203f8f": "bf1d696354b6d3dc844eeab4a479869b",
".git/objects/9c/481a4b6f9a0d95455c9d82549cba8e5b3d05a8": "a5fbad788f26cf90f1b01ce137edccc3",
".git/objects/9c/628f33f4ef78e540a58ec7a8c2e9ab1dd7458c": "421f21bede2d1e9bb477212645b5a0b7",
".git/objects/9d/381bac2f3057aaba252e82aab6bebc5b70e1f4": "28fce194724aad39b87840c3a3e9aea2",
".git/objects/9d/c06878dddaeca5873b86b7d73c38b8c0248047": "2fdc49ce56cf512be61d6eae0ede53dc",
".git/objects/9e/8fcf4cb8f7a6cbb856d14894aebdd182eae617": "f11b4662eef666983504695e87e6d2aa",
".git/objects/9f/83cbfd8d598404c303c4832c74c4652b9cd859": "37d6e571c15724cafa8d6b2fd1162a20",
".git/objects/9f/8c297064adff4a2c21cfc36ecd97bbac5f0c80": "ed4d26d7873a77bcca2ec59a0e756e75",
".git/objects/9f/de7f469310eb9722bfa4242e8958db39d476fc": "8678865f3ea71e5a2611f6973de97705",
".git/objects/a0/4330f342c1e381c8f7042e228e1a13fb9518ab": "aa8f5f8c6b3d8053842a0f5a3177d9ac",
".git/objects/a0/5c157d4d9a294bf49ecc76b8503428dd7b1d45": "27048e475124cdc04daaad5bab2a766b",
".git/objects/a0/6ef1d6586bf3d57eb1aeb9c5265a33d3e82a0f": "dbe3b99932593def9ee675286c3e4113",
".git/objects/a1/00c8622042fb574a84ff4d55a073c31a9f76e3": "3e2cb6f439a325b06536b6af3ffa788c",
".git/objects/a1/235ef41c0aafb23c56178a0653870ac5984187": "86154d316fe4870b6a01c2deb35dd81d",
".git/objects/a1/2fc55b8b2746b8d01e2d14ae744b5a92a7a0b9": "caf66eac6af73278d1a225a027f207d2",
".git/objects/a2/b68a49cc40fe52e3e44f1ed652d95fc2c30667": "ac5b15053ca15ae04072a2015efe7c1b",
".git/objects/a3/51a5f1da4e830854a5a7549349b45fe769f357": "7b04b7f6ff854182031a7c3644fa8c43",
".git/objects/a4/627b7207121803daf7e50f1714c285e6201d20": "f5ec635cac3e34020516e3004f47b0e2",
".git/objects/a4/82c694829c595b157b16fb6bea99965bfa8644": "7b0cf72f6cb5f32d65ea53b3f05128a6",
".git/objects/a5/99077c5824d1cb1fd8ecdc3318f29d10148e5a": "82fb011c94901682c50d372794b2625d",
".git/objects/a5/afa0d4982a99b21490cf5c23e6ea134c5c86f0": "0ac9abf5d60b386cb6b8895398603498",
".git/objects/a8/a9fb797c65e0a16c082b0a0fa54b32987060ff": "852d6b9f6b937c159b410ed52b9e9abb",
".git/objects/a9/3e9e82a67d9828d01dd1eb6cda3d4bfa33c4a8": "a7d02e665b4efcb7a4a8721453aee6b6",
".git/objects/a9/56517b05df33b5350bf5095065ed9dfa364544": "89206d0c94fb13a04bcac1c7ace8569b",
".git/objects/aa/7cfd8e1765e468ef5dd34e24016e1c5bd3795f": "f0c87b860a4c9281f0aa5317b64254fb",
".git/objects/aa/d20e673cc7925d8050125bc375623bb597b2d9": "d34c6c662d3d5e23c3812bfe922196e9",
".git/objects/ac/b9bf781eb9938823326bfe161c5397d4d83d78": "ca12066aceba3ec763e1b4f2bdc3d73b",
".git/objects/ad/ac070475c2b5e2946810b94f06beaf2d7ffa4b": "dcdea85f2145861fe98584625f4b0ea4",
".git/objects/ad/db091e4a1792d0510d0f522106ef8f761f9e79": "35c6bc6f294e0fa95d40f9e7d2577617",
".git/objects/ae/12a8330791dda585de8b196f4efcd81ee5e591": "80c70b744df94dfbdfd0d3be71cfb505",
".git/objects/b0/4be688da32bf9959f3760655d42ed34930ec86": "8bb5818ea22ee021e16f8009ffc13762",
".git/objects/b0/915eecc56a80421cdf15858cd0fc93ddde7304": "60b0051acabdb2388550d467034ae500",
".git/objects/b1/0b3496bb479917dba9bcc2faaa94561f6505e7": "b50690b4d9e619a875d0e1d59fffd70a",
".git/objects/b2/6525585482860aa69d4a6bd24dd61890523b31": "745c027dc477c3e9fd3685fc25f52acf",
".git/objects/b2/c7a39eeb3cd25b83cceebd0b57a67c550b88c1": "042eeab34f141090ed772c505fb5df6b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/89e5976f303e71b3edbc12797d42f668a2e08c": "488e69d5721d48033081eb2e4930145d",
".git/objects/ba/b00ed7f049ab257d9b16025ab7b78b891da29d": "590995df75bc1026c966b565bf917b6d",
".git/objects/bb/59ae6a9672f65ba9093029c7927f357cc2598d": "569fc7fff5178e35e5cb7f283cb7075c",
".git/objects/bb/fcbd1e3ee1d363e8f49c0f5a60f52c3f587f6a": "61e32a9301c43452cfd3679711bbdddc",
".git/objects/be/3f82abd6a43c3f9af0051ca84bba073ec27fcc": "a2b8c278943dbfb1a8b2ca051b4d26c4",
".git/objects/be/b9a7b02b2f760c063bf80b2ebdc567b181da62": "917b68d4a63c1498bbbdea8a8bf8f67d",
".git/objects/bf/151f49dd74c3acf7e90138c32deeebf8de2500": "e4045a47ee24aca25e3828b90a53cd13",
".git/objects/bf/8a860e4147fd464da8a779d88cf4fd5af3e6f2": "2d882c95248a1cc6be19f92d3ee33ab3",
".git/objects/bf/ea01a9033cc25f238d841eb8e33625fc11dbbc": "7732ec2c7ff0f76f5d435e29a7fb4c6f",
".git/objects/c0/0fba40473ca84a5f6722ce60625e8eb32f4554": "f336a524b036d6a2c8fb3b560e211d34",
".git/objects/c0/bd8ccf4d784c94d7798d28ceceadb0e3316f0e": "eb4e3f8749b63c6286b8faed87a80612",
".git/objects/c1/290e314c9861d30a917789c7afaf03512bfcef": "33d328dca68a0137fc0c80ce70ccbb78",
".git/objects/c1/2dd640d0ee5515ca2da71870677181f936039c": "8cae53de8d12add54163012043f7533d",
".git/objects/c1/d4ad80cd6079f9027fd791db343268a3a1e1ab": "c06b9a2ccc548f5d76754c6b8347145a",
".git/objects/c5/607c592e6bde39c3c553aa77d38e797f7f50d2": "0c9a200449abb3f498d943d32a757760",
".git/objects/c6/3800102369bf724d37875ce37de16c303a42cf": "f1d0670503d684f06d8c7b3afb0fa6b2",
".git/objects/c6/cd1ec6d019406e8851333cc2a26fb192ed513d": "c284ace36ba5d973a4b1a132b2a95e19",
".git/objects/c8/4c206803750c16bc69498097538a74f8a1ff93": "99f1d71f6b9592ae6d01147a99b872aa",
".git/objects/c8/fef20c8fd36fee3734548353d3c88a536e64cd": "ef4e8013d37ce7345126927ac75b70d5",
".git/objects/c9/ff6abcfcaef04546f705c8ddf30df086c57af6": "398d61729a46c7be9a2e39a7080ade22",
".git/objects/ca/a84d1b58510fa306d66cbdbf43917644e62fa7": "0ed5a96a45273fe582ca8367b5dda821",
".git/objects/cc/537793537efa0bd223b8d24df74ac16f48b864": "8274c7f871e7a374a3bae2eba4b8b22b",
".git/objects/cc/b0d9a41ae78a5fcf062ef8af5f55026660c671": "1f72895024d402fff3fc71e302c07ed4",
".git/objects/cd/4cbdd1de0610784006846216b51e0bd51c16af": "c0058d5bb65ebe98cd3ba2bbfe6c1aee",
".git/objects/cd/eb894d93e0dfe68d18acc0cb9a72f6322eed4a": "54a061b604fccbdec2eadf85cbf347f2",
".git/objects/cf/bf568e2cc2f9bdc6b4eb21d66440ab0c5f2631": "1aaf2b72944c2f3123edf4c1969d3bc8",
".git/objects/d0/a5912947ceb27505c2661b95b18352688a4b73": "5c7526ce1c2c2423ec7c6459cc90b530",
".git/objects/d1/634e2930a6dc7d2be097493639bfdef0cd2e7e": "afdc8d2582bba63837a5f8a3d57c3dff",
".git/objects/d2/55f5a7a9c32ced0197c153aa663c0223439e32": "92bbe9891b49e290c766db394df4329e",
".git/objects/d3/832b5a5e93f2db8a44103ce6ba8aaa33962885": "0ce8461d343bb53bd939b7cbf4628ab7",
".git/objects/d4/79bbc97541ea0e3fe239c4209beaf0a2406ad7": "f6fdb8057b59c9f97dbb719040b966b5",
".git/objects/d4/bae532ef2485b12a1493a338c20b1ce09f8987": "9457689f7e47da6e74f503c6420d0ab2",
".git/objects/d7/15a919f37866229103602c5d49841077aa147a": "bbc3325f1e35cbef60413f38295d9336",
".git/objects/d7/b16d3784137136a410274d01f6ffa7fd7b169b": "b634222ddc933ea5ecd7244cbe3f3772",
".git/objects/d7/c078d2f520e07131d8f0ea8f93fdf91b699f58": "ffaa7f7471d762cca4c110de8162f7e8",
".git/objects/d7/e5269b314e78332887d6b2e6b6b6d41481f40c": "28e9b52448a0ade40f4dcb0d9c9a8f77",
".git/objects/d8/c818defbcfe4e5cd53ef50415f50fb4cc62910": "4703941ef3b1a1d50c0fe081d2595301",
".git/objects/d9/dc6c0b215bcb863479c1d549eef7316d9009e5": "676d0898a466ab958f891f18ade931c7",
".git/objects/da/1e59c58287eb51d26a190ed2fa5a2f699acc09": "457452ffe591d62d326632281dc12195",
".git/objects/da/2b2bf90a82361cf9297f4204d515787f47eeca": "9b4fbe6f51f6131c679c84fe68fec56c",
".git/objects/da/4d6d4d975bbd1f660781a007c5bae9743ce5ab": "9585d5792314d1b209e463db2c1fc6b6",
".git/objects/da/90935233d17c26096fe0881241abbbf36ff098": "351dd6ee94652f7386a75eeac6bd5794",
".git/objects/da/ab77fb41efed95f7974d51b3ca0653c7244cab": "7fa41212e9bf646a39706bda7cf0782c",
".git/objects/db/cab104058e8070e30c3ec6c0a417d5856f6ee0": "c9097651a01fb3a3062a198d176b7210",
".git/objects/dc/a796d9a266f57205b3f57c2f1665f1fa51a4b5": "0fa4705e53a0c53f4afafd123b635f95",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/dd/b1e739d96a562497ef359acc95d9039c53a146": "560feeeb7461bd4fac530e0615896261",
".git/objects/df/5fd1147796e8f28d2c717a5832e08e6d532c13": "65d7bcfdb69e3081bff46a047d8f0e77",
".git/objects/df/eb66ac94fa18941475d74108ff0b1cfcb761cd": "343882522ee0a6ac19abc58966497fe6",
".git/objects/e0/afd7ae82c6dc458db81a4341d98a8c75fea5c5": "0869bb7c79bc9dc9493102614c5b82f0",
".git/objects/e2/7118000ed3a87b5b7dbcde019c26898a9f522b": "f2c7314aac921890788d7573dcf706bc",
".git/objects/e2/7b8fb7e26c02fe22d76c357729b650b800c043": "c45a02e96d15f92f98155d8f3499be7a",
".git/objects/e2/88cbd4e199cca45aa44573d88a0df0d626b5c7": "a5321e23af80dcc8cf00ea56865c439d",
".git/objects/e3/1344c1d4e570ed0f953488f2ef86d41b49073e": "515909d6f5ea936fc2f3907418ded0d9",
".git/objects/e3/57a2b01d1cff61561d86391195fa8e4fd03f20": "83e2c3f36ec4fff310051bcb491e6be6",
".git/objects/e4/cadf4ba0dd1012459723bdfe5904bc8e4476f2": "79cf86be723c1fe97e096fe79baca628",
".git/objects/e5/72163ea5121d48f278f9c0c8c80ae1c12aa285": "f5198c90ef9510901f2f8acd1f0e9007",
".git/objects/e5/b0aa758c2a6588d3db139a0df88f25f9a839f4": "5c9e60579192f077a7c6be2e50fbeeb2",
".git/objects/e5/db54c03c5442b6ef37da895d43e6134c73bb5d": "3d0241cb6c181b1a3269914736252492",
".git/objects/e6/7b9e96d3ad9e66b1754e99e09585ff38a84da9": "c1b91c459b694b3fe93d7c573e238658",
".git/objects/e7/7d7e9e486557094a3dd93d6175c2f6552d7d4e": "b37375448e42ee78e1c7d65a4252b57c",
".git/objects/e8/052896d58198eacb2329d9382fe3dd6321d46b": "9d085569bc0a48b507fa33e3f98ee649",
".git/objects/e8/0d1b54060afb5f477830bcc70d4cffa1be0aa6": "43400bc2703608a7e2966924b0ba9692",
".git/objects/e8/0fd856a2dc84e80342e696484f8a5bca884c74": "fbdea27e2418258b14d37b687491b419",
".git/objects/e8/5ee963d07bd7a8eef9c972627e0c32447974a3": "84456df5a64753bcea1aa5af9d3ed1fa",
".git/objects/e8/66f6b704828c20956f3cacf53525ce8c28efd1": "f8f1d9dd9ffe99630153d953a1d33e8f",
".git/objects/e9/d6efaa74333a2917848db4606b5ea3d6cca51b": "391c8dc726e1c30e9072a4c16dccec6c",
".git/objects/ea/b6798bbf33853dfb62a616011c6d2dee9e7de8": "046f491bdbe4f05c9e05c945c52c02c8",
".git/objects/ea/d036a6f58db6955461a2d7dd7a569a6eadbdb1": "8f59c083e95143ba3b824f508ab09c83",
".git/objects/ee/06c4c6bfb66681d24d52ec470f58fc0d92eee5": "125c5de2170423484a8ca65825a7320c",
".git/objects/ef/b972acf9c081447e6139d613531518765d7740": "35b1abbc31ba036b7a0403be68551d1f",
".git/objects/ef/c61b0f98ddf10ec5d7cf153bad51ef6a0df3fd": "4bb35007a400acd53be4989270126a6c",
".git/objects/f0/620639645204ac7a73c97e241c6c21eab97e56": "9dc028939318fc95558a7acbf7ecefe3",
".git/objects/f0/db7d37b54fa57b23f7b98815d1e3c02884d17e": "f7c105c36849c9c409600949c9391d62",
".git/objects/f1/310579cdca0b1aa4a88e8f01e9cde7a972ce46": "9040d342225818d9e41e7fcde415b983",
".git/objects/f1/f2b75c2cd0617338309367296d5d0a0c284c7a": "ca3d23e7d5295e919f51c978d4b9463d",
".git/objects/f2/5a9e2bf2dad224126cb40cff7d0a36f868c240": "ddb1cf0ee7b06b72eefb5436b2e4595a",
".git/objects/f2/e0a739d272ed67a8a47ea6191518d78d9db83f": "ffeccca2d481982c7a85342c5a815c4b",
".git/objects/f3/c20ebf695effd3297a4d9bcdd06404b9470272": "caf8bfaa31afc960d93627a1e24424dc",
".git/objects/f3/c35f78fd3ce166392f5fb8589504a8f304bca5": "fb1da78691456d262d974e203e5688b2",
".git/objects/f3/e174715f7a051933098849d65dcfbca54e9694": "592deae776e602d9ef449d3873573118",
".git/objects/f4/546e27c06868eedd0b0fec2651a262bc791bbb": "17868100cbff2f4dbf548a3f4b99fd4e",
".git/objects/f4/5bea45ec9f7275016c00944779261c973cb826": "7e48e8e7552b5caacd1a96b6b69fdc21",
".git/objects/f4/694fefaf5747ffc673d4eb54f1f9254688aa5c": "3328fcd32bb6ca52454734ac02a1d6f4",
".git/objects/f5/b39335811acc99c9369c95a6b63ef7434e6cd9": "6939470d9df5f06aa6d578c7151ade3c",
".git/objects/f5/e0287eea348a7f38e84df0a962ede6358f6f22": "7d3e2e99be1db371f41add8ace99365d",
".git/objects/f6/4a7a6f025239552670ab3ce17f8f0839698e6e": "9d7b44b416dba5d28d68094f2e47e759",
".git/objects/f6/90a181039f38c23658840f67046bb753f01376": "da3f75e3f7ae6b67bff3a6a35529b510",
".git/objects/f7/0eb726ccf37c8e946f017b7b8c6773c13ae274": "c8cc471b3237bc30fc73a3cefff9635b",
".git/objects/f7/824c7a843630c3c659fced254cc83c76023f71": "07ecb719d2288f26904254e757df1c1b",
".git/objects/f8/3226b088e56db029731377a1c11007c7ac6764": "cc8511276ed91f1c47b61b770a87ce81",
".git/objects/f9/eb9f839214c3074b9d67b05db4e9ddee8ab211": "0354216c8096cdb56b77bf2d14c19fed",
".git/objects/fa/6001a0d469163245caf8e5443f1ec5caae0db0": "5ad1a6348e6a91f03e9f7752d68baf91",
".git/objects/fa/6727636ab229d9731fd03a490ba74392675d37": "36b3b8f65d70b9975f0efdeaa0ea624a",
".git/objects/fb/e615066aebf238d1376d11ab5a43bf5a755192": "9079dac8a06d0f5377fb551958c50cca",
".git/objects/fc/2af4a8ecc1e6bd517e07085e55aa5b1de0196f": "5c3094246a3b898d4e8b72364d337fa1",
".git/objects/fc/39feb81cbe558c794d476843ab53bfbbaa2179": "e92fda0cafb2cd45f012665f40826711",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fc/8e8e1ea89ce3cb0db77781a91d0ffdb24a830b": "342de9d913bc486b5d3a7303830c0d8f",
".git/objects/fc/a5453c018a69d9eafe32e752f9bbe8b98959e1": "e10521f2f17fb3258b3dfab30afc41db",
".git/objects/fe/d8800b8431f9c7714ea16fec848550d20af3ff": "1ae30c96bea01761d3992bf254dbaeb3",
".git/objects/pack/pack-e4dc8bb5f677594d74c9bfa4c7268bbfe6a19357.idx": "723454477d79d44e1716948d79aa774e",
".git/objects/pack/pack-e4dc8bb5f677594d74c9bfa4c7268bbfe6a19357.pack": "4cc53600c5775474bd7ed8a8a2025511",
".git/ORIG_HEAD": "9dcd1cc7bfe10143ee5d60fe55ef3e02",
".git/refs/heads/master": "daf2ff7bfe2b4cf93464228fbd48da9b",
".git/refs/remotes/enriched/master": "86debf5b6a80af6da608b0f66c368ad7",
".git/refs/remotes/origin/master": "daf2ff7bfe2b4cf93464228fbd48da9b",
"assets/AssetManifest.json": "350b2a93aece1ae859879aa1b8cfcf26",
"assets/assets/images/canvas_image.png": "d47c277442c76cb3d7b59591104fdfaa",
"assets/assets/images/left.png": "36bc1c3c658714aee7c8039bf9b1b43a",
"assets/assets/images/logo.png": "120dbbe0770e305c1875f31a5f4277df",
"assets/assets/images/right.png": "35f0b0e15a1aa1d00b30fadd3db56f3c",
"assets/assets/images/template.png": "e008db60d0c1bcf9a648a83d1eb658d7",
"assets/assets/images/template_sample.png": "b33cae3480846b67fe25ea035b075c1a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/images/canvas_image.png": "d47c277442c76cb3d7b59591104fdfaa",
"assets/images/left.png": "36bc1c3c658714aee7c8039bf9b1b43a",
"assets/images/logo.png": "120dbbe0770e305c1875f31a5f4277df",
"assets/images/right.png": "35f0b0e15a1aa1d00b30fadd3db56f3c",
"assets/images/template.png": "e008db60d0c1bcf9a648a83d1eb658d7",
"assets/images/template_sample.png": "b33cae3480846b67fe25ea035b075c1a",
"assets/NOTICES": "992e96e077a7be044f4654257c9c44a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/web_elements/ckeditor5-build-decoupled-document/ckeditor.js": "d7c42a008093a4bb2d86f0a5901a3731",
"assets/web_elements/ckeditor5-build-decoupled-document/ckeditor.js.map": "361616330a8ef9657aaca9a33cde2208",
"assets/web_elements/ckeditor5-build-decoupled-document/index.html": "03c2afeb6d16f37ea9e6bad66242ab3a",
"/": "ecc976d5c4d73891d4e9d680f683ccbd",
"assets/web_elements/ckeditor5-build-decoupled-document/sample/css/sample.css": "565e68d319a43de5d18998ad885f579c",
"assets/web_elements/ckeditor5-build-decoupled-document/sample/img/bg.png": "804f8918709610c90a3656f29567108d",
"assets/web_elements/ckeditor5-build-decoupled-document/sample/img/github.svg": "729abc9829db40bbc00be0b08302f208",
"assets/web_elements/ckeditor5-build-decoupled-document/sample/img/logo.svg": "25510c551d5a9e1d94ac8eb027cffc5f",
"assets/web_elements/ckeditor5-build-decoupled-document/sample/img/umbrellas.jpg": "e935d5c582ff2d43b858681e885c2d95",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/af.js": "5bcc77277900e59a367e01dfa06caae3",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/ar.js": "0c649ad81eba3e2803c6daa9e7894efb",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/ast.js": "71a1c4994f98a4235edf0be67f4e0bff",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/az.js": "d86e5ba3070b9560a8bf8188f6adaacc",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/bg.js": "e9581984278a5c57c35c7add58603616",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/ca.js": "e54f121e2de76efedc45ffdc1136840f",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/cs.js": "686d61a7dddf0468825e48856b87e942",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/da.js": "daf9d864c954ac6ce9afd5c354ccdb4e",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/de-ch.js": "3f75587ce5775ffcd0aef97bb34420f0",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/de.js": "b3d25135b54ef51b54028cbd4941cb24",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/el.js": "2d98aa86528de379d1ca282be064b4ec",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/en-au.js": "a2e6e2d017107e5816ad8ac07294b9bf",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/en-gb.js": "a233d4dc6d1f9e5421a6fc5601d6b09c",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/eo.js": "1eda1b397aafff7db0e580174f129fd0",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/es.js": "111b8d32465796be3748b061267f9ce0",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/et.js": "5b65d2a88cd3d7842c675692950a9bde",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/eu.js": "8a306648aca42c6a5e2deb569634f8c9",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/fa.js": "36c1753e9e4ad6b9e79e03d8dc146d50",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/fi.js": "3ed1599f5ed0d7474d0e577eaa078369",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/fr.js": "7be2ea6f6961dd8e1d0c59dcebaa34b9",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/gl.js": "c93e1ccda877afca51c596ee909ea6c9",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/gu.js": "d01bf24a608cd4e7aa651c002850323e",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/he.js": "b47fe4570d4a00a8043e9ec3ae683b5e",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/hr.js": "75deddb0d8b8beb3496649c38acc9744",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/hu.js": "5a36d041e0caa43d94c06f2c4d8cd35d",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/id.js": "34d24b6efb44c16b226650151bd6127a",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/it.js": "650bdec187fcd14d69ecd47b7f4e4705",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/ja.js": "def746c3a668f4bd66a4e30c79c0f3bf",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/km.js": "0ee0a8fd3328b3442a30a22fdf417a68",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/kn.js": "22a9b7bac86d3cd162607c220d5b4f51",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/ko.js": "9af9ce42300e9b3842a4db4da7a7e5aa",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/ku.js": "b6257e80d8f9160987a36911033b3f8f",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/lt.js": "53e110f312cdfbe6d93e5660b68ae27e",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/lv.js": "5ab99c9d851bb789644285e7cfaeb6ff",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/ms.js": "50629ea859534c6bfc4dc5a0f105b93f",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/nb.js": "7f9ef76f9eb34331896d4adf87f991ad",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/ne.js": "d66ec0e3d54e03777ba7198393043cd0",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/nl.js": "6cf917c3f2f29a325efdbd381d851fe2",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/no.js": "9d8cda9b068440ab8989e18ec88cc88c",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/oc.js": "4e09bafb8c85f60f5b53f6626c55c003",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/pl.js": "197f5c78ea956e8c681db27e5dc50b81",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/pt-br.js": "dcafc422d4983abb1696eb0b155f9c8b",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/pt.js": "24018eb08751da18a7e6e674d4bbef20",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/ro.js": "f972ea2ffa3fad29d7ce2849545bd277",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/ru.js": "3cc9e52551fbf8a8914531cae57456cf",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/si.js": "64f4983d26c016495115f74ef939eaa9",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/sk.js": "268d8a1bd359cb0ce721f374dc56e35f",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/sl.js": "d1749207159bdead234709ea5f9431c9",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/sq.js": "394b90b524bb85956f09bb90562980c1",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/sr-latn.js": "034085bb9c37ed7949868fd7927817f4",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/sr.js": "ffe75f480292a85bb21eea86a46b5827",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/sv.js": "b52708222d1ed0e7a23bef5169eb3a62",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/th.js": "d41ae84dc82a4b876b2f212b392b3bd4",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/tk.js": "0f6eff32aad99bb3d0bb4dd8c3fd7065",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/tr.js": "3070b56f5209e1df4d6ae676fd484ef3",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/tt.js": "0f144edf43c6d77f1bf424d1e5956f14",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/ug.js": "ef8105eb18a5d32a86b45fb3476d3e4f",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/uk.js": "43786dc06f74f8a382fd3cc834bf22b4",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/vi.js": "9674133326b24db315266a56ffec1cf2",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/zh-cn.js": "36089fc07d643e8b72b480343a9b6bde",
"assets/web_elements/ckeditor5-build-decoupled-document/translations/zh.js": "b040a3a82e086962c079d701ba9565e7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flippage/assets/AssetManifest.json": "b2407c71725ebb4b66e8ed51ef4276d0",
"flippage/assets/assets/images/template.png": "e008db60d0c1bcf9a648a83d1eb658d7",
"flippage/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"flippage/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"flippage/assets/images/template.png": "e008db60d0c1bcf9a648a83d1eb658d7",
"flippage/assets/NOTICES": "53597e0b7f3e4bbe237939e3a037493c",
"flippage/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"flippage/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flippage/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flippage/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flippage/index.html": "4a90413001451ca1a00086ac8647d1db",
"flippage/main.dart.js": "9af1b52fa29f6a060202c9691b4644a6",
"flippage/manifest.json": "1acbd4c13f8be8c879280158379cbe19",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "48d7ac7a9a7fd9edc1481314742a9cbc",
"main.dart.js": "14c62f429007417c1d82817db253390f",
"manifest.json": "7dbcef568e591d9d7db89d38ae02f8fa",
"texteditor/assets/AssetManifest.json": "9d63ebc30721375be67bbcb5743d4092",
"texteditor/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"texteditor/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"texteditor/assets/images/breeze.jpg": "e8f6b8df9ece44149e3750fbb636049f",
"texteditor/assets/NOTICES": "37f6a4dc9f267fea0ba670c90c5a616f",
"texteditor/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"texteditor/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"texteditor/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"texteditor/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"texteditor/index.html": "ecc976d5c4d73891d4e9d680f683ccbd",
"texteditor/main.dart.js": "d7268ff90c92fca31d74fc8edb2a87ec",
"texteditor/manifest.json": "00e0b69b49487ce4f9ff0c5fac8fda49"
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
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
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
