// 顶部菜单
const TopNav = [
    /// 首页
    {
        text: "首页",
        link: "/"
    },
    // /// 基础
    // {
    //     text: "Base",
    //     items: [
    //         { text: "JavaScript", link: "/MD/Base/JavaScript/" },
    //         { text: "TypeScript", link: "/MD/Base/TypeScript/"},
    //         { text: "CSS", link: "/MD/Base/CSS/"},
    //         { text: "HTML", link: "/MD/Base/HTML/"},
    //         { text: "Browser", link: "/MD/Base/Browser/"}
    //     ]
    // },
    // /// 移动端
    // {
    //     text: "Phone",
    //     items: [
    //         { text: "Flutter", link: "/MD/Phone/"},
    //         { text: "uni-app", link: "/MD/Phone/uni-app 基础"}
    //     ]
    // },
    // /// PC 端
    // {
    //     text: "PC",
    //     items: [
    //         { text: "LargeScreen", link: "/MD/PC/"}
    //     ]
    // },
    // /// 框架
    // {
    //     text: "Frame",
    //     items: [
    //         { text: "React", link: "/MD/Frame/React/"},
    //         { text: "Vue2", link: "/MD/Frame/Vue/"},
    //         { text: "Vue3", link: "/MD/Frame/Vue3/"}
    //     ]
    // },
    // /// 模块化
    // {
    //     text: "Module",
    //     items: [
    //         { text: "Webpack", link: "/MD/Module/Webpack/"}
    //     ]
    // },
    // /// 工具
    // {
    //     text: "IDE",
    //     items: [
    //         { text: "Git", link: "/MD/IDE/"}
    //     ]
    // },
    /// Gitee
    { text: '我的', items: [
        { text: "Gitee", link: 'https://gitee.com/xzyx01'},
        { text: "Github", link: "https://github.com/xzyx01"}
    ] }
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
        nav: TopNav,
        // sidebar: LeftNav
        subSidebar: "auto",
        type: "blog",
        logo: "/logo.png",
        authorAvatar: "/logo.png",
        blogConfig: {
            nav: TopNav,
            category: {
              location: 2, // 在导航栏菜单中所占的位置，默认2
              text: "博客", // 默认文案 “分类”
            },
            tag: {
              location: 3, // 在导航栏菜单中所占的位置，默认4
              text: "Tag", // 默认文案 “标签”
            },
          },
    },
}
