const testData = require("../utils/testData.json");
const { parseDate } = require("../utils/dateUtils.js");
const TaskPage = require("../pages/TaskPage.js");
const AllListPage = require("../pages/AllList.js");
const DatePicker = require("../pages/datePicker.js");
const { expect } = require("expect");

async function step(label, action) {
  console.log(`[STEP] ${label}`);
  await action();
}

describe("Create Todo Task", function () {
  this.timeout(60000);

  it("should create new task successfully", async function () {
    const { day } = parseDate(testData.dueDate);

    await step("Open create task screen", async () => {
      await AllListPage.tapAddButton();
    });

    await step("Enter task name", async () => {
      await TaskPage.enterTaskName(testData.taskName);
    });

    await step("Select due date", async () => {
      await TaskPage.editDueDate();
      await DatePicker.selectDay(day);
      await DatePicker.confirm();
    });

    await step("Save task", async () => {
      await TaskPage.saveTask();
    });

    await step("Verify task is displayed", async () => {
      expect(await AllListPage.isTodoDisplayed(testData.taskName)).toBe(true);
    });
  });
});
