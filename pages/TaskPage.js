const BasePage = require("./BasePage.js");
const { getDriver } = require("../utils/driver.js");

class NewTaskPage extends BasePage {
  constructor() {
    super();
    this.locators = {
      editTaskName: "id=com.splendapps.splendo:id/edtTaskName",
      dueDateField: "id=com.splendapps.splendo:id/edtDueD",
      saveTaskButton: "~Save Task",
      deleteTaskButton: "~Delete Task",
      deleteConfirmButton: "id=android:id/button1"
    };
  }

  get editTaskName() {
    return getDriver().$(this.locators.editTaskName);
  }

  get dueDateField() {
    return getDriver().$(this.locators.dueDateField);
  }

  get saveTaskButton() {
    return getDriver().$(this.locators.saveTaskButton);
  }

  get deleteTaskButton() {
    return getDriver().$(this.locators.deleteTaskButton);
  }

  get deleteConfirmButton() {
    return getDriver().$(this.locators.deleteConfirmButton);
  }

  // open due date picker
  async openDueDatePicker() {
    await this.dueDateField.click();
  }

  // Actions
  async enterTaskName(taskName) {
    await this.waitFor(this.editTaskName);
    await this.editTaskName.addValue(taskName);
  }

  async enterTaskNameEdit(taskNameEdit) {
    await this.waitFor(this.editTaskName);
    await this.editTaskName.clearValue();
    await getDriver().pause(200);
    await this.editTaskName.addValue(taskNameEdit);
  }

  async editDueDate() {
    await this.waitFor(this.dueDateField, 10000);
    await this.dueDateField.click();
  }

  async saveTask() {
    await this.waitFor(this.saveTaskButton, 10000);
    await this.saveTaskButton.click();
  }

  async deleteTask() {
    await this.waitFor(this.deleteTaskButton, 10000);
    await this.deleteTaskButton.click();
    await this.waitFor(this.deleteConfirmButton, 10000);
    await this.deleteConfirmButton.click();
  }
}

module.exports = new NewTaskPage();
