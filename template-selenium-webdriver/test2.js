const webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

const USERNAME = 'admin';
const PASSWORD = "123";

(async function testAuthorization(){
    let driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get('http://localhost:8888/');
        await driver.findElement(By.name('username')).sendKeys(USERNAME);
        await driver.findElement(By.name('password')).sendKeys(PASSWORD);
        await driver.findElement(By.name('button')).click();
        
        let result = await driver.findElement(By.id('result')).getText();
        console.log("RESULT", result);
        await driver.wait(until.titleIs('Authorization: Correct'), 5000);
    }finally{
        await driver.quit();
    }
})();
