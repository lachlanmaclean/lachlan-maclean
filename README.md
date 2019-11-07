# Lachlan Maclean BCPR280 Assignment 2 README


NodeJS Backend application utilizing Express, Bootstrap 4, Mutler and Vue.

---

The backend server is running NodeJs and using Express to route requests from the client and serving as middleware to send HTML(ejs) to the browser.

Multer is used to handle file uploading from the browser to local disk storage found at /uploads.

To calculate correlation and regression, the user uploads the test datasheets and the values are sent to the server and sent back to the user with the calculation sent to the DOM using ejs.

Express also handles API requests and sends JSON data to the browser when called.

Vue components are used for the cards on the home screen (Wrate Write Application, RESTful API, Correlation and Regression).
The component takes attributes in the form of props and uses the template to build the element to the DOM using the values given.
```
<box title="" text1="" text2="" text3="" link="/" linktext=""></box>
```

| Prop | Description | Example |
|:--- |:--- |:---|
|title | Title of the card | Read and Write Application
|text1 | Line 1 of description text | Command Line Application that read and writes to file
|text2 | Line 2 of description text| (Can be left blank if line above is too long)
|text3 | Line 3 of description text| node readwrite.js
|link | url for button| https://github.com/lachlanmaclean/bcpr280_A2/blob/master/readwrite.js
|linktext | Button text | Run the Code

## Getting Started
Simple few steps to get it working
### Installing
```
npm install
node server.js or nodemon start
```
### Running

To view the application, open a browser and navigate to [localhost:3000](http://localhost:3000) or
whatever port its running on

## Command Line Application
Also included is a node.js appliction that is run with the command line to test out read and write capabilities.

### Running
```
node readwrite.js
```

The idea of this application is to read the file, and if it has 'dog' then to overwrite the file with 'cat'. And if it reads 'cat' overwrite the file with 'dog'.
## RESTful API

The API I have created returns JSON data to the user.
{date, message, id}

- Date is the current time and date of when the request was made.
- Message is a canned message saying where the JSON data originated from
- id is the unique number you set when requesting data

#### Using the API
Simply append the URL with some numbers of your choice and my API will generate data based of your input.

[localhost:3000/12345](http://localhost:3000/12345) ID is 12345

## Correlation and Regression

Uploads files using Mutler and then sends to server to process the calculation.

Will only accept txt that has numeric values. Uploading a random file will simply present user with a NaN calculation result.

