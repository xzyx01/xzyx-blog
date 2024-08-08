// 顶部菜单
const TopNav = [
    /// 首页
    {
        text: "Home",
        link: "/"
    },
    /// 基础
    {
        text: "Base",
        items: [
            { text: "JavaScript", link: "/MD/Base/JavaScript/" },
            { text: "TypeScript", link: "/MD/Base/TypeScript/"},
            { text: "CSS", link: "/MD/Base/CSS/"},
            { text: "HTML", link: "/MD/Base/HTML/"},
            { text: "Browser", link: "/MD/Base/Browser/"}
        ]
    },
    /// 移动端
    {
        text: "Phone",
        items: [
            { text: "Flutter", link: "/MD/Phone/"},
            { text: "uni-app", link: "/MD/Phone/uni-app 基础"}
        ]
    },
    /// PC 端
    {
        text: "PC",
        items: [
            { text: "LargeScreen", link: "/MD/PC/"}
        ]
    },
    /// 框架
    {
        text: "Frame",
        items: [
            { text: "React", link: "/MD/Frame/React/"},
            { text: "Vue2", link: "/MD/Frame/Vue/"},
            { text: "Vue3", link: "/MD/Frame/Vue3/"}
        ]
    },
    /// 模块化
    {
        text: "Module",
        items: [
            { text: "Webpack", link: "/MD/Module/Webpack/"}
        ]
    },
    /// 工具
    {
        text: "IDE",
        items: [
            { text: "Git", link: "/MD/IDE/"}
        ]
    },
    /// Gitee
    { text: 'Gitee',link: 'https://gitee.com/zhd344300' }
];

/// 生成左侧菜单
function makeLeftMenus(path, mds){
    const menus = [];
    menus.push({title: "高频问题", path: path});
    mds.forEach(item => {
        menus.push({title: item, path: `${path}${item}`})
    });
    return menus;
}

// 左侧菜单
const LeftNav = {
    /// JavaScript
    "/MD/Base/JavaScript/": makeLeftMenus("/MD/Base/JavaScript/", ["深入 JavaScript", "ES 标准"]),
    /// TypeScript
    "/MD/Base/TypeScript/": makeLeftMenus("/MD/Base/TypeScript/", ["TypeScript 基础"]),
    /// CSS
    "/MD/Base/CSS/": makeLeftMenus("/MD/Base/CSS/", ["伪类选择器", "Less 预处理器"]),
    /// HTML
    "/MD/Base/HTML/": makeLeftMenus("/MD/Base/HTML/", ["meta 文档级元数据"]),
    /// 浏览器
    "/MD/Base/Browser/": makeLeftMenus("/MD/Base/Browser/", ["浏览器 Storage", "浏览器渲染机制", "浏览器 HTTP"]),
    /// 移动端
    "/MD/Phone/": makeLeftMenus("/MD/Phone/", ["Flutter 基础", "uni-app 基础", "微信小程序"]),
    /// PC 端
    "/MD/PC/": makeLeftMenus("/MD/PC/", ["可视化大屏适配"]),
    /// Vue2
    "/MD/Frame/Vue/": makeLeftMenus("/MD/Frame/Vue/", ["Vue 基础", "Vue 特殊组件原理", "Vue 底层原理"]),
    /// Vue3
    "/MD/Frame/Vue3/": makeLeftMenus("/MD/Frame/Vue3/", []),
    /// 模块化
    "/MD/Module/Webpack/": makeLeftMenus("/MD/Module/Webpack/", ["Webpack 基础"]),
    /// 工具
    "/MD/IDE/": makeLeftMenus("/MD/IDE/", ["Git 基础"]),
    /// React
    "/MD/React/": makeLeftMenus("/MD/Frame/React/", [])
}

// 主题
module.exports = {
    base: "/xzyx-blog/",
    plugins: ['@vuepress/plugin-last-updated'],
    title: "xzyx",
    descript: "xzyx 的个人博客",
    theme: "reco",
    themeConfig: {
        nav: TopNav,
        sidebar: LeftNav
    },
}
