const {Builder, By, Key, until} = require('selenium-webdriver');

(async function testAuthorization(){
    let driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get('https://www.google.com/');
        let searchField = await driver.findElement(By.name('q'));
        await searchField.sendKeys('GeForce 1650');
        await searchField.sendKeys(Key.ENTER);
        
        await driver.wait(until.titleIs('GeForce 1650 - Поиск в Google'), 5000);
        let listResult = await driver.findElements(By.className("g"));
        if(listResult.length <= 0){
            throw new Error('Test - FAIL! Search not work');
        }else{
            console.log('Test - SUCCESS');
        }
    }catch(messageError){
        console.log("ERROR:", messageError);
    }finally{
        await driver.quit();
    }
})();