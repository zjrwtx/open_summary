from flask import Flask, request, send_file, Response, jsonify
import requests
import qrcode
from io import BytesIO

from flask_cors import CORS
import openai
import  json
from dotenv import load_dotenv
import os

from base64 import b64encode
app = Flask(__name__)

CORS(app)

# CORS(app, resources={r"/*": {"origins": ["http://localhost:5500"]}})
CORS(app, resources={r"/*": {"origins": "*"}})


# 在使用API密钥和基础URL之前加载.env文件
load_dotenv()

# 现在可以通过os.environ访问这些值
# API_BASE = os.environ.get("API_BASE")
API_BASE ="http://localhost:11434/v1/"
API_KEY = os.environ.get("API_KEY")

def get_summary(original_url):
    
    client = openai.OpenAI(api_key=API_KEY, base_url=API_BASE)

    reader_url = f"https://r.jina.ai/{original_url}"
    json_response = requests.get(reader_url, headers={"Accept": "application/json"})

    if json_response.status_code == 200:
        json_data = json_response.json()
        markdown_content = f"文档名称:{json_data['data']['title']}\n文档原地址:{json_data['data']['url']}\n{json_data['data']['content']}"

        completion = client.chat.completions.create(
            model="phi3",
            max_tokens=20000,
            messages=[
                {"role": "system", "content": "你是一位文章总结分析助手"},
                {"role": "user", "content": "请帮我生成一个摘要，不要包含任何广告或推广内容，内容为：" + markdown_content},
            ],
        )
        outputtext = completion.choices[0].message.content

   
        return outputtext

@app.route('/summary', methods=['POST'])
def summary_api():
    data = request.get_json()
    original_url = data.get('url')
    if not original_url:
        return {"error": "未提供URL。"}, 400

    summary = get_summary(original_url)
    if summary is None:
        return {"error": "生成摘要失败"}, 500

    
    return jsonify({"summary": summary})

if __name__ == '__main__':
    app.run(debug=True)
