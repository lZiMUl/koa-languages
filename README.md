# Welcome to koa-languages

[![BiliBili](https://img.shields.io/badge/BiliBili-koa--languages%20開發者B站-red?logo=bilibili)](https://b23.tv/ymEtPO)
[![Github](https://img.shields.io/github/issues/lZiMUl/koa-languages?label=Issues&logo=github)](https://github.com/lZiMUl/koa-languages/issues)
[![Github](https://img.shields.io/github/forks/lZiMUl/koa-languages?label=Forks&logo=github)](https://github.com/lZiMUl/koa-languages/network/members)
[![Github](https://img.shields.io/github/stars/lZiMUl/koa-languages?label=Stars&logo=github)](https://github.com/lZiMUl/koa-languages/stargazers)
[![Github](https://img.shields.io/github/license/lZiMUl/koa-languages?label=License&logo=github)](https://github.com/lZiMUl/koa-languages/blob/main/LICENSE)

## Browser Support

![Chrome](https://raw.githubusercontent.com/lZiMUl/koa-languages/main/assets/images/icons/chrome.png) | ![Firefox](https://raw.githubusercontent.com/lZiMUl/koa-languages/main/assets/images/icons/firefox.png) | ![Safari](https://raw.githubusercontent.com/lZiMUl/koa-languages/main/assets/images/icons/safari.png) | ![Opera](https://raw.githubusercontent.com/lZiMUl/koa-languages/main/assets/images/icons/opera.png) | ![Edge](https://raw.githubusercontent.com/lZiMUl/koa-languages/main/assets/images/icons/edge.png) | ![IE](https://raw.githubusercontent.com/lZiMUl/koa-languages/main/assets/images/icons/internet-explorer.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |


Install Command:
```
npm install koa-languages --save
```

Use: 
```js
import Languages from 'koa-languages';

/* Simulated KOA Network Framework Routing,
 * lang <en-US ru-RU zh-CN zh-TW>
 */
const lang = socket.request.header['accept-language'].split(',')[0]);
new Languages(lang, (socket) => {
  socket.body = socket.hello;
})
```