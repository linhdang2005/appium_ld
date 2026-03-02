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

describe("Edit Todo Task", function () {
  this.timeout(60000);

  it("should edit existing task successfully", async function () {
    const { day } = parseDate(testData.dueDate_edit);

    await step("Open existing task", async () => {
      await AllListPage.clickOnTodoItem(testData.taskName);
    });

    await step("Update task name", async () => {
      await TaskPage.enterTaskNameEdit(testData.taskName_edit);
    });

    await step("Update due date", async () => {
      await TaskPage.editDueDate();
      await DatePicker.selectDay(day);
      await DatePicker.confirm();
    });

    await step("Save updated task", async () => {
      await TaskPage.saveTask();
    });

    await step("Verify updated task is displayed", async () => {
      expect(await AllListPage.isTodoDisplayed(testData.taskName_edit)).toBe(true);
    });
  });
});
