# Getting Started with QA Assignment

This project aims to give a basic registration application as an assignment to QAs.
After (build) and run you should see the application responding to `localhost:3000` address in your browser

## Run

## Docker build

In order to run the application you need to have Docker installed and build the app from the root directory with
```bash
docker build -t qa-sandbox -f docker/Dockerfile .
```

To run the application you can then use the command 
```bash
docker run -it -p 3000:3000 qa-sandbox
```

## Docker-compose build

In order to run the application you need to have Docker and docker-compose installed and build the app from the root directory with
```bash
docker-compose up --build
```

### local

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

