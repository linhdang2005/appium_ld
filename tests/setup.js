const { initDriver, quitDriver } = require('../utils/driver.js');

before(async function () {
    this.timeout(60000);
    await initDriver(); 
});

after(async function () {
    await quitDriver();
});
