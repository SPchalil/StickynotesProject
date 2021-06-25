# Sticky Notes App

StickyNotes project is an application developed in React. It allows users to have a virtual sticky notes board. Your virtual board should be accessible from any device anywhere at any time when you have an internet connection. It allows users to take notes by signing up.

It is a major project undertaken on my path towards learning and understanding the front-end and backend web development using the React.js, Node.js and MySql. It also makes use of react hooks, react router Dom, react-native, and react-color. This is a monorepository that contains both the client and server files. 

![stickynotes](https://user-images.githubusercontent.com/74065235/109551772-8daf3c00-7aab-11eb-95c4-a9fc3002c803.png)

This app requires Node Package Manager (npm) to run. You can clone the repo and follow the directions below to run an offline version of this app on your local machine.


# Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

In the terminal, use the command 'git clone' to get a copy of an existing Git repository :

### Clone the repo
![gitclone](https://user-images.githubusercontent.com/74065235/123194744-91633600-d481-11eb-8ad7-5e59f0dd8b0c.png)

### Install NPM packages
To install the npm packages for the Client and the Server, run the command seperately by changing the directory,
![gitclone2](https://user-images.githubusercontent.com/74065235/123196668-e6547b80-d484-11eb-931f-a3726f1b2a5b.png)

#### Install (React app - Client)
To install all dependencies, change the directory to client 
cd into client/ and run the command 'npm install'

#### Install (Server)
To install all dependencies, change the directory to server 
cd into server/ and run the command 'npm install'

### Install MySQL database
   - Install MySQL for appropriate OS-
     [You can download the MySQL Workbench from here](https://www.mysql.com/products/workbench/)
   - Create MySQL account and give it appropriate rights
   - Run database dump for MySQL-
     For new users to setup, they can import the data from the DataDump.sql file

### Setup .env and config.js files
To change the configurations to suit your MySQL settings:
in server/, create an .env file. put configurations in as you see fitting your local mysql server 
   - Set .env variables
   - Setup .env and config.js files

## To Run
To start the development server for nodejs, cd into server/ and npm start
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

To start the development server for react, cd into client/ and npm start
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


The page will reload if you make edits.\
You will also see any lint errors in the console.

