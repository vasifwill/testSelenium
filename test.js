const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");


async function test_case(){
    let driver = await new Builder().forBrowser("chrome").build()

    await driver.get("https://www.google.com/")

    await driver.findElement(By.name("q")).sendKeys("Hello, World", Key.RETURN)

    setInterval(function(){
        driver.quit()
    }, 1000)
}

test_case()