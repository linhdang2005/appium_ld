const testData = require("../utils/testData.json");
const { parseDate } = require("../utils/dateUtils.js");
const EditTaskPage = require("../pages/TaskPage.js");
const AllListPage = require("../pages/AllList.js");
const DatePicker = require("../pages/datePicker.js");
const { getDriver } = require("../utils/driver.js");
const { expect } = require("expect");




async function main() {
    const driver = await getDriver();
    const editTaskPage = new EditTaskPage(driver);
    const datePicker = new DatePicker(driver);
    const allListPage = new AllListPage(driver);

    // Open Task detail screen
    await allListPage.clickOnTodoItem(testData.taskName_edit);
   // delete task
   await editTaskPage.deleteTask();

     //Verify the task is deleted on the list
    expect(await allListPage.isTodoDisplayed( testData.taskName_edit)).toBe(false);

    console.log("Delete Task successuflly");
}

main().catch(console.error);