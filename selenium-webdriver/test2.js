const webdriver = require('selenium-webdriver');

const USERNAME = 'admin';
const PASSWORD = "123";

function testAuthorization()
{
    const driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('http://localhost:8888/');
}

/*
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
*/