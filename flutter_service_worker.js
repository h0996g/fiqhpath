'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "f0c9e32863f9e2091e43b3b0ca73a33b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ab0dc5b19e1f7d659e93e87d7420a9a1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6ec090473f5ebda96bfbb1f5f5b1fdcb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d1c19cd297b382cf2b380c4c3654deb2",
".git/logs/refs/heads/main": "658691f8c26ff5ec2847386729b976e2",
".git/logs/refs/remotes/origin/main": "550c8c266228d8b4b502c27f77cfd7ac",
".git/objects/00/74df9c58d74618e6261ca6925aa8a3f58a4fb9": "7d3e3b3904368cd1b81c77f37d40fe98",
".git/objects/02/6f49ba8464200e081815defcaa89ff9ba4a9da": "00de47ee2500d489430b34cc6fcf5f60",
".git/objects/02/c77125ea15c3a2f498af1a154c3290012024b5": "647ff0026a43d001a8a48074c755bb93",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/10/16cb219dc2228d344bc798d1fcee96344f4ae7": "79df0c4deade3a486e1dd358a76302b7",
".git/objects/1a/f9d562c0836c8b43be55d5e59083c6eed30a9d": "085f9d23b3eab85e9d02171cf35cd505",
".git/objects/1a/fb475a6a7e41ea7f88135d7667fe71e3c3d17b": "2684ce28888783d01a662b0b7370ac21",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/1e/efc6f58c2380f49f5afd76f655e0dd541226f6": "9e964db49ba64d75f4be6fdb35ed201e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/ef9072a5b92e85651ae44845226c20f1dd100d": "392b6d763a00d079aa153c8125e8dbf5",
".git/objects/24/894fe9000576a207961875cd25d3b22ae0837e": "e12b684d8bef316ccbca8bb6012e2016",
".git/objects/28/19318bd6f52d7b831805c90c8812b4e1149ad4": "c6d115e9dbcfea34255e4e52dab259a3",
".git/objects/28/b800dc96ed6719743014646e47317254452b4a": "218bf54189440d5ac559e135eadd125a",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/36/25b14218b6122ad5ac81e78870a49afa97d2e1": "62378062ac6a72cbc421b065ef8bbc21",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3c/c7667f263f40a7f292ed175eb904e81d97f420": "27cb89188295d1566d52e3f614c242b9",
".git/objects/3e/1f2da7206b1a5d61cb3aff81e9a4e064e67782": "b6b15c4ca5342da8b624ac10c5c9e63f",
".git/objects/40/7664a08bd56c6ebe9c7bc01281fb4ed1c40f58": "6c932572f493810c225768b7bc865f27",
".git/objects/42/e47a30863753d1834fe30e312e7a5b42a0062d": "e83984922e464499895ec0af7bfe775a",
".git/objects/44/c3bd619a76a007bcb6a894f1c56f439b2b6155": "cc1324cfb85e8f0c68574683106fb5e0",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/8bf3fab616050aaf04331731f8bcb7ae4a99fa": "8e9aaabda318437d35158c9a0fcd569a",
".git/objects/49/4acede0c520f847f75982ca1f671fc6eaa889e": "c4a42624eaa20c8a64455bab6edd0908",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/996fb039de1c25a2266ee25bbd38eb9efca69c": "cc50ea974ef31c4cd788b095790f57a6",
".git/objects/4a/df839a1be2cb988674e54daa161efae273697d": "1648472c8c8983b490d8c7ef02303cbe",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/c32ca73ae8351b5e5ed88ec2b4b64a46adace3": "00387df8848479db0494006627648145",
".git/objects/4f/12003654b97ccd0aea0e23950b1897a6e20b11": "34d6926c91ad87907f3a8377a7babcfc",
".git/objects/51/624dfa04c99c99dfb65e63d305b455069efb67": "611b2ef38f62a570edf9a4ff9816c0d7",
".git/objects/5a/22c48ab4ff8e4d88e82e6ed7b873ae80b8613f": "9fbaa79332852fb655965558d8eea325",
".git/objects/5b/a80f49bc83197e58d0b67c3d544d77b3fff5d0": "30cbab238696e12d3a607a7d0e9c721e",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/5755cebf3db2fa16702eb3ed79ff28f4b05a5e": "1a26469496c19e14a61af4e252a26b2a",
".git/objects/5e/7e14466a2b4516e73e6369695c735ee6cfeef3": "cbc626de31a7839fb64e689ff04f8db9",
".git/objects/61/45b7170488203ccafb85870320812d0f93979f": "4fb3ca46b177f9ace101beaaf4c49624",
".git/objects/65/14eae358fdf15325c4afc8e708f58860bdb5ff": "3a418fd4ac2d07e1d287f02d623309ba",
".git/objects/66/ad9e809315ef792e8f7fb113172a79aed95ad5": "1349af81f78771586fa2208b9ba62c99",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/f804562d161a8740c3a4c808e69f069c836b11": "4e6277afc52bcf79b631d8d0f9617f68",
".git/objects/6b/2d16ddc6c7922c1809ba4a7d7153fa9dbf857b": "789dca1ae72ef5600c8b8027f5474b00",
".git/objects/6d/d1343c4ca642f00e8e749dc6d0ab3816d4b478": "a9bc865838b1dd6d3787a916cf3a043c",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/6f/6a2874581122168d96dcad7b140c430a567e17": "2de84d2cc68feba00970208bde869088",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/75/796ac3ace30d2558bb51a779df4081a4e0cabe": "623780ea255fa01d3f792ead56cb1ac2",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/7d/e1491bd697aecc3c0e9c07db8f5c9534ffa9cf": "0ed5b116944e2e28efeb892c9500a163",
".git/objects/80/52fba10c07c8403ea0d18c86094742c57c6cb0": "71f31564dbdb96ed6e195c58d707e53e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/3d0af1b96f39c5ad21be5657e7ddc58e489a03": "eb6e2aba67532ae8747224d92aed257e",
".git/objects/8c/f7702c885a9d27ecdfd99306be4cda37bcb705": "73e8ba9272147583ad177b9fcbf686e3",
".git/objects/8d/29d14e0640cea40903eb05f44f27b4893700f5": "17ecf962b0fe15a954744eb210a89812",
".git/objects/8e/4515e09a477112b30747f91f0d08cd4d090ac4": "0e17b15df10678c299ad076dcc1a114e",
".git/objects/8f/91cb2f992b1081337dff2a8e25dc3286946f1b": "cb70e6cf568eb2dcd17b1e29b9c56291",
".git/objects/90/5ad744bbdef2d70650fc2e0af47ee167f454ed": "af22ddf93e1d24d2e119d0ab3614e060",
".git/objects/92/d4b42d3492d86e1cf27a71a1bb60e0b165736c": "f57984787894155da926d8bccbe59728",
".git/objects/96/c406e0305307e5ec35b1508376ac7d930b534c": "124eb87a3f52f86cfecda0cf642f04a4",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/99/f8f8e3481c34ecfa7848456f1733994e00be7c": "1b4ddef00e07d16262bf27692e0dee71",
".git/objects/9e/d0349f71b3fcd4241dc82c12370cf4120f022c": "5324dcb431d4039c1645a06af03720a2",
".git/objects/a5/23a9505cd2a98647797ff6cfc199519926bd18": "aca0e115ca9b99d8e6faa35e610aad55",
".git/objects/b2/65ed4d1aeed8cefebd1168b81a6ffb368b0cdb": "1bb905c1172188cf1c3a2e9fa123dccf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/059c12a02a406a95a89ff881e78bb01eff6419": "9fe70e1e78d6f0515d5f7442f192e73f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/b9/f3492df2246ac74a35c1cf49ec8590c46f0c37": "89496a3087b2c3dbecc6c6bc2f6dfa53",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/27599143efd6929eb34572d4913039ddd89bbe": "7ac8079af6741231a12d55cdbb2dfca5",
".git/objects/c0/6056253a63b933b6f0b4746f81f689b4754be4": "5adfd83d5c130399abb98ff3153d45a4",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/c3/5014b29b514bfed04432dd36b794d6358babaf": "af94dc04cca3134b5f516912a2da033b",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/41f7db6248f59c7b937bc6c1ebd01d8b1fd472": "833f74b3c4b7906aec89c55309bf0b71",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/4a75995c7134fc3945e9679952d88ac08006c0": "f78df9f74be366f8b11de11724a449ca",
".git/objects/c8/f7edc44dea074e48950c02a890a0122fd63a82": "5091725ba4621f3e51ffdf4cb1372c91",
".git/objects/d3/e8aae9c554923781fdc6e674d2e3b6e38f5377": "a07e2a110ca2a51b16c5843a5ca89def",
".git/objects/d4/11b65abea24aebf92ce8316392d3f07d42014b": "09d79f8f19b85d09fcf3e300e466cdcd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/fbe87cfdde6683249eb8085d51f26f37b055d4": "ad71f7382039c51ca6c24e871f87a76b",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/dc/13fb76c3a1b34a5cbe25a40f4f51b39bda6600": "c58a38f4446b11b283289610fedab6f7",
".git/objects/df/b58e09e9004a3cc4a7cbfde4e8eb4a78653888": "aa9750773d67d97b4db6f0443fa35a19",
".git/objects/e5/1bf7fa5cd1f44df7414d8c6de3fd42ea0c984b": "1fd1ad4dee78c5a89517bc35b9492e7f",
".git/objects/e7/68b28bbaa56be993d9639ab212f01fd6bb0edf": "2e5171acad540d19e4f97f91acb16fc1",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/d60f56006cd9347125c61a86a29cb4f231971d": "c9843ecd686a675b11ab4abca4584770",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/f9/6b6122db48623080b5f7a1ebfe8e92f36a0200": "fee7c5ba4e4ad6c6c30de067385686be",
".git/objects/fa/367e14c71a88dbc66c5f09b90810241970c208": "4f65ae7db56bed6a72c5fc29a7e52274",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/ff/d8d9055b385a2f127324a6852cfa169fa66c3e": "89e0867adc4107dec546871c34b522db",
".git/refs/heads/main": "ad69204e8088b8c5156c3d7d27a5e74b",
".git/refs/remotes/origin/main": "ad69204e8088b8c5156c3d7d27a5e74b",
"assets/AssetManifest.bin": "699ea294064567422e9edd41d105be6f",
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
"index.html": "f0106271524f5725dda1ade4a2608c32",
"/": "f0106271524f5725dda1ade4a2608c32",
"main.dart.js": "ff99cde15d845583fe5a4f7fb1386557",
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
