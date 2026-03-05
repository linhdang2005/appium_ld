const testData = require("../data/testData.json");
const TaskPage = require("../pages/TaskPage.js");
const AllListPage = require("../pages/AllList.js");
const { expect } = require("expect");

async function step(label, action) {
  console.log(`[STEP] ${label}`);
  await action();
}

describe("Delete Todo Task", function () {
  this.timeout(60000);

  it("should delete existing task successfully", async function () {
    await step("Open task to delete", async () => {
      await AllListPage.clickOnTodoItem(testData.taskName_edit);
    });

    await step("Delete task and confirm", async () => {
      await TaskPage.deleteTask();
    });

    await step("Verify task is removed", async () => {
      expect(await AllListPage.isTodoDisplayed(testData.taskName_edit)).toBe(false);
    });
  });
});
