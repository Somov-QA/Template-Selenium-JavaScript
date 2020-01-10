var webdriver = require('selenium-webdriver');

function test2()
{
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    driver.get('https://www.google.com/').then(function()
    {
        
    });
}

test2();