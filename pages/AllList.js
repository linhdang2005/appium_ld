const BasePage = require("./BasePage.js");
const { getDriver } = require("../utils/driver.js");

class AllListsPage extends BasePage {
  // Add button
  get addButton() {
    return getDriver().$("~Add Task");
  }

  // Todo item
  todoItemByName(name) {
    return getDriver().$(`//android.widget.TextView[@text="${name}"]`);
  }

  // Actions
  async tapAddButton() {
    await this.click(this.addButton);
  }

  async isTodoDisplayed(name) {
    const todo = this.todoItemByName(name);
    try {
      return await todo.isDisplayed();
    } catch {
      return false;
    }
  }

  async clickOnTodoItem(name) {
    const todoDetail = this.todoItemByName(name);
    await this.click(todoDetail);
  }
}

module.exports = new AllListsPage();