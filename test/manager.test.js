const Manager = require("../lib/manager");

it("Can set office number via constructor argument", () => {
  const test = 100;
  const e = new Manager("Jean", 1, "test@test.com", test);
  expect(e.officeNumber).toBe(test);
});

it("getRole() should return Manager", () => {
  const test= "Manager";
  const e = new Manager("Wallid", 1, "wallid@gmail.com", 100);
  expect(e.getRole()).toBe(test);
});

it("Can get office number with getOffice()", () => {
  const test = 100;
  const e = new Manager("Wallid", 1, "wallid@gmail.com", test);
  expect(e.getOfficeNumber()).toBe(test);
});