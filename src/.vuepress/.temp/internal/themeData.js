export const themeData = JSON.parse("{\"blog\":{},\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$4OB1FnTdijrxLnLs0ZhDme6RvNni2ZZniDhXJx4DCCysgLxEVCTvG\"],\"/zh/demo/encrypt.html\":[\"$2a$10$tVFyrrHHsWgyjlKUWYatj.jYjXo/qaAC0nRsJHZ2gr3iWp4OzXRGu\"]}},\"pure\":false,\"darkmode\":\"switch\",\"themeColor\":false,\"fullscreen\":false,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameOnMobile\":true,\"sidebar\":{\"/\":[\"\",{\"icon\":\"discover\",\"text\":\"Introduction\",\"prefix\":\"demo/\",\"link\":\"demo/\",\"children\":\"structure\"},{\"text\":\"Getting started\",\"icon\":\"note\",\"prefix\":\"guide/\",\"children\":\"structure\"},\"slides\"]},\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page on GitHub\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"Mr.Hope\",\"url\":\"https://mrhope.site\"},\"logo\":\"/logo.svg\",\"repo\":\"vuepress-theme-hope/vuepress-theme-hope\",\"docsDir\":\"demo/theme-docs/src\",\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"],\"navbar\":[\"/\",{\"text\":\"Developer Docs\",\"link\":\"/dev/\"},{\"text\":\"Tools/SDKs\",\"link\":\"/api/\"},{\"text\":\"Contact\",\"link\":\"/contact.html\"},{\"text\":\"Docs\",\"link\":\"/api/\",\"children\":[{\"text\":\"v2.0\",\"icon\":\"play\",\"link\":\"/dev/\"},{\"text\":\"v1.x\",\"icon\":\"play\",\"link\":\"https://docs.zksync.io\"}]},{\"text\":\"Community\",\"link\":\"/api/\",\"children\":[{\"text\":\"Discord\",\"icon\":\"group\",\"link\":\"/dev/\"},{\"text\":\"Twitter\",\"icon\":\"leaf\",\"link\":\"/dev/\"},{\"text\":\"Medium\",\"icon\":\"wechat\",\"link\":\"https://docs.zksync.io\"}]}],\"footer\":\"Default footer\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
