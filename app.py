
from flask import Flask, render_template
from datetime import datetime
app = Flask(__name__, template_folder="", static_folder="")

@app.route('/')
def homepage():
    
    return render_template()

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)


# from flask import Flask,render_template, request
# import os
# from flask.templating import render_template


# website_app = Flask(__name__, template_folder="", static_folder="") #overriding the default directories flask searches for

# print("app qweqweqwe!")

# @website_app.route('/',methods=["POST","GET"])
# def index():
#     return render_template("index.html")
    
# # @website_app.errorhandler(404)
# # def handler(a):
# #     return render_template("index.html")

# print("a")
# website_app.run(host=os.getenv('IP', '0.0.0.0'), 
#             port=int(os.getenv('PORT', 4444)))
# print("beta")