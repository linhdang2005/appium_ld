const BasePage = require("./BasePage.js");
const { getDriver } = require("../utils/driver.js");

class AllListsPage extends BasePage {
  constructor() {
    super();
    this.locators = {
      addButton: "~Add Task",
      todoItemByName: '//android.widget.TextView[@text="%s"]'
    };
  }

  get addButton() {
    return getDriver().$(this.locators.addButton);
  }

  getTodoItemByName(name) {
    const selector = this.locators.todoItemByName.replace("%s", name);
    return getDriver().$(selector);
  }

  // Actions
  async tapAddButton() {
    await this.click(this.addButton);
  }

  async isTodoDisplayed(name) {
    const todo = this.getTodoItemByName(name);
    try {
      return await todo.isDisplayed();
    } catch {
      return false;
    }
  }

  async clickOnTodoItem(name) {
    const todoDetail = this.getTodoItemByName(name);
    await this.click(todoDetail);
  }
}

module.exports = new AllListsPage();
