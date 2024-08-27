from flask import Flask, render_template

app = Flask(__name__)  # 默认情况下，Flask会在与该文件相同的目录下的 templates 文件夹中查找模板

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)