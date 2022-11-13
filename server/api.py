from flask import Flask, make_response, request
from flask_cors import CORS
import os
import pathlib
from werkzeug.utils import secure_filename
import librosa
from fileConverter import convertFileToWav
from EmotionRecognizer import EmotionRecognizer
import psycopg2

UPLOAD_FOLDER = "uploads/"
ALLOWED_EXTENSIONS = set(['mp3'])

app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000

CORS(app, resources={r"/*": {"origins": "*", "allow_headers": "*", "expose_headers": "*"}})

pathlib.Path(app.config['UPLOAD_FOLDER']).mkdir(exist_ok=True)

pg_connection_dict = {
    'dbname': 'postgres',
    'user': 'postgres',
    'password': "postgres",
    'port': 5432,
    'host': "localhost"
}

conn = psycopg2.connect(
    **pg_connection_dict
)

print(conn)

cur = conn.cursor()

@app.route('/', methods=['GET'])
def root_():
    return make_response({
        'message': "UTD Degree Validator API is online.",
    }, 200)

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files or 'user' not in request.form:
        return make_response({'message':'invalid request'}, 400)

    file = request.files['file']
    
    user = request.form['user']

    filename = secure_filename(file.filename)
    path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(path)

    # TODO: Change fiel format
    path = convertFileToWav(path)

    # TODO: Get Emotions and waveForm
    recognizer = EmotionRecognizer()
    
    # duration and offset are used to take care of the no audio in start and the ending of each audio files as seen above.
    waveform, sampling_freq = librosa.load(path, offset=0.6)

    emotions = recognizer.classifyWavFile(data=waveform, sample_rate=sampling_freq)

    data = {
        'waveform': waveform.tolist(),
        'sampling_freq': sampling_freq,
        'emotions': emotions,
    }

    cur.execute("INSERT INTO graphs (user_front_uuid, waveform, sampling_freq, emotions, filename) VALUES (%s, %s, %s, %s, %s)", (user, data['waveform'], data['sampling_freq'], data['emotions'], file.filename))
    conn.commit()

    return make_response(data, 200)

@app.route('/graphs')
def list_graphs():
    user = request.args.get('user')

    if user == None:
        return make_response({"message":"invalid request"}, 400)

    cur.execute("SELECT * FROM graphs WHERE user_front_uuid = %s", (user,))
    
    return make_response({"data": cur.fetchall()}, 200)