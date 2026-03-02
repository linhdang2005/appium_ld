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
    await allListPage.clickOnTodoItem(testData.taskName);

    // Update task name
    await editTaskPage.enterTaskNameEdit(testData.taskName_edit);

    // Open date picker
    await editTaskPage.editDueDate();

    // parse date
    const { day } = parseDate(testData.dueDate_edit);

    // select day
    await datePicker.selectDay(day);

    // confirm date selection
    await datePicker.confirm();

    // Save the new task
    await editTaskPage.saveTask();

     //Verify the new task is displayed in the list
    expect(await allListPage.isTodoDisplayed( testData.taskName_edit)).toBe(true);

    console.log("Update Task successuflly");
}

main().catch(console.error);