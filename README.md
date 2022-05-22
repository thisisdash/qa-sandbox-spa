# Getting Started with QA Assignment

This project aims to give a basic registration application as an assignment to QAs.
After (build) and run you should see the application responding to `localhost:3000` address in your browser

## Run

### Docker build

In order to run the application you need to have Docker installed and build the app from the root directory with
```bash
docker build -t qa-sandbox -f docker/Dockerfile .
```

To run the application you can then use the command 
```bash
docker run -it -p 3000:3000 qa-sandbox
```

### Docker-compose build

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


## End to End Tests

End to End test are implemented with typescript using [Playwright](https://playwright.dev/) framework.
Tests are implemented using the Page Object Model framework where the actions related to inidiviual pages and the actual test steps are separated. This is done to make the overall framework modular.

```/e2e``` folder contains pageobject, data and the test file

```playwright.config.ts``` is the config file for playwright tests. Configuration related to browser, parallel execution can be set in this file. 
For the current setup tests will run only in the chromium browser in headless mode. Parallel execution is enabled.

#### Following tests are implemented
- Name
   1. Should be optional
   2. Should allow letters
   3. Should not allow numbers
   4. Should not allow special characters
- Surname
    1. Should be mandatory
    2. Should show the required message
    3. Should allow letters and numbers
    4. Should not allow special characters
- Email
    1. Should be mandatory
    2. Should show the required message
    3. Should show message in case of incorrect email format
    4. Should not show error for correct email format
    5. Should not allow special characters other than @+.
- Phone
    1. Should be optional
    2. Should allow numbers and +
    3. Should not allow special characters
- Create New Registration
- Update Registration
- Delete Registration 


### Run Tests in Local   

Once the application is started on the local, run the below commands

`npm run e2etest`

Runs all the e2e playwright tests in headless mode. After test execution, test report is available in html format.

`npm run e2etest:headed`

Runs all the e2e playwright tests headed. After test execution, test report is available in html format.

### Run Tests in Docker

```bash
docker run -it -p 3000:3000 qa-sandbox
```

Modified the existing docker file. Updated the image to the playwright supported image. Also added a command to start the application and run tests once the application is up.