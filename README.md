# BooksApp

For running this project you need to do follow the next steps:
### 1. Preparation:
1. Clone this project to your machine.
2. Make sure you had installed Docker.(From https://docs.docker.com/get-docker)
### 2. Build the Docker Image:
For building the image run the next command:

```docker build --tag app .  ```

The name "app" can be modified

### 3. Running the Image:
For running the Image you need to specify the Image port number.
Now the image running on the specified port, the app running on 5000 internal port number.
In the Docker command you should address the both ports in this structure: -p external-port:internal-port
In my case I wand 5000 to be the external port and the app running on 5000 as internal port.
 
```docker run -p 5000:5000 app```

Now the app running on the specified port.

If you run into an issue please send me a message. 