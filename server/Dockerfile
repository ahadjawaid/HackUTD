FROM python:3.9-buster

RUN apt update

RUN apt install ffmpeg -y

COPY . /opt/server

WORKDIR /opt/server

RUN python3 -m venv venv

RUN . venv/bin/activate

RUN pip install -r requirements.txt

CMD [ "flask", "--app", "api", "run", "--host=0.0.0.0"]
