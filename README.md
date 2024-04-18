

---

# 正经人王同学的文章笔记分享图生成助手
这是一个用于生成文章摘要和分享图的Web应用。用户可以输入任意文章地址，点击按钮即可生成无广告或推广内容的简要笔记，并生成分享图给好友。本项目开源在GitHub，并且不断新增功能中。
![微信截图_20240418224655](https://github.com/zjrwtx/open_summary/assets/86822589/a424c307-08af-4bdb-b913-894577694159)
![屏幕截图_18-4-2024_22476_127 0 0 1](https://github.com/zjrwtx/open_summary/assets/86822589/fcc4dde5-321b-4ea8-b99a-c00082ce0738)
![summary-qr-code (3)](https://github.com/zjrwtx/open_summary/assets/86822589/40349386-f280-4ebc-a8f1-1ad967e132cd)

## 功能
- **摘要生成**：输入文章地址后，点击“生成总结内容”按钮，应用将生成文章的摘要。
- **分享图生成**：生成摘要后，点击“生成分享图”按钮，应用将创建一个包含摘要和二维码的图片，方便分享。
- **二维码生成**：自动生成包含公众号信息的二维码，方便用户扫描关注。


## 使用方法
1. 在文本框中输入您想要生成摘要的文章地址。
2. 点击“生成总结内容”按钮，等待摘要生成。
3. 查看生成的摘要，并点击“生成分享图”按钮，应用将创建一个截图。
4. 截图创建后，您可以下载并分享该图片。

## 开源贡献
本项目开源在GitHub，欢迎贡献代码或提出改进建议。项目地址：[GitHub Repo](https://github.com/your-username/your-repo)

## 技术栈
- **前端**：HTML, CSS, JavaScript
- **后端**：Flask (Python)
- **API**：使用第三方API进行文章内容的读取和摘要生成
- **库**：
  - `marked`：用于解析Markdown并生成HTML
  - `html2canvas`：用于将HTML内容转换为图片
  - `qrcodejs`：用于生成二维码

## 安装和运行
1. 克隆项目到本地：`git clone https://github.com/zjrwtx/open_summary.git`
2. 安装依赖：`pip install -r requirements.txt`
3. 参照.env.example 创建.env文件 填入API_BASE（大模型api端点）和API_KEY(秘钥)
4. 运行后端服务：`python app.py`
5. 打开浏览器访问 `http://127.0.0.1:5000/`

## 联系方式
如有任何问题，可以通过以下方式联系我们：
- 邮箱：[3038880699@qq.com](mailto:3038880699@qq.com)
- 微信公众号：正经人王同学

## 版权信息
&copy; 2024 微信公众号：正经人王同学. All rights reserved.
![微信图片_20240418212643](https://github.com/zjrwtx/open_summary/assets/86822589/dbfd72a2-7986-4981-9e42-6cb5e650fe5d)

---

请根据您的项目实际情况调整上述内容，例如GitHub仓库链接、技术栈等。如果您需要进一步的帮助，请告诉我。



## 开源贡献
本项目遵循GPL许可证，欢迎贡献代码或提出改进建议。项目地址：[GitHub Repo](https://github.com/zjrwtx/videotopdf_ui)
1. 非商业用途：本项目的所有源代码和相关文档仅限于非商业用途。任何商业用途均被严格禁止。

2. 出处声明：任何个人或实体在修改、分发或使用本项目时，必须清楚地标明本项目的原始来源，并且保留原始作者的版权声明。

## 许可证
本项目采用GNU通用公共许可证（GPL）授权。详情见 [LICENSE](LICENSE) 文件。
