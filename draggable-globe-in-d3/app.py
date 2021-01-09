from flask import Flask, jsonify
from flask import Flask, jsonify
from flask import Flask, render_template
from flask_pymongo import PyMongo
import json
from bson import Binary, Code
from bson.json_util import dumps
from bson import json_util
import pandas as pd
import csv
from flask import Flask, render_template, jsonify

#################################################
# Flask Setup
#################################################

#Create instance of Flask app
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/project2")
# mongo.db.users.find({"online": True})
mongo.db.final.find_one()



#################################################
# Flask Routes
#################################################
# def parse_json(data):
#     return json.loads(json_util.dumps(data))

p = ['Country', 'Current_temp(C)', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
c = 'coordinates'

# with open('combined_final.csv', newline='') as csvfile:
#     # df = csv.reader('combined_final.csv', delimiter=' ', quotechar='|')
#     df = csv.reader(open('combined_final.csv','r'),delimiter=' ')

csvr = csv.reader(open('combined_final.csv'))
header = next(csvr)
df = [row for row in csvr]

# def df_to_geojson(df, properties, coordinates):
#     geojson = {'type':'FeatureCollection', 'features':[]}
#     for _, row in df.iterrows():
#         feature = {'type':'Feature',
#                    'properties':{},
#                    'geometry':{'type':'Point',
#                                'coordinates':[]}}
#         feature['geometry']['coordinates'] = [row[coordinates]]
#         for prop in properties:
#             feature['properties'][prop] = row[prop]
#         geojson['features'].append(feature)
#     return geojson




@app.route("/")
def index():
    project2 = mongo.db.project2.find_one()
    return render_template("index.html")

# @app.route("/test", methods=["GET"])
# def welcome():
#     return jsonify(df_to_geojson(mongo.db.final.find(),p,c))






@app.route('/geojson-features', methods=['GET'])
def get_all_points():
    geojson = {'type':'FeatureCollection', 'features':[]}
    for _, row in df.iterrows():
        feature = {'type':'Feature',
                   'properties':{},
                   'geometry':{'type':'Point',
                               'coordinates':[]}}
        feature['geometry']['coordinates'] = [row[c]]
    for prop in p:
            feature['properties'][prop] = row[prop]
            geojson['features'].append(feature)
    return jsonify(geojson)

if __name__ == '__main__':
    app.run(debug=True)

# @app.route("/")
# def index():
#     project2 = mongo.db.project2.find_one()
#     return render_template("index.html")

# @app.route("/test", methods=["GET"])
# def welcome():
#     return jsonify(df_to_geojson(mongo.db.final.find(),p,c))


# if __name__ == '__main__':
#     app.run(debug=True)


