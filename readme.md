**CircleCI Build Status:** [![CircleCI](https://circleci.com/gh/sart0701/cucumberJS/tree/sart0701-patch-1.svg?style=svg)](https://circleci.com/gh/sart0701/cucumberJS/tree/sart0701-patch-1)

## About
This is a test automation framework for testing Usabilla website.

## Tools Stack :
- Protractor: Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.
- Programming Language : Javascript (ES6)
- Framework: Cucumber.js - Cucumber is a very popular BDD framework that focuses more on features or stories. It mimics the format of user stories and utilizes Gherkin.
- Assertion Library: Chai

## Features
1. Clear folder structures 
2. Page Objects Design Pattern
3. Reusable functions
4. Clear Gherkin syntax
5. Support for cucumber-html-reports
6. Static Code Analysis using ESLint
7. Continuous Integration using Circle CI
8. Support for Chrome and Firefox browsers

## To Get Started
###### Pre-requisites

1. Node Js installed globally on your computer https://nodejs.org/en/download/
   version 10 and higher.Verify version of the Node using the command node --version in terminal or cmd.
2. IDE: VSCode/Brackets
3. Browsers: Chrome (v.76 and higher) and Firefox

## Setup
* Clone the repository into a folder in your system
* Go inside the CucumberJS folder and run following command from terminal/command prompt
    `npm install`
* All the dependencies from package.json would be installed in node_modules folder.
* Run `npm update` to update webdrivers.
* Run `npm start` to start the selenium server

## Run Tests
Run `npm test` to run the tests located inside tests/*

## Workarounds for common errors:
* Problems with webdriver-manager start: Delete node_modules and install globally
* If tests doesnt run with selenium server , uncomment `directConnect: true` inside config/config.js and comment `seleniumAddress: 'http://localhost:4444/wd/hub'` to use chrome driver directly and try running the tests again.
