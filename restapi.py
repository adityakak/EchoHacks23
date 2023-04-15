from flask import Flask, request, jsonify
from sus_score import sustainability_score
from alternatives import get_alternatives

app = Flask(__name__)


@app.route('/')
def hello():

    return "hello world!"


@app.route('/info', methods=['POST'])
def get_info():
    if request.method != "POST":
        return jsonify({})

    product = request.json['product']

    score = sustainability_score(product)

    alternative_data = get_alternatives(product)

    out_json = dict()

    out_json['score'] = score
    out_json['alt_image'] = alternative_data['alt_image']
    out_json['alt_price'] = alternative_data['alt_price']
    out_json['alt_score'] = alternative_data['alt_score']


    return jsonify(out_json)


if __name__ == "__main__":
    app.run(host="0.0.0.0")
