# qa-web-challenge-ryanair_matvei_semenuyk

Author: Matvei Semenuyk

I'm trying this challenge with WebdriverIO because it's my main technology.

The stack I use for the test task:
- WebdriverIO
- Mocha
- Chai
- Allure
- typescript (could do a challenge using JS with async/await, but lately I've been using TS for test)
- selenium-standalone

**p.s.>**
_Thanks for the interesting experience, I was interested during after the main work writing an automatic test for an angular application using WDIO, it really looked like a challenge, so I expanded the test and played with the test a little more than indicated in the main task. Just FUN_mode :D_

_And I saw bugs in the main task, the error block was often not displayed and the payment process was interrupted without any response for the client about that_

![image](https://user-images.githubusercontent.com/53184739/161393276-a1a7d535-b2d7-4135-b658-a2b3a62936dd.png)

Request URL: https://aggregator-rooms.ryanair.com/ha/v2/propertyBookingsPsd2
Status Code: 400 

email: 'dsa@dsa.dsa'
```
code: "BOOKING_EMAIL_INVALID"
details: null
field: "contact.email"
index: null
message: "Email must be valid"
resource: "PropertyBookingRequestDtoV2"
message: "Validation error"
type: "VALIDATION_ERROR"
```

**p.s.2>**
_For any questions:
email: matthewsemenuyk@gmail.com
telegram: @moterq

### Installing

Required:
```
NodeJS < v14 == node-v12.16.3 (https://nodejs.org/download/release/v12.16.3/) 
Java JDK == any (https://www.oracle.com/java/technologies/downloads/)

```

First install all dependenices:
```
npm install
```

You will need running selenium server on `localhost:4444`, run it with webdriver-manager:
```
npm install -g webdriver-manager
webdriver-manager update
webdriver-manager start
```
_If u have a bug with '**webdriver-manager update**' try to open (if Windows Syst.) PowerShell (AdminRoot) and put '**Set-ExecutionPolicy unrestricted**', accept **[Y]**_

Switch to new terminal tab, and run tests:
```
npm test
```

Allure Reporter:
```
npm install -g allure-commandline --save-dev
allure generate
allure serve
```


**p.s.3>**

_And I saw bugs in the main task, the error block was often not displayed and the payment process was interrupted without any response for the client about that_

![image](https://user-images.githubusercontent.com/53184739/161393276-a1a7d535-b2d7-4135-b658-a2b3a62936dd.png)

Request URL: https://aggregator-rooms.ryanair.com/ha/v2/propertyBookingsPsd2
Status Code: 400 

email: 'dsa@dsa.dsa'
```
code: "BOOKING_EMAIL_INVALID"
details: null
field: "contact.email"
index: null
message: "Email must be valid"
resource: "PropertyBookingRequestDtoV2"
message: "Validation error"
type: "VALIDATION_ERROR"
```
