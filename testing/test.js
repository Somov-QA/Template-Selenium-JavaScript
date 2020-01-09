var webdriver = require('selenium-webdriver');

function searchOnGoogle()
{
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('https://www.google.com/');
}

searchOnGoogle();