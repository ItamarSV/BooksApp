FROM ubuntu:20.04
ENV DEBIAN_FRONTEND=noninteractive 

COPY . /app

RUN apt update

RUN apt-get update -y 
RUN apt-get install python3-pip  -y
WORKDIR /app
RUN pip3 install -r requirements.txt
RUN export PYTHONPATH=$PYTHONPATH:/app
ENV PYTHONPATH /app

CMD ["python3", "/app/server/app.py"]