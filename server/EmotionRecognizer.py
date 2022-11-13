import tensorflow as tf
import numpy as np
from sklearn.preprocessing import StandardScaler
from featureExtraction import get_features


class EmotionRecognizer:
    def __init__(self):
        self.encodingKey = {
            0: 'angry', 
            1: 'calm', 
            2: 'disgust', 
            3: 'fear', 
            4: 'happy', 
            5: 'neutral', 
            6: 'sad', 
            7: 'surprise'
        }

        self.model = tf.keras.models.load_model("./saved_model/SRE_Model")

    def classifyWavFile(self, data, sample_rate):
        '''
        parameters:

        wavPath: String 

        output:

        classification: array[String]

        Example:
        
        r = EmotionRecognizer()
        out = r.classifyWavFile(wavPath)
        print(out)
        >>> ['happy', 'angry', 'neutral']
        '''


        # Extracting Features
        X = get_features(data, sample_rate)

        # Data Preparation
        scaler = StandardScaler()
        inputData = scaler.fit_transform(X)
        inputData = np.expand_dims(inputData, axis=2)

        # Classify
        prediction = self.model.predict(inputData, verbose=0)

        classification = []
        for frame in prediction:
            classification.append(self.encodingKey[np.argmax(frame)])

        return classification
    
if __name__ == "__main__":
    path = "./datasets/AudioWAV/1001_DFA_ANG_XX.wav"

    r = EmotionRecognizer()
    out = r.classifyWavFile(path)

    print(out)
    


