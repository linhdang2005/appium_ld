const testData = require("../utils/testData.json");
const { parseDate } = require("../utils/dateUtils.js");
const NewTaskPage = require("../pages/TaskPage.js");
const AllListPage = require("../pages/AllList.js");
const DatePicker = require("../pages/datePicker.js");
const { getDriver } = require("../utils/driver.js");
const { expect } = require("expect");

describe("Create Todo Task", function () {

  it("should create new task successfully", async function () {
    // Driver lúc này ĐÃ được init trong before()
    const driver = getDriver();

    // Page Object đã dùng singleton driver → KHÔNG truyền driver nữa
    const newTaskPage = NewTaskPage;
    const datePicker = DatePicker;
    const allListPage = AllListPage;

    // Navigate to New Task Page
    await allListPage.tapAddButton();

    // Input task name
    await newTaskPage.enterTaskName(testData.taskName);

    // Open date picker
    await newTaskPage.editDueDate();

    // Parse date
    const { day } = parseDate(testData.dueDate);

    // Select day
    await datePicker.selectDay(day);

    // Confirm date selection
    await datePicker.confirm();

    // Save the new task
    await newTaskPage.saveTask();

    // Verify the new task is displayed in the list
    expect(await allListPage.isTodoDisplayed(testData.taskName)).toBe(true);

    console.log("Test Create New Task successfully");
  });

});
