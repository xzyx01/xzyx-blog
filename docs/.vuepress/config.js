/// 顶部菜单
const topNav = [
    {
        text: "首页",
        link: "/"
    },
    {
        text: "踩坑",
        link: "/MD/踩坑/亲测有效的方法链接"
    },
    { 
        text: '我的', 
        items: [
            { text: "Gitee", link: 'https://gitee.com/xzyx01'},
            { text: "Github", link: "https://github.com/xzyx01"},
            { text: "npm", link: "https://www.npmjs.com/settings/344300zhd/packages"}
        ] 
    },
];


// 主题
module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]  // 这里设置了网站的 favicon
    ],
    base: "/xzyx-blog/",
    plugins: [
        [
            "sakura",
            {
              num: 20, // 默认数量
              show: true, //  是否显示
              zIndex: -1, // 层级
              img: {
                replace: false, // false 默认图 true 换图 需要填写httpUrl地址
              },
            },
          ],
          [
            "cursor-effects",
            {
              size: 4, // size of the particle, default: 2
              shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
              zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
          ],
          [
            "@vuepress-reco/vuepress-plugin-bgm-player",
            {
              audios: [
                {
                    name: 'LOSER',
                    artist: '米津玄師',
                    url: 'https://www.ytmp3.cn/down/73654.mp3',
                    cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
                  }
              ],
              // 是否默认缩小
              autoShrink: true,
              // 缩小时缩为哪种模式
              shrinkMode: "float",
              // 悬浮窗样式
              floatStyle: { bottom: "20px", "z-index": "999999" },
            },
          ],
        '@vuepress/plugin-last-updated'
    ],
    title: "xzyx 的博客",
    descript: "xzyx 的个人博客",
    theme: "reco",
    locales: {
        "/": {
          lang: "zh-CN",
        },
    },
    themeConfig: {
    author: "xzyx",
        nav: topNav,
        subSidebar: "auto",
        type: "blog",
        logo: "/logo.png",
        authorAvatar: "/logo.png",
        blogConfig: {
            nav: topNav,
            category: {
              location: 2, // 在导航栏菜单中所占的位置，默认2
              text: "文章", // 默认文案 “分类”
            },
            tag: {
              location: 3, // 在导航栏菜单中所占的位置，默认4
              text: "标签", // 默认文案 “标签”
            },
          },
    },
}
