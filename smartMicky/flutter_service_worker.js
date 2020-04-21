'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "0c880c73285ad8591772dda9dab59977",
"/": "0c880c73285ad8591772dda9dab59977",
"main.dart.js": "7ad043434285190a87c1015e990260a8",
"assets/LICENSE": "bddc230604ba914f3a8d821683fab818",
"assets/AssetManifest.json": "355bd2e1eec1c808b0c6be78fee5880b",
"assets/FontManifest.json": "96880f5cbd12a15751331cdbdac93202",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/qingchuhuancun.png": "f08fddf783f3f882bb286d924eeae1c3",
"assets/assets/images/keywords.png": "5981f7489a974dc59c614dc56e9d4bb0",
"assets/assets/images/kaixueji.png": "111b78c9f4fe7cb41a7f5eb102337561",
"assets/assets/images/yuedulijie.png": "3a2f91f0330679a0437f36bd43815335",
"assets/assets/images/jingjushangxi.jpg": "8f54166275f812668cbc4b56adf7f4f6",
"assets/assets/images/wrong.png": "4a4063170de356cfd9392265591eb66e",
"assets/assets/images/alphabet.jpeg": "72ae71c2db19d8f264990d83dc68f68e",
"assets/assets/images/dagang.jpeg": "eb6af0a8c2876c29c706735af2f28667",
"assets/assets/images/classsync.png": "5d3104d347f334e11a1c469a9d9dd3d7",
"assets/assets/images/xiguanyongyu_pic.jpg": "455f37afa28c31b748e85c2368441a49",
"assets/assets/images/zuowen.png": "74fefd383d0c4b06eef2d59358a660b5",
"assets/assets/images/side_usa.JPG": "82fa051d63cacc2e32049d41f0d5af5b",
"assets/assets/images/shimianbiaoda.png": "ca1266a37b6faa11842dc36de947fd5e",
"assets/assets/images/intro_3.jpeg": "4e65b0fbdc019e9b17fb6b794c9fa5a3",
"assets/assets/images/xiangji.png": "b8cf26f266caeecec5463cc9af247406",
"assets/assets/images/huyan.png": "aad3304188ad7877b55495de2a393f14",
"assets/assets/images/homework.png": "e14987de3790d4eab1f25fd26fa225a6",
"assets/assets/images/usercentericon.png": "2ae234b8d29dc78a450dbf76e45ed863",
"assets/assets/images/ziranpindu.png": "6b09a8c0fc33e8a8c5d693ee8cd44d80",
"assets/assets/images/kaoshiji.png": "ee6a87b82a05221f8bd1e69966be67f4",
"assets/assets/images/good_on.png": "7e03f063e4e2b5d817dbb9d48df76884",
"assets/assets/images/dancichaxun.png": "b4c272143ed8f8e9bc6f151722ca1e6d",
"assets/assets/images/quanpin.png": "eed9873d837a03b3505a0246485eea38",
"assets/assets/images/zhuanxiangxunliangaokao.png": "e31a75b5756d57b6a39309a538e0a3bd",
"assets/assets/images/good_off.png": "550760fdade5084e8edc1226598aaa92",
"assets/assets/images/cihuijinjie.png": "ec104e5b1ebb487dc30164ef5ade6904",
"assets/assets/images/vowels.jpeg": "f658af31b669ef099c120c3168d5c849",
"assets/assets/images/wentifankui.png": "4ddc073935cb77351da57af94d8de765",
"assets/assets/images/zhenjuancihuifenxigaokao.png": "351819a63267c53b784c0474583fa2d7",
"assets/assets/images/book_normal.png": "4855e8fb2a3077b2b1b385602bebc551",
"assets/assets/images/onetoone.png": "13806221e645abe48e628c082531020f",
"assets/assets/images/zhengli.png": "5ad1695f422188c505ddc28196e053b3",
"assets/assets/images/xititongji.png": "1f549e6947ad912dec2e0af5f15e457e",
"assets/assets/images/xiguanyongyu.png": "91dea052dbd7297a6051f420363f54aa",
"assets/assets/images/jinyici.png": "e1c588cee36ce17b9e79765a8735d5e2",
"assets/assets/images/cihuiyunyong.png": "2a8a76a83a13dfddc64e75d29a7eff1e",
"assets/assets/images/shuff.png": "7d29bf3d81f9fafeab8c82a1b9dbbdf7",
"assets/assets/images/cihuitongji.png": "0edebd7616847cb367af2c65a585906f",
"assets/assets/images/shijuanji.png": "e45bfe02fb6a974ada0084021d56a901",
"assets/assets/images/pic_load_failed.jpg": "ea5351a53836178b9a2e9ab7f06063ce",
"assets/assets/images/unmute.png": "94c706aa36bf785ac9ab5fdbcd713e23",
"assets/assets/images/kancixuantu.png": "3d53df24a2e7b49b836cb5f3a5bb48e1",
"assets/assets/images/xiaoxuezhishidiankuangjia.jpeg": "24f77dc7321d019adf72b061bdc3d669",
"assets/assets/images/zhanghaoxinxi.png": "fd93de983a28a88cdb62139f2d9ff108",
"assets/assets/images/tingliceshi.png": "5a08e5dfed539337bc1678d99cd6f484",
"assets/assets/images/school.png": "3c6de8801403d17a84fd992118bec180",
"assets/assets/images/lock1.png": "e149c91409858cc5873a3c3077d7edf7",
"assets/assets/images/attention.png": "bb19d1ef5d1b013991421fbc6a3b0f60",
"assets/assets/images/tingyinxuantu.png": "fd42b4cc13610d1293996ecf024418d9",
"assets/assets/images/loading_anim.gif": "2e5ecca9a950e273658aac5b932a5b29",
"assets/assets/images/ic_menu_paper.png": "a76925e5f6d6e294497b9444dbad46bf",
"assets/assets/images/repeat_one.png": "269c42f52601103f68d1109c53d0f134",
"assets/assets/images/open_account_verify_idcard_front.png": "81733961ff00467daf1773d234f882a7",
"assets/assets/images/zhishidianguangjiaxiaoxue.png": "ed876bd11b091c4422074a623fd2e389",
"assets/assets/images/tingyinxuanci.png": "8c371fdb8fe63d4c4b348ae4ebfbef5e",
"assets/assets/images/jingxuan.png": "51a034d439b704185b2a244c1df6c559",
"assets/assets/images/intro_2.jpeg": "df5ca74e096c6005f43c6bbc9afc8831",
"assets/assets/images/shengciben.png": "8a79d281c7a36875b3ec401fb6ff24ba",
"assets/assets/images/ic_report.png": "03ff6f2410a29b1f129dddc93e580d14",
"assets/assets/images/jingjushangxi_1.jpeg": "62ecc4bd7fe3da23d548e00f6aedf81f",
"assets/assets/images/ic_close_normal.png": "dfbbef70a73b848f060ebecfa73d1169",
"assets/assets/images/meirirenwu_jiangli.png": "46b70e05ae4dbc4896c5a883d1927728",
"assets/assets/images/kanciceyin.png": "fadfd10a58d90d42eb89daaf88e5895c",
"assets/assets/images/lock.png": "8c452b26fb7040cc5ac2e6af8ba48ee7",
"assets/assets/images/abc_no.jpeg": "e0ff2cb2fb418c6eaa4cd9a1090d45b2",
"assets/assets/images/left_blue_icon.png": "2ecb18da68e200d020d524547eb974d3",
"assets/assets/images/jufa.png": "173900108495507f1f961f99c262f4f6",
"assets/assets/images/mine.png": "f8ee5ef59a3d55c8dd35058a0d0a7407",
"assets/assets/images/pic_loading.jpg": "9ccbf352b60341df0b71c2e2e515f035",
"assets/assets/images/star_normal.png": "41afd054b0594e1982fd9e86c739280d",
"assets/assets/images/cihuifenlei.png": "4ef955e083619c7549e3ccde31cff5c8",
"assets/assets/images/daily.png": "328e5e8643815fdc337ec5e7e60c8ed0",
"assets/assets/images/kanyitingyin.png": "09c5d75b450d31148118077f4461c031",
"assets/assets/images/teacher_pic.jpg": "ba1e0fbb1f35c323aa90e673ded9da8d",
"assets/assets/images/dagangcihui.png": "f08463371b6ab6e2387706220cdff632",
"assets/assets/images/ic_book_24dp.png": "e53e7e64c88486abe1d1ce411f75e3fd",
"assets/assets/images/pdf_back.png": "e7033012a4004eb69401b6de16b8344a",
"assets/assets/images/zhenjuanfenxixiaoxue.png": "9752eacaa7879b146dd54cad24787a09",
"assets/assets/images/drag.png": "341167a796aa23c78602f1b95c296c1e",
"assets/assets/images/yuyin.png": "211e9b387bfd0ba468524c7539645048",
"assets/assets/images/hexindancichuzhong.png": "ee92d15233281068d731e84b259c2e1e",
"assets/assets/images/pianzhang.png": "ad0afeb83ee76bd7b06b6568122314f3",
"assets/assets/images/audio_black.png": "ac25df81f00a82c17451dce79811237c",
"assets/assets/images/lever.png": "11586838b600c7a6564a774f2b8a7011",
"assets/assets/images/side.JPG": "38152f1650f7d6689ab51de8c30723b1",
"assets/assets/images/zhuanxiangzhongxue.png": "a99dcfbf6dec4986afc33cde70333fcc",
"assets/assets/images/book_selected.png": "48637600a81a9faeb1b9f53170ddb85e",
"assets/assets/images/add_homeword.png": "bad7440d8bcd36bb709fd5df89ebbaf7",
"assets/assets/images/guojiyinbiao.jpeg": "9507a46ac2fc7895c0232843a5ef6ba9",
"assets/assets/images/yuyinzhishi.png": "fe66cb5d1aa734ef856cc0835554f9fd",
"assets/assets/images/wrong_book.png": "b9c03bc5f9d4aca12da6c99486f86c08",
"assets/assets/images/chuzhongzhishidiankuangjia.jpeg": "fdc8a5b18e4c06f55eec55f583c8ccb6",
"assets/assets/images/chuzhongzhishidian.jpeg": "6562d080426badc8e1a6752aa0d30483",
"assets/assets/images/yingwenxuanyi.png": "5e11eca8d12fcaa469a1b14555d18094",
"assets/assets/images/weibo.png": "e38e851e2f5af645093d2a13de660e34",
"assets/assets/images/yufabianxi.png": "4ecef15397a5cead883d5eb52700113c",
"assets/assets/images/renzheng.png": "47b29af1d8772641800f62fb8f491960",
"assets/assets/images/dismiss_dialog.png": "1ffb2f60a230311be5304f2bcb245d97",
"assets/assets/images/cihuifenleixuexi.png": "3d37d8a2572a07178390fe9a20eb1429",
"assets/assets/images/intro_4.jpeg": "9eacca055b0e575fff59ce04af6f22e3",
"assets/assets/images/cihuijinjiexuexi.png": "ce6c87d87f3b1cc5b2fd130dad9ead18",
"assets/assets/images/ic_star_rate_on.png": "593e56f6fb5249e11fb2662763303b90",
"assets/assets/images/souti.png": "5140768f348aca58245c91f2856d734d",
"assets/assets/images/knowledge_point.png": "4bf4a3f8913ea9c03f26b8ef7555fa68",
"assets/assets/images/liju.png": "4767f060c905f51b93ca5e19b4249f27",
"assets/assets/images/ic_close_click.png": "f8cb2aaa51bd29f0667312829e973abe",
"assets/assets/images/miqiketang.jpg": "721ea0f4bae1c3ee2d1f81fe26c6a9f4",
"assets/assets/images/kanjushuoci.png": "eb6470c6a1c3aedc21494e0fce13663a",
"assets/assets/images/tingyintiankong.png": "fa69607a030385109b87318ca5dcf610",
"assets/assets/images/shezhimima.png": "ccd8b48d16af2700c9eb8905f728d91a",
"assets/assets/images/save_eye.jpeg": "e521d1477f427ca92542de64bc812266",
"assets/assets/images/cidian.png": "8557193465eccc0d2f3c2828045b110b",
"assets/assets/images/geshengzhenjuangaokao.png": "2ad3baa4c6baaab96a478978103a8c2d",
"assets/assets/images/guanjianci.jpeg": "0bfccf7676dfc9d2c065c8a75bae0ba0",
"assets/assets/images/kancitingyin.png": "27f78361bf8e0399f7ed5e24b9132aa2",
"assets/assets/images/ic_star_rate_off.png": "4458613c9d7582134b3189b3b55820d9",
"assets/assets/images/list.png": "b06f9a6e49369fb10544d8bbc5edba15",
"assets/assets/images/guide_unit_info.png": "0d68957078e406fbe9f08b9a18a56ebe",
"assets/assets/images/hexindancixiaoxue.png": "136a2f6317881740e51bd082897f18ef",
"assets/assets/images/zhentitingli.png": "f82c80df0b67d2677de0d5fc22cdb38a",
"assets/assets/images/invite.png": "a53321db2cf56f8ba93f8ba9f6ce4d5f",
"assets/assets/images/star_light.png": "8e0eca616edb4e02b88146fd5a6818db",
"assets/assets/images/zhishidianfenxizhongkao.png": "08e6b1c7a091da0a5066876e4ca83409",
"assets/assets/images/answer_right.png": "e2193522f34b4782fe89cbc48fb40470",
"assets/assets/images/yufafenxi.png": "add01d7c791164cc072bca3f57ab4740",
"assets/assets/images/set.png": "b99fed3acca52a4a23d475f7bcfabee7",
"assets/assets/images/placeholder.png": "fd242d59ea2b71a5df3fa57142c078ec",
"assets/assets/images/vod.png": "270e13200eef94e6a4daf848967376bd",
"assets/assets/images/right_blue_icon.png": "4e8c935396a3f7fbb4d210038f2b220f",
"assets/assets/images/zhongwenxuanci.png": "c266840fa03029eb0cbf6fbf7e581faf",
"assets/assets/images/wanxingtiankong.png": "c393882526f5b240a238a2fb91a6dae2",
"assets/assets/images/geshengzhenjuanxiaoxue.png": "6526926cd951e7f1fb7fa346fc620b4c",
"assets/assets/images/test.png": "2c0d3ba62f31516ba1d65702143168d1",
"assets/assets/images/left.png": "1bc5c01b5c4af55312a610f182882629",
"assets/assets/images/yufa.png": "79ccbb50e19fdc63248a7f83a3e0a8bd",
"assets/assets/images/building.png": "bca3809cf48127c174facdeada51eb16",
"assets/assets/images/test_word_count.png": "ed7767017f0f4b0850f9663d5a8723ed",
"assets/assets/images/kantutingyin.png": "ced0dc9d3bc3d9c7a934aac742c34d19",
"assets/assets/images/open_account_verify_idcard_back.png": "1dc05cfee80fabb11f612aedba609317",
"assets/assets/images/hexinjiangjie.jpg": "f0e1dff11ae118c8243205b50f97fdc6",
"assets/assets/images/book_word.png": "707f6138ff446169518aad9bc31c9404",
"assets/assets/images/start_up.jpeg": "638720570884eb76aac7753734f60d83",
"assets/assets/images/yijianfankui.png": "cd545cec6e38eae81a936578abd7daa8",
"assets/assets/images/hexindancigaozhong.png": "da20efc79b7a2792eeea9552933979f6",
"assets/assets/images/wordtime.jpeg": "287b86033a3fe8584f21e1093a6d8f48",
"assets/assets/images/shitingziyuan.png": "16365eb0ad20544acd826033e72a8c6a",
"assets/assets/images/gaozhongzhishidiankuangjia.jpeg": "e085091fb1f7b405b4cba607d1007d31",
"assets/assets/images/meiriyilian.jpg": "503604c4d024e965a0e0103c534a94c0",
"assets/assets/images/star_current.png": "4f40c9ce26223f3000932f2f0c4fa742",
"assets/assets/images/tingyin.png": "286bb7c4074ba91225b728b96d7cfbf2",
"assets/assets/images/cet_class.jpeg": "dee05723f6f0ba4b13fec182a9734410",
"assets/assets/images/gaozhongzhishidian.jpeg": "2c621a9210d2394376ec222018ddddde",
"assets/assets/images/guide_choose_textbook_unit.png": "dac09ad82da792e971ca2005857ce1a2",
"assets/assets/images/geshengzhenjuandaxue.png": "c84759366ca480d8abd3e4a378f1e5c1",
"assets/assets/images/huiyuanfufei.png": "c190755f3118aa6525646d5190bcb558",
"assets/assets/images/cihuifenxi.png": "862cf1d73c7ee68c77a380122ab46040",
"assets/assets/images/banbenhao.png": "21f8f3ac8966292faa1b8435282d8319",
"assets/assets/images/kanyiceyin.png": "26bcd9455089a029fcba258e517735a3",
"assets/assets/images/weechat.png": "59922125d1180f4484d2d31df9fd0509",
"assets/assets/images/yijian.png": "2715dc7d447ee33bc279904c651aa522",
"assets/assets/images/ic_close_selector.xml": "b6e80140d7a946515c1b58141c4076ef",
"assets/assets/images/unitlearn.png": "db7f61515d12694b575ab53999987a6e",
"assets/assets/images/zhishidianfenxixiaoxue.png": "add01d7c791164cc072bca3f57ab4740",
"assets/assets/images/zuowenpigai.png": "024cb1cf85e5666963ec185c6b391233",
"assets/assets/images/ic_ok_normal.png": "92f8bf30f78cf7373ad57c14980a082d",
"assets/assets/images/zhiboketang.png": "745f9bb7514f7a86db676458cf66ea1c",
"assets/assets/images/abc.jpeg": "f4875c1b31df0189daadf7e6a32da2fe",
"assets/assets/images/geshengzhenjuanzhongkao.png": "d64b4ba88186d15d50f2754a6ef06721",
"assets/assets/images/star_done.png": "b554c42e35a9b6cebcfcf1ef4f169219",
"assets/assets/images/ic_launcher_round.png": "4a0249bc2e7d46aa80f2143586fa11c2",
"assets/assets/images/zaoju.png": "0f211b3bfb0e9afe29032d1e2760daa2",
"assets/assets/images/guide_menu.png": "e6360765dd33df93755b8e2fadca0e0f",
"assets/assets/images/guide_nav.png": "b9f98382c526376e6dc9ab0358521ce3",
"assets/assets/images/exit.png": "b80a5cce0fafd8828cbcd0c91745fd40",
"assets/assets/images/audio.png": "a2e7aaf2231d8dcb7500e37461f475e8",
"assets/assets/images/vip.png": "bae469aad63f9a5fe1fd77b312f39fad",
"assets/assets/images/mp3.png": "f26492b732d3f1a1e6166ea75f4cec93",
"assets/assets/images/cifa.png": "27506856e6a6f30f9d1faf8501992a0c",
"assets/assets/images/yingci.png": "2bd31cbdf0e022ca573fac9a1aee07ed",
"assets/assets/images/intro_1.jpeg": "a2687384751ba9c572c7f7da4fbf2943",
"assets/assets/images/phonics_top.jpeg": "562b91c28b26e45ba80d8e2780629555",
"assets/assets/images/daliy_finish.jpeg": "6c964e89e07d8184fcaaf53c1eab822e",
"assets/assets/images/idioms.png": "88eaf955500a3f15f3cd1cdb1fe6c5f9",
"assets/assets/images/net_work_error.png": "a9dbf4373793fd7130ca7f7a71a22488",
"assets/assets/images/gaofenjuxing.jpg": "709c4fab19b768497643cd64f7b21e62",
"assets/assets/images/tianjia.png": "67c54626f333d6fe7687734ef741c7d2",
"assets/assets/images/zhuanxiangxiaoxue.png": "f4abd8327e1f7e8184e84e877b6ffa0a",
"assets/assets/images/xuexiao.png": "8593b0701d2395cb319245bd3d26ef7a",
"assets/assets/images/xingjinci.jpg": "02f3a82ee9ac2dc920fce509f5b32857",
"assets/assets/images/teacher_class.png": "47aa9d60f45398fcfe2c87cd8266ac18",
"assets/assets/images/xueduan.png": "b83f884f763bd45bb0c1013ad52e77c6",
"assets/assets/images/cet4_class.png": "b0e917adc8093f3063b83b2fbccd1af6",
"assets/assets/images/zhishidiankuangjiazhongkao.png": "bd4c41d4af303d86ff7292a66b4b8ca5",
"assets/assets/images/ziranpindufa.jpg": "54575fff3827015ee9733d4292ef3757",
"assets/assets/images/xiaoxuezhishidian.jpeg": "fa97337ffa738e23814a9857a4d350b2",
"assets/assets/images/loading_back.jpg": "383e8cdcb5c99f77118921b7605fa747",
"assets/assets/images/fanyici.png": "c271d5ec9e81e6b0ea32d415c1315a3f",
"assets/assets/images/mute.png": "a24ebcdf8e161fcb4d316f7088fc1e08",
"assets/assets/images/wodexiti.png": "94f8522682d1078d63100ea9a5a7d976",
"assets/assets/images/audio_next.png": "ab1f79c8fae6c871a6075fbed6d16349",
"assets/assets/images/zongheyunyong.png": "d21f868833e252b45c4dc518975116d9",
"assets/assets/images/zhongwen.png": "f200d48c2ee5ecb63ec71c9751136c58",
"assets/assets/images/exam.png": "0c225f310285be412b8bfb19ecdb0799",
"assets/assets/images/repeat_all.png": "31d6b487f05e2c00a6806d396b64052d",
"assets/assets/images/voice.png": "e0c11faa7dce77b925078f9f4c87c132",
"assets/assets/images/tingyinxuanyi.png": "1607b2bdbc3cb361f59c6bf6fc5db014",
"assets/assets/images/pinxiezuhe.png": "5415959f4da5c5bd2262abf51b8657d0",
"assets/assets/images/jiangbei.gif": "3ea799ba69af4446d23bba086b0d9980",
"assets/assets/images/kuangjia.jpeg": "38c3c65c1b8a75c4297e237300655575",
"assets/assets/images/banji.png": "c7b49d085ed674b7d2945334ad64c959",
"assets/assets/images/zhenglide.png": "195785a10c131fe79471cfbe6e5d6db0",
"assets/assets/images/play.png": "cee91e102125f776bbc2549b042b45ab",
"assets/assets/images/zhenjuanfenxizhongkao.png": "8344e1958f8fb31b864f3aa4ea6a33ed",
"assets/assets/images/paipaisouti.png": "9e4653cc6523a910fd2439c0466c592b",
"assets/assets/images/pinxie.png": "29a69c569a9bfd9548f3266d8c9638e8",
"assets/assets/images/front_usa.JPG": "7f5eb52739c20ff069a617202ef2a89b",
"assets/assets/images/quanpinlianxi.png": "17108016eaa771267c44fdfcea9a2710",
"assets/assets/images/word.png": "dafa725fbed754fec48ed1a1633a20a5",
"assets/assets/images/ic_ok_selector.xml": "86404dcd1e68246fa648db9bda85014f",
"assets/assets/images/setting.png": "a0514aec45760c3e362d26313ba886a9",
"assets/assets/images/right.png": "8b2f64b45f4ba3defd333845bebf7f50",
"assets/assets/images/tianjiabai.png": "b9be047110d731aed567fb68d7e4cbcc",
"assets/assets/images/zhenjuanfenxigaokao.png": "abc61baf1413be6c1e571e8817bfc165",
"assets/assets/images/staricon.png": "516e90268772954a1fbcfa7c83eeb76b",
"assets/assets/images/pingfenbiaozhun.jpg": "53120da6db852f02c12fd49f7ad5a6d7",
"assets/assets/images/add_paper.png": "676aa6d5a5e0cc430b792040a7e0a10a",
"assets/assets/images/front.JPG": "08107e6cd7754fe6c38720d41bf41059",
"assets/assets/images/ic_ok_click.png": "080f0936dd2480b7d3c9e12c522d523d",
"assets/assets/images/pengyouquan.png": "f9e86943ca4e0af362e6bf9cf3719700",
"assets/assets/images/zhentixunlian.jpg": "48e3ea19f59e9b1693314a177e61f83e",
"assets/assets/images/tingjuxuanci.png": "76475ae5e4d00c5c0d110edd1753161f",
"assets/assets/images/meirirenwu.png": "29676b8b069e7d9813ae46c79accb958",
"assets/assets/images/song_time.jpeg": "cd00067c657b6c882f9f6d0e987c5c1b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
