const { getDriver } = require("../utils/driver.js");

class DatePicker {
  // day define
  dayByNumber(day) {
    return getDriver().$(`//android.view.View[@text="${day}"]`);
  }

  // month year header
  get monthYearHeader() {
    return getDriver().$("id=android:id/date_picker_header_date");
  }

  // OK and Cancel buttons
  get okButton() {
    return getDriver().$("id=android:id/button1");
  }

  get cancelButton() {
    return getDriver().$("id=android:id/button2");
  }

  // Action
  async selectDay(day) {
    const dayElement = this.dayByNumber(day);
    await dayElement.waitForDisplayed();
    await dayElement.click();
  }

  async confirm() {
    await this.okButton.waitForDisplayed();
    await this.okButton.click();
  }
}

module.exports = new DatePicker();