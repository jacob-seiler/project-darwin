from flask import Flask, render_template, request, url_for, jsonify

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('index.html')


@app.route('/data', methods=['GET'])
def data():
    if request.method == 'GET':
        # TODO select randomly from list
        # TODO return multiple JSONs depending on input
        return jsonify(
            img=url_for('static', filename='temp-1.png'),
            title='Fransisco',
            notes=['CISC124']
        )
