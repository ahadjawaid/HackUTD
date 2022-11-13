from flask import Flask, make_response, request
from flask_cors import CORS
import os
import pathlib
from werkzeug.utils import secure_filename
import librosa
from fileConverter import convertFileToWav
from EmotionRecognizer import EmotionRecognizer

UPLOAD_FOLDER = "uploads/"
ALLOWED_EXTENSIONS = set(['mp3'])

app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000

CORS(app, resources={r"/*": {"origins": "*", "allow_headers": "*", "expose_headers": "*"}})

pathlib.Path(app.config['UPLOAD_FOLDER']).mkdir(exist_ok=True)

@app.route('/', methods=['GET'])
def root_():
    return make_response({
        'message': "UTD Degree Validator API is online.",
    }, 200)

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return make_response(400)

    file = request.files['file']
    
    filename = secure_filename(file.filename)
    path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(path)

    # TODO: Change fiel format
    path = convertFileToWav(path)

    # TODO: Get Emotions and waveForm
    recognizer = EmotionRecognizer()
    
    # duration and offset are used to take care of the no audio in start and the ending of each audio files as seen above.
    waveform, sampling_freq = librosa.load(path, duration=2.5, offset=0.6)

    emotions = recognizer.classifyWavFile(data=waveform, sample_rate=sampling_freq)

    return make_response({
        'waveform': waveform.tolist(),
        'sampling_freq': sampling_freq,
        'emotions': emotions,
    }, 200)