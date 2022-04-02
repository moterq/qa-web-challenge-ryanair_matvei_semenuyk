# qa-web-challenge-ryanair_matvei_semenuyk

Matvei Semenuyk

Im trying thats challenge wit WebdriverIO


### Installing

Required:
```
NodeJS < v14 == node-v12.16.3 (https://nodejs.org/download/release/v12.16.3/) 

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
