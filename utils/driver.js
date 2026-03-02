const { remote } = require("webdriverio");
const capabilities = require("../config/capabilities.js");
const appium = require("../config/appium.config.js");

let driver;

async function initDriver() {
  if (!driver) {
    driver = await remote({
      ...appium,
      capabilities: capabilities.android
    }); 
  }
}

function getDriver() {
    if (!driver) {
        throw new Error('Driver not initialized');
    }
    return driver;
}

async function quitDriver() {
    if (driver) {
        await driver.deleteSession();
        driver = null;
    }
}

module.exports = { initDriver, getDriver, quitDriver };