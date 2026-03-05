const BasePage = require("./BasePage.js");
const { getDriver } = require("../utils/driver.js");

class DatePicker extends BasePage {
  constructor() {
    super();
    this.locators = {
      dayByNumber: '//android.view.View[@text="%s"]',
      monthYearHeader: "id=android:id/date_picker_header_date",
      okButton: "id=android:id/button1",
      cancelButton: "id=android:id/button2"
    };
  }

  getDayByNumber(day) {
    const selector = this.locators.dayByNumber.replace("%s", day);
    return getDriver().$(selector);
  }

  get monthYearHeader() {
    return getDriver().$(this.locators.monthYearHeader);
  }

  get okButton() {
    return getDriver().$(this.locators.okButton);
  }

  get cancelButton() {
    return getDriver().$(this.locators.cancelButton);
  }

  // Action
  async selectDay(day) {
    const dayElement = this.getDayByNumber(day);
    await this.waitFor(dayElement);
    await dayElement.click();
  }

  async confirm() {
    await this.waitFor(this.okButton);
    await this.okButton.click();
  }
}

module.exports = new DatePicker();
