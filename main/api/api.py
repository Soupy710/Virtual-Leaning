import pymongo
import time
from pymongo import MongoClient
from django.shortcuts import render
from flask import Flask, request
from flask_cors import CORS, cross_origin
import json
client = pymongo.MongoClient(
    "mongodb+srv://swaroop:swar1234@cluster0.8l2ly.mongodb.net/hashcode?retryWrites=true&w=majority")
mydb = client["hashcode"]
authen1 = mydb["authen"]
dpredict = mydb["datapredict"]
app = Flask(__name__)
CORS(app)
email = "admin"
password = "admin"
cur_sub = ""
cur_topic = ""
cur_method = ""


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/login', methods=["POST"])
@cross_origin()
def App():
    global authen1
    global dpredict
    global client
    global email
    global password
    print("hello")
    b = request.json
    print(b)
    print(b['email'])
    temp = {"email": b["email"], "password": b["password"]}
    item_details = authen1.find()
    print(item_details, "asdadsadas")
    flag = False
    for i in item_details:
        print(i['email'], i['password'])
        if i['email'] == b['email'] and i['password'] == b['password']:
            flag = True
            break
        print(i)
    email = b['email']
    password = b['password']
    flag = False
    if flag:
        print("AYE")
        return "Success", 200
    else:
        with open("basic.json") as f:
            data = json.loads(f.read())
            data['email'] = b['email']
            print(type(data))
            print("AAAAA")
            dpredict.insert_one(data)
    return "Success", 200


@app.route('/publicroom', methods=["GET"])
@cross_origin()
def publicroom():
    print("public request received")
    s = {'num': "2", 'card1': {'creator': 'Swaroop', 'name': 'Windows Rocks', 'data': 'Let us group together to undertand the best OS in the world!'}, 'card2': {
        'creator': 'Surya', 'name': 'My funky physics', 'data': 'Hey guys, join my group if you are interested in learning physics from the best!'}}, 200
    return s


@app.route('/privateroom', methods=["GET"])
@cross_origin()
def privateroom():
    print("priavte request received")
    return {'num': "1", 'card1': {'creator': 'Smru', 'name': 'English Vinglish', 'data': 'English seekhna h toh idhar aado!'}}, 200


@app.route('/physics', methods=["GET"])
# @cross_origin()
def physics():
    return {'subtopics': ['Thermodynamics', 'Electricity', 'Optics']}, 200


# @app.route('/handletopic', method=["POST"])
# def handletopic():
#     b = request.json


# @app.route('/handle')


@app.route('/userclickdata', methods=["POST"])
def userclickdata():
    global authen1
    global dpredict
    global client
    print('USER CLICK', request.json)
    b = request.json
    global cur_sub
    global cur_topic
    global email
    global cur_method
    x = dpredict.find({"email": email})
    if len(b) == 1:
        cur_sub = request.json["topic"]
        print(x)
        for i in x:
            i["subject"][cur_sub]["count"] += 1
            # print(i["subject"])
            dpredict.replace_one({"email": email}, i)
    elif len(b) == 2:
        cur_sub = request.json["topic"]
        cur_topic = request.json["subtopic"]
        print(cur_sub, cur_topic)
        for i in x:
            i["subject"][cur_sub]["topic"][cur_topic]["count"] += 1
            # print(i["subject"])
            dpredict.replace_one({"email": email}, i)
    else:
        cur_sub = request.json["topic"]
        cur_topic = request.json["subtopic"]
        cur_method = request.json["method"]
        for i in x:
            i["subject"][cur_sub]["topic"][cur_topic]["method"][cur_method]["count"] += 1
            # print(i["subject"])
            dpredict.replace_one({"email": email}, i)
    return 'Done', 200


@app.route('/handletime', methods=["POST"])
def handletime():
    global authen1
    global dpredict
    global client
    print('USER CLICK', request.json)
    b = request.json
    global cur_sub
    global cur_topic
    global email
    global cur_method
    x = dpredict.find({"email": email})
    cur_sub = request.json["topic"]
    cur_topic = request.json["subtopic"]
    cur_method = request.json["method"]
    cur_time = request.json["time"]
    for i in x:
        i["subject"][cur_sub]["topic"][cur_topic]["method"][cur_method]["time"] += cur_time
        dpredict.replace_one({"email": email}, i)
    return 'Done', 200
