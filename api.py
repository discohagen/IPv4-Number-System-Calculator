from flask import Flask, request, jsonify
from main import *

app = Flask(__name__)

@app.route("/dec2bin", methods=["POST"])
def dec2bin():
    data = request.get_json()
    dec = data["decimal"]
    return jsonify(decimal_to_binary_in_a_byte(dec))

@app.route("/dec2hex", methods=["POST"])
def dec2hex():
    data = request.get_json()
    dec = data["decimal"]
    return jsonify(decimal_to_hexadecimal_in_a_byte(dec))

@app.route("/bin2dec", methods=["POST"])
def bin2dec():
    data = request.get_json()
    bin = data["binary"]
    return jsonify(binary_to_decimal_in_a_byte(bin))

@app.route("/bin2hex", methods=["POST"])
def bin2hex():
    data = request.get_json()
    bin = data["binary"]
    return jsonify(binary_to_hexadecimal_in_a_byte(bin))

@app.route("/hex2dec", methods=["POST"])
def hex2dec():
    data = request.get_json()
    hex = data["hexadecimal"]
    return jsonify(hexadecimal_to_decimal_in_a_byte(hex))

@app.route("/hex2bin", methods=["POST"])
def hex2bin():
    data = request.get_json()
    hex = data["hexadecimal"]
    return jsonify(hexadecimal_to_binary_in_a_byte(hex))

if __name__ == "__main__":
    app.run(debug=True)