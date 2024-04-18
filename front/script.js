// 假设您已经在HTML文件中包含了qrcode.min.js
// <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

document.getElementById('generateBtn').addEventListener('click', generateSummary);

function generateQRCodeWithText() {
    var qrcodeContainer = document.getElementById('qrCodeOutput');
    qrcodeContainer.innerHTML = ''; // 清空容器内容
    var link = document.getElementById('urlInput').value; // 获取输入框的值

    // 创建一个用于包裹二维码和文本的div
    var qrCodeWrapper = document.createElement('div');
    qrCodeWrapper.style.display = 'flex'; // 使用flex布局
    qrCodeWrapper.style.justifyContent = 'center'; // 水平居中
    qrCodeWrapper.style.alignItems = 'center'; // 垂直居中
    qrCodeWrapper.style.flexDirection = 'column'; // 子元素垂直排列

    // 创建文本元素并设置内容
    var qrCodeText = document.createElement('p');
    qrCodeText.textContent = '公众号正经人王同学提醒您：扫描以下二维码阅读原文';
    qrCodeWrapper.appendChild(qrCodeText);

    // 使用qrcode库生成二维码
    new QRCode(qrCodeWrapper, link, {
        width: 50,
        height: 50,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H,
    });

    // 将二维码容器插入到页面中
    qrcodeContainer.appendChild(qrCodeWrapper);
}

async function generateSummary() {
    const urlInput = document.getElementById('urlInput');
    const summaryOutput = document.getElementById('summaryOutput');
    document.getElementById('loadingIndicator').style.display = 'block';

    if (!urlInput.value) {
        alert('Please enter a URL.');
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:5000/summary', { // 确保URL正确
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: urlInput.value })
        });


        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
         // 使用marked解析Markdown
        const parsedMarkdown = marked.parse(data.summary);
        
         // 将解析后的HTML内容设置到summaryOutput元素中
      
        summaryOutput.innerHTML = `<h3>Summary:</h3><p>${parsedMarkdown}</p>`;
        // 用户输入URL并点击按钮后生成二维码并添加文本
        generateQRCodeWithText();
        document.getElementById('loadingIndicator').style.display = 'none';

    } catch (error) {
        console.error('Error generating summary:', error);
        alert('An error occurred while generating the summary.');
        document.getElementById('loadingIndicator').style.display = 'none';
    }
}

// 添加事件监听器到摘要生成按钮
document.getElementById('generateBtn').addEventListener('click', generateSummary);

// 定义截图函数
function captureScreenshot() {
    // 选择需要截图的元素
    var summaryOutput = document.getElementById('summaryOutput');
    var qrCodeOutput = document.getElementById('qrCodeOutput');

    // 克隆需要截图的元素
    var summaryClone = summaryOutput.cloneNode(true);
    var qrCodeClone = qrCodeOutput.cloneNode(true);

    // 创建一个容器来包裹克隆的元素
    var wrapper = document.createElement('div');
    wrapper.style.display = 'inline-block'; // 确保元素并排显示
    wrapper.appendChild(summaryClone);
    wrapper.appendChild(qrCodeClone);

    // 将容器添加到文档中以使其可见
    document.body.appendChild(wrapper);

    // 使用 html2canvas 进行截图
    html2canvas(wrapper).then(function(canvas) {
        // 将截图显示在页面上
        var img = new Image();
        img.src = canvas.toDataURL('image/png');

        // 创建一个下载链接并触发点击事件，以便用户下载截图
        var link = document.createElement('a');
        link.download = 'summary-qr-code.png';
        link.href = img.src;
        document.body.appendChild(link);
        link.click();

        // 从文档中移除容器
        document.body.removeChild(wrapper);
    });
}

// 添加事件监听器到截图按钮
document.getElementById('captureBtn').addEventListener('click', captureScreenshot);