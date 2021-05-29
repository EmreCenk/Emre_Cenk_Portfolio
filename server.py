
from flask import Flask,render_template, request

from flask.templating import render_template


website_app = Flask(__name__, template_folder="", static_folder="") #overriding the default directories flask searches for



@website_app.route('/',methods=["POST","GET"])
def index():
    if request.method == "GET":
        return render_template("index.html")
    
    return {"final": "server received"}

if __name__ == "__main__":
    website_app.run(debug = True);
