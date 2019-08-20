from flask import Flask, render_template, request, url_for

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('index.html')


@app.route('/data', methods=['GET'])
def data():
    if request.method == 'GET':
        return {'img': url_for('static', filename='temp-1.png'),
                'title': 'Fransisco',
                'notes': 'CISC124'}
