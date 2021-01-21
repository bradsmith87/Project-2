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

#################################################
# Flask Routes
#################################################
def parse_json(data):
    return json.loads(json_util.dumps(data))

p = ['Country', 'Current_temp(C)', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
c = 'coordinates'


def df_to_geojson(df, properties, coordinates):
    geojson = {'type':'FeatureCollection', 'features':[]}
    for _, row in df.iterrows():
        feature = {'type':'Feature',
                   'properties':{},
                   'geometry':{'type':'Point',
                               'coordinates':[]}}
        feature['geometry']['coordinates'] = [row[coordinates]]
        for prop in properties:
            feature['properties'][prop] = row[prop]
        geojson['features'].append(feature)
    return geojson

a=parse_json(mongo.db.final.find())
df=pd.DataFrame(a)


@app.route("/")
def index():
    project2 = mongo.db.project2.find_one()
    return render_template("index.html")

@app.route("/test", methods=["GET"])
def welcome():
    # return jsonify(df_to_geojson(df, p, c))
    return jsonify(parse_json(mongo.db.project2.find()))


if __name__ == '__main__':
    app.run(debug=True)


