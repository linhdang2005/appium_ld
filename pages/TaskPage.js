const BasePage = require("./BasePage.js");
const { getDriver } = require("../utils/driver.js");


class NewTaskPage extends BasePage {

  // Enter task name input field
  get editTaskName() {
    return getDriver().$("id=com.splendapps.splendo:id/edtTaskName");
  }

  // Due date field 
  get dueDateField() {
    return getDriver().$("id=com.splendapps.splendo:id/edtDueD");
  }

  // save task
  get saveTaskButton() { 
    return getDriver().$("~Save Task");
  }

  // delete button
  get deleteTaskButton() { 
    return getDriver().$("~Delete Task");
  }
  // confirm delete button
  get deleteConfirmButton() { 
    return getDriver().$("id=android:id/button1");
  }

  // open due date picker
  async openDueDatePicker() {
    await this.dueDateField.click();
  } 

  // Actions
   // Enter task name   
    async enterTaskName(taskName) { 
    await this.editTaskName.waitForDisplayed();
    await this.editTaskName.addValue(taskName);
    }
    //Enter task name edit
    async enterTaskNameEdit(taskName_edit) { 
    await this.editTaskName.waitForDisplayed();
    await this.editTaskName.clearValue();
    await getDriver.pause(200);
    await this.editTaskName.addValue(taskName_edit);
    }
    // Tap on due date field to open date picker
    async editDueDate() {
    await this.dueDateField.waitForDisplayed({ timeout: 10000 });
    await this.dueDateField.click();
    }
    // click save button
    async saveTask() {
    await this.saveTaskButton.waitForDisplayed({ timeout: 10000 });
    await this.saveTaskButton.click();
    }
    // delete task
    async deleteTask() {
    await this.deleteTaskButton.waitForDisplayed({ timeout: 10000 });
    await this.deleteTaskButton.click();
    await this.deleteConfirmButton.waitForDisplayed({ timeout: 10000 });
    await this.deleteConfirmButton.click();
    }


}

module.exports = new NewTaskPage();
