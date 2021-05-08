# 剪贴板

## ✨ Feature

剪贴板操作插件，全平台兼容，支持设置剪贴板的内容和获取剪贴板的内容

## 🥗 Import

```Javascript
// NPM
import { setClipboardData, getClipboardData } from 'uni-clipboard'

// DCloud
import { setClipboardData, getClipboardData } from '@/uni_modules/u-clipboard/js_sdk'
```

## 🥪 API

### setClipboardData(text)

设置系统剪贴板的内容

- 参数：`text` `<string>` 需要设置的文本
- 返回： `<Promise>`
  - `resolve` 设置的文本
  - `reject` 设置失败

### getClipboardData()

获取剪贴板的内容

- 返回： `<Promise>`
  - `resolve` 获取成功后的文本
  - `reject` 获取失败

## 🧀 Compatibility

在 H5 端存在一定的兼容性问题：

- `setClipboardData` 原理是新建 `textarea` 节点，并将文本赋值到 `value`，然后全选文本框内容执行复制操作。这里执行复制操作是通过 `document.execCommand('copy')` 执行，所以该方法存在[兼容性][1]。需要注意的是，因 H5 安全性原因，执行该方法最好是在点击事件里，例如直接在钩子函数执行是无效的。
- `getClipboardData` 是通过 `navigator.clipboard.readText()` 获取剪贴板的文本内容。需要注意的是执行该方法必须在 `localhost` 或 `https://` 下。该方法也存在[兼容性][2]。

[1]: https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7
[2]: https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard/readText#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7
