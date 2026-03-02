const { getDriver } = require("../utils/driver.js");

class BasePage {

  async waitFor(element, timeout = 10000) {
    await element.waitForDisplayed({ timeout });
  }

  async click(element, timeout = 10000) {
    await this.waitFor(element, timeout);
    await element.click();
  }

  async getText(element, timeout = 10000) {
    await this.waitFor(element, timeout);
    return await element.getText();
  }

  async pause(ms) {
    await getDriver().pause(ms);
  }
}

module.exports = BasePage;
