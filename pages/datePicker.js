class DatePicker {
  constructor(driver) {
    this.driver = driver;
  }

  // day define
  dayByNumber(day) {
    return this.driver.$(
      `//android.view.View[@text="${day}"]`
    );
  }

  // month year header
  get monthYearHeader() {
    return this.driver.$("id=android:id/date_picker_header_date");
  }

  // OK and Cancel buttons
  get okButton() {
    return this.driver.$("id=android:id/button1");
  }

  get cancelButton() {
    return this.driver.$("id=android:id/button2");
  }

  //Action
  async selectDay(day) {
    const dayElement = this.dayByNumber(day);
    await dayElement.waitForDisplayed();
    await dayElement.click();
  }

  async confirm() {
    await this.okButton.click();
  }
}

module.exports = DatePicker;
