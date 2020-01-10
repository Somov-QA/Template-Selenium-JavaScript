var webdriver = require('selenium-webdriver');

function testGoogleSearch()
{
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    driver.get('https://www.google.com/').then(function()
    {
        var searchElement = driver.findElement(webdriver.By.name("q"));
        searchElement.sendKeys("GeForce 1650").then(function()
        {
            searchElement.sendKeys(webdriver.Key.ENTER).then(function()
            {
                driver.getTitle().then(function(title)
                {
                    setTimeout(function()
                    {
                        console.log("RESULT:", title);
                        driver.quit();
                    }, 2000);
                });
            });
        });
    });
}

testGoogleSearch();