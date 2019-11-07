# Lachlan Maclean BCPR280

NodeJS Backend application utilizing Express, Bootstrap 4, Mutler and Vue


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

### RESTful API Help

The API I have created returns JSON data to the user.
{date, message, id}

- Date is the current time and date of when the request was made.
- Message is a canned message saying where the JSON data originated from
- id is the unique number you set when requesting data

#### Using the API
Simply append the URL with some numbers of your choice and my API will generate data based of your input.

[localhost:3000/12345](http://localhost:3000/12345) ID is 12345


## Command Line Application
Also included is a node.js appliction that is run with the command line to test out read and write capabilities.

### Running
```
node readwrite.js
```

The idea of this application is to read the file, and if it has 'dog' then to overwrite the file with 'cat'. And if it reads 'cat' overwrite the file with 'dog'.
