
const {Builder, By, Key, until} = require('selenium-webdriver');

const TEST_SITE = "https://www.crv-bakery.ru";
const SERVICE_WEBO_PULSAR = "https://webopulsar.ru/test/";
//const SERVICE_CHECK_HOST = "https://check-host.net/check-http?lang=ru";

(async function test(){
    let pages = ['', '/o_kompanii/', '/catalog/', '/prezentacii/', '/service/', '/partneram/', '/kontakty/', '/price/'];
    let results = [];
    let driver = await new Builder().forBrowser('chrome').build();
    try{
        
        for(let index in pages){

            console.log("MONITORING PAGE:", TEST_SITE, pages[index]);
            await driver.get(SERVICE_WEBO_PULSAR);
            await driver.findElement(By.name('url')).sendKeys(TEST_SITE + pages[index], Key.RETURN);
            await driver.wait(driver.findElement(By.className('wp-test-results')), 10000);

            let serverConnection = await driver.findElement(By.xpath('//*[@id="js"]/body/div[1]/div[2]/div/div/table/tbody/tr[3]/td[3]')).getText();
            let createConnection = await driver.findElement(By.xpath('//*[@id="js"]/body/div[1]/div[2]/div/div/table/tbody/tr[3]/td[4]')).getText();
            let waitingResponse = await driver.findElement(By.xpath('//*[@id="js"]/body/div[1]/div[2]/div/div/table/tbody/tr[3]/td[5]')).getText();

            results.push([serverConnection, createConnection, waitingResponse]);
            console.log(serverConnection, createConnection, waitingResponse);
            await driver.navigate().refresh();
         }

    }finally{
        await driver.quit();
    }
})();