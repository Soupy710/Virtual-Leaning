import pymongo
import time
from pymongo import MongoClient
from django.shortcuts import render
from flask import Flask, request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
# CORS(app)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/login', methods=["POST"])
@cross_origin()
def App():
    print("hello")
    b = request.json
    print(b)
    print(b['email'])

    client = pymongo.MongoClient(
        "mongodb+srv://swaroop:swar1234@cluster0.8l2ly.mongodb.net/hashcode?retryWrites=true&w=majority")
    mydb = client["hashcode"]
    authen1 = mydb["authen"]
    temp = {"email": b["email"], "password": b["password"]}
    item_details = authen1.find()
    print(item_details, "asdadsadas")
    flag = False
    for i in item_details:
        if i['email'] == b['email'] and i['password'] == b['password']:
            flag = True
            break
        print(i)
    if flag:
        return "Success", 200
    else:
        return "Failure", 404


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
