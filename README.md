# uni-clipboard

剪贴板操作插件，全平台兼容，支持设置剪贴板的内容和获取剪贴板的内容

## Import

### npm

```Javascript
import { setClipboardData, getClipboardData } from 'uni-clipboard'
```

### download

```Javascript
// 以下路径需根据项目实际情况
import { setClipboardData, getClipboardData } from '@/js_sdk/u-clipboard'
```

## API

### setClipboardData(text)

设置系统剪贴板的内容

- 参数：`text` `<string>` 需要设置的文本
- 返回： `<Promise>`
  - `resolve` 设置成功
  - `reject` 设置失败

### getClipboardData()

获取剪贴板的内容

- 返回： `<Promise>`
  - `resolve` 获取成功后的文本
  - `reject` 获取失败
