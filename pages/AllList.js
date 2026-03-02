const BasePage = require("./BasePage.js");
const { getDriver } = require("../utils/driver.js");

class AllListsPage extends BasePage {

  // Add button
  get addButton() {
    return getDriver().$("~Add Task");
  }

  // Todo item 
  todoItemByName(name) {
    return getDriver().$(
      `//android.widget.TextView[@text="${name}"]`
    );
  }


  // Actions
    // Tap on Add button
  async tapAddButton() {
    await this.click(this.addButton);
  }
    // Check if a todo item is displayed
  async isTodoDisplayed(name) {
    const todo = this.todoItemByName(name);
    return await todo.isDisplayed();
  }
   //tap on todo item
    async clickOnTodoItem(name) {  
    const todo_detail = this.todoItemByName(name);
    await this.click(todo_detail);
  }
}

module.exports = new AllListsPage();
