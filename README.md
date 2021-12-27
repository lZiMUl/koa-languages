# Welcome to lzimul-languages

[![BiliBili](https://img.shields.io/badge/BiliBili-Web--Basics--Framework--Template%20開發者B站-red?logo=bilibili)](https://b23.tv/ymEtPO)
[![Github](https://img.shields.io/github/issues/lZiMUl/lzimul-languages?label=Issues&logo=github)](https://github.com/lZiMUl/lzimul-languages/issues)
[![Github](https://img.shields.io/github/forks/lZiMUl/lzimul-languages?label=Forks&logo=github)](https://github.com/lZiMUl/lzimul-languages/network/members)
[![Github](https://img.shields.io/github/stars/lZiMUl/lzimul-languages?label=Stars&logo=github)](https://github.com/lZiMUl/lzimul-languages/stargazers)
[![Github](https://img.shields.io/github/license/lZiMUl/lzimul-languages?label=License&logo=github)](https://github.com/lZiMUl/lzimul-languages/blob/main/LICENSE)

## Browser Support

![Chrome](https://raw.githubusercontent.com/lZiMUl/lzimul-languages/main/assets/images/icons/chrome.png) | ![Firefox](https://raw.githubusercontent.com/lZiMUl/lzimul-languages/main/assets/images/icons/firefox.png) | ![Safari](https://raw.githubusercontent.com/lZiMUl/lzimul-languages/main/assets/images/icons/safari.png) | ![Opera](https://raw.githubusercontent.com/lZiMUl/lzimul-languages/main/assets/images/icons/opera.png) | ![Edge](https://raw.githubusercontent.com/lZiMUl/lzimul-languages/main/assets/images/icons/edge.png) | ![IE](https://raw.githubusercontent.com/lZiMUl/lzimul-languages/main/assets/images/icons/internet-explorer.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |


Install Command:
```
npm install lzimul-languages --save
```

Use: 
```js
import Languages from 'lzimul-languages';

/* Simulated KOA Network Framework Routing,
 * lang <en-US ru-RU zh-CN zh-TW>
 */
const lang = socket.request.header['accept-language'].split(',')[0]);
new Languages(lang, (socket) => {
  socket.body = socket.hello;
})
```