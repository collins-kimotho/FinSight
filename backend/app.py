from flask import Flask, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return "<h1>Hello wordl!</h1>"


if __name__ == '__main__':
    app.run(debug = True)