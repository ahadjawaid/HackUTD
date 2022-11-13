from os import path
from pydub import AudioSegment


def convertFileToWav(filePath):
    srcExtension = filePath.split(".")[-1]
    newPath = changeExtension(filePath, "wav")

    if srcExtension == "wav":
        return filePath
    elif srcExtension == "mp3":
        sound = AudioSegment.from_mp3(filePath)
    elif srcExtension == "flv":
        sound = AudioSegment.from_flv(filePath)
    elif srcExtension == "ogg":
        sound = AudioSegment.from_ogg(filePath)
    else:
        raise Exception(f"Audio format is not supported. Format: {srcExtension}. Please use wav, mp3, flv, or ogg")

    sound.export(newPath, format="wav")

    return newPath


def changeExtension(path, newExtension):
    newPath = path.split(".")
    newPath[-1] = newExtension

    return ".".join(newPath)

if __name__ == "__main__":
    convertFileToWav("./sample1.mp4")