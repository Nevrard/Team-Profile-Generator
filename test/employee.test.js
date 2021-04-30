const Employee = require("../lib/employee");

describe("Employee",() => {

it("Can create Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

it("Can get name through getName()", () => {
  const test = "Adam";
  const e = new Employee(test);
  expect(e.getName()).toBe(test);
});

it("Can get id through getId()", () => {
  const test = 34;
  const e = new Employee("Foo", test);
  expect(e.getId()).toBe(test);
});

it ("Can get email through getEmail()", () => {
  const test = "test@test.com";
  const e = new Employee("Foo", 1, test);
  expect(e.getEmail()).toBe(test);
});

it("getRole() should return \"Employee\"", () => {
  const test = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(test);
});
});